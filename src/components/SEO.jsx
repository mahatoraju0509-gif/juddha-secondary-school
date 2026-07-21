import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "श्री जुद्ध माध्यमिक विद्यालय",
    "alternateName": "Juddha Secondary School",
    "foundingDate": "1996",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "गौर",
      "addressRegion": "मधेश प्रदेश",
      "addressCountry": "NP"
    },
    "telephone": "9855040326",
    "email": "juddhaschool1996@gmail.com"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
