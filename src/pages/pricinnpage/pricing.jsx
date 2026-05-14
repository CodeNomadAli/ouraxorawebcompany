"use client";

import { Helmet } from "react-helmet-async";

// COMPONENTS
import PricingHero from "../../component/pricingcomponents/PricingHero";
import PricingCards from "../../component/pricingcomponents/PricingCards";
import PricingDetails from "../../component/pricingcomponents/PricingDetails";
import Formcustom from "../../component/servicescomponents/customecomponents/formcustom";

function Pricing() {
  return (
    <>
      {/* =========================================
          ADVANCED SEO OPTIMIZATION
      ========================================= */}

      <Helmet>

        {/* PRIMARY SEO */}

        <title>
          Pricing Plans | Web Development & AI Automation Services Pakistan | AxoraWeb Solutions
        </title>

        <meta
          name="description"
          content="Explore affordable pricing plans for web development, SaaS development, AI automation, mobile app development, UI UX design, and custom software solutions at AxoraWeb Solutions in lahore, Pakistan."
        />

        <meta
          name="keywords"
          content="
          web development pricing,
          software development pricing Pakistan,
          SaaS development cost,
          AI automation services pricing,
          mobile app development packages,
          custom software pricing,
          website development packages Pakistan,
          UI UX design pricing,
          software company lahore,
          Next.js development agency,
          React development company,
          enterprise software solutions,
          affordable software house Pakistan
          "
        />

        <meta name="author" content="AxoraWeb Solutions" />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="English" />

        <meta name="distribution" content="global" />

        <meta name="revisit-after" content="7 days" />

        <link
          rel="canonical"
          href="https://axorawebsolutions.com/pricing"
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
          content="Pricing Plans | AxoraWeb Solutions"
        />

        <meta
          property="og:description"
          content="Affordable pricing plans for web development, AI automation, SaaS development, mobile apps, and custom software solutions."
        />

        <meta
          property="og:url"
          content="https://axorawebsolutions.com/pricing"
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
          content="Pricing Plans | AxoraWeb Solutions"
        />

        <meta
          name="twitter:description"
          content="Affordable software development pricing for websites, SaaS platforms, AI automation, and mobile applications."
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
                "@type": "Service",

                serviceType: [
                  "Web Development",
                  "SaaS Development",
                  "AI Automation",
                  "Mobile App Development",
                  "UI UX Design",
                  "Custom Software Development"
                ],

                provider: {
                  "@type": "Organization",
                  name: "AxoraWeb Solutions"
                },

                areaServed: [
                  "Pakistan",
                  "United Kingdom",
                  "Dubai",
                  "Saudi Arabia"
                ]
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
                    name: "Pricing",
                    item: "https://axorawebsolutions.com/pricing"
                  }
                ]
              },

              {
                "@type": "FAQPage",

                mainEntity: [

                  {
                    "@type": "Question",

                    name: "Do you provide affordable web development pricing?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text:
                        "Yes, AxoraWeb Solutions offers affordable and scalable pricing plans for websites, SaaS applications, AI automation systems, and custom software development."
                    }
                  },

                  {
                    "@type": "Question",

                    name: "Do pricing plans include custom software development?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text:
                        "Yes, we provide custom pricing for enterprise software, SaaS platforms, CRM systems, mobile applications, and automation solutions."
                    }
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

        {/* HERO */}
        <header aria-label="Pricing Plans">
          <PricingHero />
        </header>

        {/* PRICING CARDS */}
        <section aria-label="Pricing Packages">
          <PricingCards />
        </section>

        {/* PRICING DETAILS */}
        <section aria-label="Pricing Details and Services">
          <PricingDetails />
        </section>

        {/* CONTACT FORM */}
        <section aria-label="Contact Form">
          <Formcustom />
        </section>

      </main>
    </>
  );
}

export default Pricing;