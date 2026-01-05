import { Helmet } from "react-helmet-async";

import Formsection from "../../../component/servicescomponents/ecommercecomponent/form";
import Hero from "../../../component/servicescomponents/ecommercecomponent/hero";
import Tailored from "../../../component/servicescomponents/ecommercecomponent/tailored";
import Transformation from "../../../component/servicescomponents/ecommercecomponent/transformation";
import Wework from "../../../component/servicescomponents/ecommercecomponent/wework";

function Ecommerce() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>E-Commerce Development | AxoraWeb Solutions</title>
        <meta 
          name="description" 
          content="AxoraWeb Solutions offers professional e-commerce development services, building scalable, secure, and SEO-friendly online stores with React, Next.js, and custom solutions." 
        />
        <meta 
          name="keywords" 
          content="e-commerce development, online store development, React e-commerce, Next.js, scalable e-commerce solutions, custom online store" 
        />
        <link rel="canonical" href="https://axorawebsolutions.com/services/ecommerce" />

        {/* Open Graph */}
        <meta property="og:title" content="E-Commerce Development | AxoraWeb Solutions" />
        <meta property="og:description" content="Professional e-commerce development services for scalable, secure, and SEO-friendly online stores using React, Next.js, and custom solutions." />
        <meta property="og:url" content="https://axorawebsolutions.com/services/ecommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Commerce Development | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Professional e-commerce development services for scalable, secure, and SEO-friendly online stores using React, Next.js, and custom solutions." />
        <meta name="twitter:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* JSON-LD Structured Data for Organization */}
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
      <Hero />
      <Tailored />
      <Wework />
      <Formsection />
      <Transformation />
    </>
  );
}

export default Ecommerce;
