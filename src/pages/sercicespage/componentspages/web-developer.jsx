import { Helmet } from "react-helmet-async";

import Clientsay from "../../../component/servicescomponents/customecomponents/clientsay";
import Formsection from "../../../component/servicescomponents/ecommercecomponent/form";
import Bulit from "../../../component/servicescomponents/webcomponent/bulitsect";
import Cardweb from "../../../component/servicescomponents/webcomponent/cardweb";
import Heroweb from "../../../component/servicescomponents/webcomponent/heroweb";
import Imgcard from "../../../component/servicescomponents/webcomponent/imgcard";
import Lunch from "../../../component/servicescomponents/webcomponent/lunch";

function Webdeveloper() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Web Development Services | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="AxoraWeb Solutions provides professional web development services, creating responsive, SEO-friendly, and modern websites using React, Next.js, and custom solutions."
        />
        <meta
          name="keywords"
          content="web development, responsive website, react web development, next js development, seo friendly websites, AxoraWeb Solutions"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/services/web-developer" />

        {/* Open Graph */}
        <meta property="og:title" content="Web Development Services | AxoraWeb Solutions" />
        <meta property="og:description" content="Professional web development services creating responsive, SEO-friendly, and modern websites using React, Next.js, and custom solutions." />
        <meta property="og:url" content="https://axorawebsolutions.com/services/web-developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Services | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Professional web development services creating responsive, SEO-friendly, and modern websites using React, Next.js, and custom solutions." />
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
      <Heroweb />
      <Bulit />
      <Lunch />
      <Cardweb />
      <Clientsay />
      <Imgcard />
      <Formsection />
    </>
  );
}

export default Webdeveloper;
