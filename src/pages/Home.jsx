import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import Developer from "../components/Developer";
import LiveClock from "../components/LiveClock";
import WhatsAppFloat from "../components/WhatsAppFloat";
import LocationMap from "../components/LocationMap";
import schoolPhoto from "../assets/school-photo.png";

const emptyTeachers = Array.from({ length: 30 }, (_, i) => ({
  id: `slot-${i + 1}`,
  name: "",
  position: "",
  subject: "",
  phone: "",
  photo: "",
}));

const emptyNotices = [
  { id: "notice-slot-1", title: "", description: "", filePath: "" },
];

const emptyResults = [
  { id: "result-slot-1", title: "", driveLink: "" },
];

const emptyGallery = Array.from({ length: 8 }, (_, i) => ({
  id: `gallery-slot-${i + 1}`,
  imagePath: "",
  title: "",
}));

export default function Home() {
  const [teachers, setTeachers] = useState(emptyTeachers);
  const [notices, setNotices] = useState(emptyNotices);
  const [results, setResults] = useState(emptyResults);
  const [gallery, setGallery] = useState(emptyGallery);

  useEffect(() => {
    async function loadData() {
      const t = await getDocs(collection(db, "juddha_teachers"));
      if (!t.empty) setTeachers(t.docs.map(d => ({ id: d.id, ...d.data() })));

      const n = await getDocs(query(collection(db, "juddha_notices"), orderBy("createdAt", "desc")));
      if (!n.empty) setNotices(n.docs.map(d => ({ id: d.id, ...d.data() })));

      const r = await getDocs(query(collection(db, "juddha_results"), orderBy("createdAt", "desc")));
      if (!r.empty) setResults(r.docs.map(d => ({ id: d.id, ...d.data() })));

      const g = await getDocs(query(collection(db, "juddha_gallery"), orderBy("createdAt", "desc"), limit(8)));
      if (!g.empty) setGallery(g.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    loadData();
  }, []);

  return (
    <div>
      <SEO title="श्री जुद्ध माध्यमिक विद्यालय, गौर" description="गुणस्तरीय शिक्षा - २०५२ सालदेखि" />
      <Navbar />

      <header className="site-header">
        <div className="header-inner">
          <div className="header-photo">
            <img src={schoolPhoto} alt="School" />
          </div>
          <div className="header-text">
            <h1>श्री जुद्ध माध्यमिक विद्यालय</h1>
            <p>गौर, नेपाल | EMIS: 320330003 | NEB: 32007</p>
            <p>फोन: 9855040326 | इमेल: juddhaschool1996@gmail.com</p>
          </div>
        </div>
      </header>

      <div className="welcome-banner">
        <h2>स्वागत छ - श्री जुद्ध मा.वि. गौर</h2>
        <p>गुणस्तरीय शिक्षा - २०५२ सालदेखि | Quality Education Since 1996</p>
        <LiveClock />
      </div>

      <main className="container">
        <section id="teachers">
          <h2>हाम्रा शिक्षकहरू</h2>
          <div className="grid">
            {teachers.map((t, index) => (
              <div className="teacher-card" key={t.id}>
                <div className="teacher-photo">
                  {t.photo ? <img src={t.photo} alt={t.name || "शिक्षक"} /> : <span className="teacher-icon">👤</span>}
                </div>
                <div className="teacher-info">
                  <h3>{t.name || `शिक्षक ${index + 1}`}</h3>
                  <p className="teacher-position">{t.position || "पद थपिँदैछ"}</p>
                  <p className="teacher-subject">📖 {t.subject || "विषय थपिँदैछ"}</p>
                  <p className="teacher-phone">📞 {t.phone || "सम्पर्क थपिँदैछ"}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="two-col">
          <section id="notices">
            <h2>सूचनाहरू</h2>
            {notices.map((n, index) => (
              <div className="card notice-card" key={n.id}>
                <h3>{n.title || `सूचना ${index + 1}`}</h3>
                <p>{n.description || "विवरण थपिँदैछ..."}</p>
                {n.filePath && <a href={n.filePath} target="_blank" rel="noreferrer">डाउनलोड</a>}
              </div>
            ))}
          </section>

          <section id="results">
            <h2>परीक्षा नतिजा</h2>
            {results.map((r, index) => (
              <div className="card result-card" key={r.id}>
                <h3>{r.title || `नतिजा ${index + 1}`}</h3>
                {r.driveLink ? (
                  <a href={r.driveLink} target="_blank" rel="noreferrer" className="drive-link">📄 नतिजा हेर्नुहोस् (Google Drive)</a>
                ) : (
                  <span className="drive-link-pending">लिंक थपिँदैछ</span>
                )}
              </div>
            ))}
          </section>
        </div>

        <section id="gallery">
          <h2>ग्यालरी</h2>
          <div className="grid">
            {gallery.map((g, index) => (
              <div className="gallery-card" key={g.id}>
                {g.imagePath ? (
                  <img src={g.imagePath} alt={g.title || "gallery"} />
                ) : (
                  <div className="gallery-placeholder">
                    <span>🖼️</span>
                    <p>फोटो {index + 1}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <LocationMap />

      <Developer />
      <WhatsAppFloat />

      <footer>
        <p>श्री जुद्ध माध्यमिक विद्यालय, गौर | Developed by Raju Mahato</p>
      </footer>
    </div>
  );
}