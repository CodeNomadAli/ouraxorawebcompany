import { Helmet } from "react-helmet-async";

import Corented from "../../component/contactcomponent/corented";
import Projects from "../../component/contactcomponent/projects";
import Trusted from "../../component/contactcomponent/trusted";

function Contact() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="Get in touch with AxoraWeb Solutions for web development, e-commerce, custom software, and UI/UX design services. We provide professional solutions tailored for your business."
        />
        <meta
          name="keywords"
          content="AxoraWeb Solutions contact, contact web development company, get in touch, custom software, UI UX design, e-commerce solutions"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | AxoraWeb Solutions" />
        <meta property="og:description" content="Get in touch with AxoraWeb Solutions for web development, e-commerce, custom software, and UI/UX design services." />
        <meta property="og:url" content="https://axorawebsolutions.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Get in touch with AxoraWeb Solutions for web development, e-commerce, custom software, and UI/UX design services." />
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
      <Projects />
      <Trusted />
      <Corented />
    </>
  );
}

export default Contact;
