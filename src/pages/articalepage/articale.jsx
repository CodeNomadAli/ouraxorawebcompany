import { Helmet } from "react-helmet-async";

import Customer from "../../component/articlescomponent/customer";
import Enginering from "../../component/articlescomponent/engerning";

function Articles() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Articles | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="Read the latest articles from AxoraWeb Solutions covering web development, custom software, e-commerce, UI/UX design, and technology insights for businesses."
        />
        <meta
          name="keywords"
          content="AxoraWeb Solutions articles, web development blog, software development articles, UI UX design blog, e-commerce insights"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/article" />

        {/* Open Graph */}
        <meta property="og:title" content="Articles | AxoraWeb Solutions" />
        <meta property="og:description" content="Latest articles on web development, software, UI/UX design, and e-commerce from AxoraWeb Solutions." />
        <meta property="og:url" content="https://axorawebsolutions.com/article" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Articles | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Latest articles on web development, software, UI/UX design, and e-commerce from AxoraWeb Solutions." />
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
      <Enginering />

      <Customer />
    </>
  );
}

export default Articles;
