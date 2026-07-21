import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";

function resizeAndCompress(file, maxWidth = 500) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("teachers");

  const [teachers, setTeachers] = useState([]);
  const [notices, setNotices] = useState([]);
  const [results, setResults] = useState([]);
  const [gallery, setGallery] = useState([]);

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    const t = await getDocs(collection(db, "juddha_teachers"));
    setTeachers(t.docs.map(d => ({ id: d.id, ...d.data() })));

    const n = await getDocs(query(collection(db, "juddha_notices"), orderBy("createdAt", "desc")));
    setNotices(n.docs.map(d => ({ id: d.id, ...d.data() })));

    const r = await getDocs(query(collection(db, "juddha_results"), orderBy("createdAt", "desc")));
    setResults(r.docs.map(d => ({ id: d.id, ...d.data() })));

    const g = await getDocs(query(collection(db, "juddha_gallery"), orderBy("createdAt", "desc")));
    setGallery(g.docs.map(d => ({ id: d.id, ...d.data() })));
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/admin/login");
  }

  // ===== TEACHER FUNCTIONS =====
  function updateTeacher(id, field, value) {
    setTeachers(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  }
  async function saveTeacher(t) {
    await updateDoc(doc(db, "juddha_teachers", t.id), {
      name: t.name || "",
      position: t.position || "",
      subject: t.subject || "",
      phone: t.phone || "",
      photo: t.photo || "",
    });
    alert("शिक्षक जानकारी सुरक्षित भयो!");
  }
  async function uploadTeacherPhoto(t, file) {
    setUploading(true);
    try {
      const base64 = await resizeAndCompress(file, 400);
      updateTeacher(t.id, "photo", base64);
    } catch (err) {
      alert("फोटो अपलोड गर्न समस्या भयो।");
    }
    setUploading(false);
  }

  // ===== NOTICE FUNCTIONS =====
  async function addNotice() {
    const ref = await addDoc(collection(db, "juddha_notices"), {
      title: "", description: "", filePath: "", createdAt: new Date(),
    });
    setNotices(prev => [{ id: ref.id, title: "", description: "", filePath: "" }, ...prev]);
  }
  function updateNotice(id, field, value) {
    setNotices(prev => prev.map(n => n.id === id ? { ...n, [field]: value } : n));
  }
  async function saveNotice(n) {
    await updateDoc(doc(db, "juddha_notices", n.id), {
      title: n.title || "", description: n.description || "", filePath: n.filePath || "",
    });
    alert("सूचना सुरक्षित भयो!");
  }
  async function deleteNotice(id) {
    if (!confirm("यो सूचना मेटाउने?")) return;
    await deleteDoc(doc(db, "juddha_notices", id));
    setNotices(prev => prev.filter(n => n.id !== id));
  }

  // ===== RESULT FUNCTIONS =====
  async function addResult() {
    const ref = await addDoc(collection(db, "juddha_results"), {
      title: "", driveLink: "", createdAt: new Date(),
    });
    setResults(prev => [{ id: ref.id, title: "", driveLink: "" }, ...prev]);
  }
  function updateResult(id, field, value) {
    setResults(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r));
  }
  async function saveResult(r) {
    await updateDoc(doc(db, "juddha_results", r.id), {
      title: r.title || "", driveLink: r.driveLink || "",
    });
    alert("नतिजा लिंक सुरक्षित भयो!");
  }
  async function deleteResult(id) {
    if (!confirm("यो नतिजा मेटाउने?")) return;
    await deleteDoc(doc(db, "juddha_results", id));
    setResults(prev => prev.filter(r => r.id !== id));
  }

  // ===== GALLERY FUNCTIONS =====
  async function uploadGalleryPhoto(file) {
    setUploading(true);
    try {
      const base64 = await resizeAndCompress(file, 700);
      const docRef = await addDoc(collection(db, "juddha_gallery"), {
        imagePath: base64, title: "", createdAt: new Date(),
      });
      setGallery(prev => [{ id: docRef.id, imagePath: base64, title: "" }, ...prev]);
    } catch (err) {
      alert("फोटो अपलोड गर्न समस्या भयो।");
    }
    setUploading(false);
  }
  async function deleteGalleryPhoto(id) {
    if (!confirm("यो फोटो मेटाउने?")) return;
    await deleteDoc(doc(db, "juddha_gallery", id));
    setGallery(prev => prev.filter(g => g.id !== id));
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-topbar">
        <h2>🔐 एडमिन ड्यासबोर्ड — श्री जुद्ध मा.वि.</h2>
        <button onClick={handleLogout} className="admin-logout-btn">लगआउट</button>
      </div>

      <div className="admin-tabs">
        <button className={tab === "teachers" ? "active" : ""} onClick={() => setTab("teachers")}>👨‍🏫 शिक्षक</button>
        <button className={tab === "notices" ? "active" : ""} onClick={() => setTab("notices")}>📢 सूचना</button>
        <button className={tab === "results" ? "active" : ""} onClick={() => setTab("results")}>📊 नतिजा</button>
        <button className={tab === "gallery" ? "active" : ""} onClick={() => setTab("gallery")}>🖼️ ग्यालरी</button>
      </div>

      {uploading && <div className="admin-uploading-banner">फोटो अपलोड हुँदैछ...</div>}

      <div className="admin-content">
        {tab === "teachers" && (
          <div className="admin-list">
            {teachers.map((t, i) => (
              <div className="admin-item-card" key={t.id}>
                <div className="admin-item-photo">
                  {t.photo ? <img src={t.photo} alt="" /> : <span>👤</span>}
                  <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && uploadTeacherPhoto(t, e.target.files[0])} />
                </div>
                <div className="admin-item-fields">
                  <input placeholder={`शिक्षक ${i + 1} को नाम`} value={t.name || ""} onChange={(e) => updateTeacher(t.id, "name", e.target.value)} />
                  <input placeholder="पद" value={t.position || ""} onChange={(e) => updateTeacher(t.id, "position", e.target.value)} />
                  <input placeholder="विषय" value={t.subject || ""} onChange={(e) => updateTeacher(t.id, "subject", e.target.value)} />
                  <input placeholder="फोन नम्बर" value={t.phone || ""} onChange={(e) => updateTeacher(t.id, "phone", e.target.value)} />
                  <button onClick={() => saveTeacher(t)}>💾 सुरक्षित गर्नुहोस्</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "notices" && (
          <div className="admin-list">
            <button className="admin-add-btn" onClick={addNotice}>➕ नयाँ सूचना थप्नुहोस्</button>
            {notices.map((n, i) => (
              <div className="admin-item-card" key={n.id}>
                <div className="admin-item-fields full">
                  <input placeholder={`सूचना ${i + 1} शीर्षक`} value={n.title || ""} onChange={(e) => updateNotice(n.id, "title", e.target.value)} />
                  <textarea placeholder="विवरण" value={n.description || ""} onChange={(e) => updateNotice(n.id, "description", e.target.value)} />
                  <input placeholder="File Link (optional)" value={n.filePath || ""} onChange={(e) => updateNotice(n.id, "filePath", e.target.value)} />
                  <div className="admin-item-actions">
                    <button onClick={() => saveNotice(n)}>💾 सुरक्षित</button>
                    <button className="danger" onClick={() => deleteNotice(n.id)}>🗑️ मेटाउनुहोस्</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "results" && (
          <div className="admin-list">
            <button className="admin-add-btn" onClick={addResult}>➕ नयाँ नतिजा थप्नुहोस्</button>
            {results.map((r, i) => (
              <div className="admin-item-card" key={r.id}>
                <div className="admin-item-fields full">
                  <input placeholder={`नतिजा ${i + 1} शीर्षक`} value={r.title || ""} onChange={(e) => updateResult(r.id, "title", e.target.value)} />
                  <input placeholder="Google Drive Link" value={r.driveLink || ""} onChange={(e) => updateResult(r.id, "driveLink", e.target.value)} />
                  <div className="admin-item-actions">
                    <button onClick={() => saveResult(r)}>💾 सुरक्षित</button>
                    <button className="danger" onClick={() => deleteResult(r.id)}>🗑️ मेटाउनुहोस्</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "gallery" && (
          <div className="admin-list">
            <div className="admin-gallery-upload">
              <label>➕ नयाँ फोटो अपलोड गर्नुहोस्</label>
              <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && uploadGalleryPhoto(e.target.files[0])} disabled={uploading} />
            </div>
            <div className="admin-gallery-grid">
              {gallery.map(g => (
                <div className="admin-gallery-item" key={g.id}>
                  <img src={g.imagePath} alt="" />
                  <button className="danger" onClick={() => deleteGalleryPhoto(g.id)}>🗑️</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}