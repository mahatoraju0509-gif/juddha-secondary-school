import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "श्री जुद्ध माध्यमिक विद्यालय",
    "alternateName": "Juddha Secondary School",
    "foundingDate": "1996",
    "url": "https://juddha-secondary-school-674l.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "गौर",
      "addressRegion": "मधेश प्रदेश",
      "addressCountry": "NP"
    },
    "telephone": "9855040326",
    "email": "juddhaschool1996@gmail.com",
    "sameAs": [
      "https://www.facebook.com/share/1FHsVieV2R/?mibextid=wwXIfr"
    ],
    "creator": {
      "@type": "Person",
      "name": "Raju Mahato",
      "url": "https://nepalwebsitedeveloper.com",
      "jobTitle": "Nepal's Best and Top Individual App and Website Developer"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://juddha-secondary-school-674l.vercel.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}