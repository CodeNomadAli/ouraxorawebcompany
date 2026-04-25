import { Helmet } from "react-helmet-async";

// Updated imports inside src/
import Clientsay from "../../component/servicescomponents/customecomponents/clientsay";
import PricingHero from "../../component/pricingcomponents/PricingHero";
import PricingCards from "../../component/pricingcomponents/PricingCards";

function Pricing() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Pricing | AxoraWeb Solutions</title>
        <meta
          name="description"
          content="AxoraWeb Solutions showcases its professional portfolio of web development, e-commerce, custom software, and UI/UX design projects for businesses worldwide."
        />
        <meta
          name="keywords"
          content="portfolio, web development projects, e-commerce projects, custom software projects, UI UX design projects, AxoraWeb Solutions"
        />
        <link rel="canonical" href="https://axorawebsolutions.com/portfolio" />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio | AxoraWeb Solutions" />
        <meta property="og:description" content="Professional portfolio showcasing web development, e-commerce, custom software, and UI/UX design projects." />
        <meta property="og:url" content="https://axorawebsolutions.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | AxoraWeb Solutions" />
        <meta name="twitter:description" content="Professional portfolio showcasing web development, e-commerce, custom software, and UI/UX design projects." />
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
      <PricingHero /> 
      <PricingCards />
      <Clientsay />
    </>
  );
}

export default Pricing;
