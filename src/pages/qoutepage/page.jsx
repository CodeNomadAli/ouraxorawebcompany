
import QuoteHero from "../../component/qoutecomponents/qouteHero";
import QuotingProcess from "../../component/qoutecomponents/QuotingProcess";


import { Helmet } from "react-helmet-async";



function QoutePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>AxoraWeb Solutions | Professional Web & App Development</title>
        <meta
          name="description"
          content="AxoraWeb Solutions is a leading web and app development company offering React, Next.js, Node.js, UI/UX design, eCommerce, and custom software solutions for businesses worldwide."
        />
        <meta
          name="keywords"
          content="web development, app development, react developers, next js agency, node js development, UI UX design, ecommerce development, custom software"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="AxoraWeb Solutions | Professional Web & App Development" />
        <meta property="og:description" content="Leading web and app development company offering React, Next.js, Node.js, UI/UX, eCommerce, and custom software solutions." />
        <meta property="og:url" content="https://axorawebsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AxoraWeb Solutions | Professional Web & App Development" />
        <meta name="twitter:description" content="Leading web and app development company offering React, Next.js, Node.js, UI/UX, eCommerce, and custom software solutions." />
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
      
      <QuoteHero />
      <QuotingProcess />
    </>
  );
}

export default QoutePage;
