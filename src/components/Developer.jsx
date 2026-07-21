import developerPhoto from "../assets/developer.jpg";

export default function Developer() {
  return (
    <section className="developer-section">
      <div className="developer-inner">
        <div className="developer-photo">
          <img src={developerPhoto} alt="Raju Mahato" />
        </div>
        <div className="developer-info">
          <h3>Website Developed By</h3>
          <h2>Raju Mahato</h2>
          <p className="developer-tag">Nepal's Best and Top Individual App and Website Developer</p>
          <p className="developer-address">Jetharahiya, Yamunamai-1, Rautahat, Madhesh Province, Nepal</p>
          <div className="developer-links">
            <a href="https://www.facebook.com/share/1FHsVieV2R/?mibextid=wwXIfr" target="_blank" rel="noreferrer">📘 Facebook</a>
            <a href="https://wa.me/8109036694264" target="_blank" rel="noreferrer">📱 WhatsApp</a>
            <a href="mailto:mahatoraju0509@gmail.com">✉️ Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}