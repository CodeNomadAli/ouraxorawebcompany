import { Helmet } from "react-helmet-async";

import Clientsay from "../../../component/servicescomponents/customecomponents/clientsay";
import Conversion from "../../../component/servicescomponents/designcomponents/conversion";
import Diamondsec from "../../../component/servicescomponents/designcomponents/diamond";
import Herodesign from "../../../component/servicescomponents/designcomponents/herodesign";
import Pretty from "../../../component/servicescomponents/designcomponents/pretty";
import Productsec from "../../../component/servicescomponents/designcomponents/product";
import Transformation from "../../../component/servicescomponents/designcomponents/transformation";
import Formsection from "../../../component/servicescomponents/ecommercecomponent/form";

function Design() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>UI/UX Design Services | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="AxoraWeb Solutions offers professional UI/UX design services, creating user-centric, engaging, and visually appealing interfaces that boost user experience and conversions."
        />
        <meta
          name="keywords"
          content="UI UX design, user experience design, interface design, web design, mobile app design, AxoraWeb Solutions"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/services/design" />

        {/* Open Graph */}
        <meta property="og:title" content="UI/UX Design Services | AxoraWeb Solutions" />
        <meta property="og:description" content="Professional UI/UX design services creating user-centric, engaging, and visually appealing interfaces for web and mobile applications." />
        <meta property="og:url" content="https://axorawebsolutions.com/services/design" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design Services | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Professional UI/UX design services creating user-centric, engaging, and visually appealing interfaces for web and mobile applications." />
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
      <Herodesign />
      <Conversion />
      <Pretty />
      <Diamondsec />
      <Transformation />
      <Clientsay />
      <Productsec />
      <Formsection />
    </>
  );
}

export default Design;
