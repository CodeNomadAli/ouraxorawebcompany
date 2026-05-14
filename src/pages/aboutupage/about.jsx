import { Helmet } from "react-helmet-async";

import Architecture from "../../component/aboutcomponent/architect";
import Cardabout from "../../component/aboutcomponent/card";
import Bridging from "../../component/aboutcomponent/bridging";

function About() {
  return (
    <>
      {/* =========================================
          ADVANCED SEO OPTIMIZATION
      ========================================= */}

      <Helmet>

        {/* PRIMARY SEO */}

        <title>
          About AxoraWeb Solutions | Software Development Company in lahore Pakistan
        </title>

        <meta
          name="description"
          content="Learn about AxoraWeb Solutions, a leading software development company in lahore, Pakistan specializing in web development, SaaS applications, AI automation, UI UX design, mobile app development, and custom software solutions for startups and businesses worldwide."
        />

        <meta
          name="keywords"
          content="
          about AxoraWeb Solutions,
          software company Pakistan,
          software house lahore,
          web development company,
          SaaS development company,
          AI automation agency,
          mobile app development,
          UI UX design agency,
          custom software solutions,
          React development company,
          Next.js development agency,
          full stack developers Pakistan,
          digital transformation company,
          enterprise software solutions
          "
        />

        <meta name="author" content="AxoraWeb Solutions" />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="English" />

        <meta name="distribution" content="global" />

        <meta name="revisit-after" content="7 days" />

        <link
          rel="canonical"
          href="https://axorawebsolutions.com/about"
        />

        {/* =========================================
            GEO SEO
        ========================================= */}

        <meta name="geo.region" content="PK-IS" />

        <meta name="geo.placename" content="lahore" />

        <meta name="geo.position" content="33.6844;73.0479" />

        <meta name="ICBM" content="33.6844,73.0479" />

        {/* =========================================
            OPEN GRAPH SEO
        ========================================= */}

        <meta
          property="og:title"
          content="About AxoraWeb Solutions | Leading Software Company Pakistan"
        />

        <meta
          property="og:description"
          content="AxoraWeb Solutions is a professional software company delivering web development, AI automation, SaaS applications, UI UX design, and custom digital solutions worldwide."
        />

        <meta
          property="og:url"
          content="https://axorawebsolutions.com/about"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://axorawebsolutions.com/logo.jpg"
        />

        <meta
          property="og:site_name"
          content="AxoraWeb Solutions"
        />

        {/* =========================================
            TWITTER SEO
        ========================================= */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="About AxoraWeb Solutions | Software Development Agency"
        />

        <meta
          name="twitter:description"
          content="Professional software development company offering AI automation, SaaS development, mobile apps, UI UX design, and custom software solutions."
        />

        <meta
          name="twitter:image"
          content="https://axorawebsolutions.com/logo.jpg"
        />

        {/* =========================================
            STRUCTURED DATA SEO
        ========================================= */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [

              {
                "@type": "Organization",

                name: "AxoraWeb Solutions",

                url: "https://axorawebsolutions.com",

                logo: "https://axorawebsolutions.com/logo.jpg",

                sameAs: [
                  "https://www.facebook.com/axoraweb",
                  "https://www.linkedin.com/in/axorawebsolutionsdotcom"
                ],

                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+92-324-2537429",
                  contactType: "customer service",
                  areaServed: "Worldwide",
                  availableLanguage: ["English"]
                }
              },

              {
                "@type": "LocalBusiness",

                name: "AxoraWeb Solutions",

                image: "https://axorawebsolutions.com/logo.jpg",

                url: "https://axorawebsolutions.com",

                telephone: "+92-324-2537429",

                priceRange: "$$",

                address: {
  "@type": "PostalAddress",
  addressLocality: "lahore",
  addressRegion: "lahore Capital Territory",
  addressCountry: "Pakistan"
},

                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "33.6844",
                  longitude: "73.0479"
                }
              },

              {
                "@type": "ProfessionalService",

                name: "AxoraWeb Solutions",

                serviceType: [
                  "Web Development",
                  "SaaS Development",
                  "AI Automation",
                  "Mobile App Development",
                  "UI UX Design",
                  "Custom Software Development",
                  "Social Media Automation"
                ],

                areaServed: [
                  "Pakistan",
                  "United Kingdom",
                  "Dubai",
                  "Saudi Arabia"
                ],

                url: "https://axorawebsolutions.com"
              },

              {
                "@type": "BreadcrumbList",

                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://axorawebsolutions.com"
                  },

                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "About",
                    item: "https://axorawebsolutions.com/about"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* =========================================
          SEMANTIC SEO STRUCTURE
      ========================================= */}

      <main>

        {/* HERO / ABOUT INTRO */}
        <header aria-label="About AxoraWeb Solutions">
          <Architecture />
        </header>

        {/* COMPANY STORY */}
        <section aria-label="Company Overview and Mission">
          <Bridging />
        </section>

        {/* WHY CHOOSE US */}
        <section aria-label="Why Choose AxoraWeb Solutions">
          <Cardabout />
        </section>

      </main>
    </>
  );
}

export default About;