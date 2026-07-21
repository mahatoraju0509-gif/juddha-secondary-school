import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import schoolLogo from "../assets/school-logo.png";

const navItems = [
  { id: "home", label: "गृहपृष्ठ", icon: "🏠" },
  { id: "teachers", label: "शिक्षक", icon: "👨‍🏫" },
  { id: "notices", label: "सूचना", icon: "📢" },
  { id: "results", label: "नतिजा", icon: "📊" },
  { id: "gallery", label: "ग्यालरी", icon: "🖼️" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname !== "/") return;
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = item.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="nav-brand">
          <img src={schoolLogo} alt="School Logo" className="nav-logo" />
          <span className="nav-brand-text">जुद्ध मा.वि.</span>
        </div>

        <div className="nav-tabs-group">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-tab ${active === item.id && location.pathname === "/" ? "active" : ""}`}
              onClick={() => handleClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
          <Link to="/developer" className={`nav-tab ${location.pathname === "/developer" ? "active" : ""}`}>
            <span className="nav-icon">👨‍💻</span>
            <span>डेभलपर</span>
          </Link>
          <Link to="/admin/login" className="nav-tab nav-admin">
            <span className="nav-icon">🔐</span>
            <span>एडमिन</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}