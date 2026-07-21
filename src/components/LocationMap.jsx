export default function LocationMap() {
  return (
    <section className="map-section">
      <h2>{"\u0939\u093e\u092e\u094d\u0930\u094b \u0938\u094d\u0925\u093e\u0928"}</h2>
      <div className="map-embed">
        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=26.7609677,85.2729177&z=17&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a href="https://www.google.com/maps/place/Judh+Mabi+Multiple+Campus/@26.7609677,85.2729177,623m" target="_blank" rel="noreferrer" className="map-direction-link">{"Google Maps \u092e\u093e \u0939\u0947\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d"}</a>
    </section>
  );
}