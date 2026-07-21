import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("गलत इमेल वा पासवर्ड।");
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-box" onSubmit={handleLogin}>
        <h2>🔐 एडमिन लगइन</h2>
        <p className="admin-login-subtitle">श्री जुद्ध माध्यमिक विद्यालय</p>

        <label>इमेल</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@example.com"
          required
        />

        <label>पासवर्ड</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        {error && <p className="admin-login-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "लगइन हुँदैछ..." : "लगइन गर्नुहोस्"}
        </button>

        <a href="/" className="admin-back-link">← गृहपृष्ठमा फर्कनुहोस्</a>
      </form>
    </div>
  );
}