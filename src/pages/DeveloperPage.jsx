import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import developerPhoto from "../assets/developer.jpg";

export default function DeveloperPage() {
  return (
    <div className="dev-page">
      <Helmet>
        <title>Raju Mahato - Nepal's Best App & Website Developer</title>
        <meta name="description" content="Raju Mahato को जीवनी" />
      </Helmet>

      <div className="dev-page-header">
        <Link to="/" className="dev-back-link">← गृहपृष्ठमा फर्कनुहोस्</Link>
        <div className="dev-hero">
          <img src={developerPhoto} alt="Raju Mahato" className="dev-hero-photo" />
          <h1>Raju Mahato</h1>
          <p className="dev-hero-tag">Nepal's Best and Top Individual App and Website Developer</p>
        </div>
      </div>

      <div className="dev-page-content">
        <section className="dev-bio-section">
          <p className="dev-coming-soon">✍️ जीवनी छिट्टै थपिँदैछ...</p>
        </section>
      </div>
    </div>
  );
}