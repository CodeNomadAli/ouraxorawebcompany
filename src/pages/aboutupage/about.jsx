import { Helmet } from "react-helmet-async";

import Architecture from "../../component/aboutcomponent/architect";
import Bridging from "../../component/aboutcomponent/bridging";
import Cardabout from "../../component/aboutcomponent/card";

function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="AxoraWeb Solutions is a professional web development and software company delivering custom software, e-commerce, UI/UX design, and innovative digital solutions worldwide."
        />
        <meta
          name="keywords"
          content="AxoraWeb Solutions, about us, web development company, software company, UI UX design, custom software, e-commerce development"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | AxoraWeb Solutions" />
        <meta property="og:description" content="Professional web development and software company delivering custom software, e-commerce, UI/UX design, and digital solutions worldwide." />
        <meta property="og:url" content="https://axorawebsolutions.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Professional web development and software company delivering custom software, e-commerce, UI/UX design, and digital solutions worldwide." />
        <meta name="twitter:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AxoraWeb Solutions",
            "url": "https://axorawebsolutions.com",
            "logo": "https://axorawebsolutions.com/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.linkedin.com/company/axoraweb",
              "https://twitter.com/axoraweb"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Page Components */}
      <Architecture />
      <Bridging />
      <Cardabout />
    </>
  );
}

export default About;
