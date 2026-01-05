import { Helmet } from "react-helmet-async";

import Clientsay from "../../../component/servicescomponents/customecomponents/clientsay";
import Concept from "../../../component/servicescomponents/customecomponents/concept";
import Ecosystem from "../../../component/servicescomponents/customecomponents/ecosystem";
import Formcustom from "../../../component/servicescomponents/customecomponents/formcustom";
import Softbulid from "../../../component/servicescomponents/customecomponents/softbulid";

function Custom() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Custom Software Development | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="AxoraWeb Solutions provides professional custom software development services, creating scalable, secure, and tailored software solutions to optimize business processes."
        />
        <meta
          name="keywords"
          content="custom software development, tailored software solutions, business software, enterprise software, software automation, AxoraWeb Solutions"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/services/custom" />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Software Development | AxoraWeb Solutions" />
        <meta property="og:description" content="Professional custom software development services for scalable, secure, and tailored software solutions that optimize business processes." />
        <meta property="og:url" content="https://axorawebsolutions.com/services/custom" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Professional custom software development services for scalable, secure, and tailored software solutions that optimize business processes." />
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
      <Softbulid />
      <Ecosystem />
      <Concept />
      <Clientsay />
      <Formcustom />
    </>
  );
}

export default Custom;
