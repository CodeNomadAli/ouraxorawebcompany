import { Helmet } from "react-helmet-async";
import React, { lazy, Suspense } from "react";

import HeroSection from "../../component/homecomponent/herosection";
import Software from "../../component/homecomponent/softwer";
import Team from "../../component/homecomponent/team";
import Card from "../../component/homecomponent/card";
import Digitalsection from "../../component/homecomponent/digitalsection";
import Bulidsection from "../../component/homecomponent/bulid";
import Featurepj from "../../component/homecomponent/featurepj";
import FAQ from "../../component/homecomponent/faq";
import PartnersSection from "../../component/homecomponent/PartnersSection";

/* =========================
   LAZY LOADING
========================= */

const Clientsay = lazy(() =>
  import("../../component/servicescomponents/customecomponents/clientsay")
);

const MeetExperts = lazy(() =>
  import("../../component/homecomponent/MeetExperts")
);

function Home() {
  return (
    <>
      {/* =========================
          ADVANCED SEO
      ========================= */}

      <Helmet>

        {/* PRIMARY SEO */}

        <title>
          AxoraWeb Solutions | Web Development & AI Automation Company in lahore Pakistan
        </title>

        <meta
          name="description"
          content="AxoraWeb Solutions is a professional software company in lahore, Pakistan offering web development, SaaS development, AI automation, UI UX design, social media automation, mobile app development, and custom software solutions."
        />

        <meta
          name="keywords"
          content="
          web development company Pakistan,
          software house lahore,
          AI automation company,
          Next.js agency Pakistan,
          React development company,
          SaaS development company,
          mobile app development Pakistan,
          custom software solutions,
          full stack developers,
          UI UX design agency,
          social media automation,
          custom CRM development,
          AI software agency,
          enterprise software solutions
          "
        />

        <meta name="author" content="AxoraWeb Solutions" />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="English" />

        <meta name="revisit-after" content="7 days" />

        <meta name="distribution" content="global" />

        <meta name="rating" content="general" />

        <link
          rel="canonical"
          href="https://axorawebsolutions.com/"
        />

        {/* =========================
            GEO SEO
        ========================= */}

        <meta name="geo.region" content="PK-IS" />

        <meta name="geo.placename" content="lahore" />

        <meta name="geo.position" content="33.6844;73.0479" />

        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* =========================
            OPEN GRAPH SEO
        ========================= */}

        <meta
          property="og:title"
          content="AxoraWeb Solutions | Web Development & AI Automation Company"
        />

        <meta
          property="og:description"
          content="Leading software company offering AI automation, SaaS development, web development, UI UX design, and mobile app development."
        />

        <meta
          property="og:url"
          content="https://axorawebsolutions.com/"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://axorawebsolutions.com/logo.jpg"
        />

        <meta property="og:site_name" content="AxoraWeb Solutions" />

        {/* =========================
            TWITTER SEO
        ========================= */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="AxoraWeb Solutions | Software Development Company"
        />

        <meta
          name="twitter:description"
          content="Professional web development and AI automation company in Pakistan."
        />

        <meta
          name="twitter:image"
          content="https://axorawebsolutions.com/logo.jpg"
        />

        {/* =========================
            SCHEMA MARKUP
        ========================= */}

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
                  availableLanguage: "English"
                }
              },

              {
                "@type": "LocalBusiness",

                name: "AxoraWeb Solutions",

                image: "https://axorawebsolutions.com/logo.jpg",

                url: "https://axorawebsolutions.com",

                telephone: "+92-324-2537429",

                address: {
                  "@type": "PostalAddress",
                  addressLocality: "lahore",
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
                "@type": "FAQPage",

                mainEntity: [
                  {
                    "@type": "Question",

                    name: "Do you provide SaaS development services?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text:
                        "Yes, AxoraWeb Solutions develops scalable SaaS platforms using React, Next.js, Node.js, and modern cloud technologies."
                    }
                  },

                  {
                    "@type": "Question",

                    name: "Do you offer AI automation solutions?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text:
                        "Yes, we build AI automation systems for businesses including social media automation, workflow automation, and AI-powered business tools."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* =========================
          SEMANTIC SEO STRUCTURE
      ========================= */}

      <main>

        {/* HERO */}
        <header aria-label="Hero Section">
          <HeroSection />
        </header>

        {/* PARTNERS */}
        <section aria-label="Trusted Partners">
          <PartnersSection />
        </section>

        {/* TEAM */}
        <section aria-label="Our Expert Team">
          <Team />
        </section>

        {/* SERVICES */}
        <section aria-label="Software Development Services">
          <Software />
        </section>

        {/* WHY CHOOSE US */}
        <section aria-label="Why Choose AxoraWeb Solutions">
          <Card />
        </section>

        {/* DIGITAL SOLUTIONS */}
        <section aria-label="Digital Transformation Services">
          <Digitalsection />
        </section>

        {/* MEET EXPERTS */}
        <section aria-label="Meet Industry Experts">
          <Suspense fallback={<div />}>
            <MeetExperts />
          </Suspense>
        </section>

        {/* BUILD SECTION */}
        <section aria-label="Custom Software Solutions">
          <Bulidsection />
        </section>

        {/* PROJECTS */}
        <section aria-label="Featured Projects">
          <Featurepj />
        </section>

        {/* TESTIMONIALS */}
        <section aria-label="Client Testimonials">
          <Suspense fallback={<div />}>
            <Clientsay />
          </Suspense>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions">
          <FAQ />
        </section>

      </main>
    </>
  );
}

export default Home;