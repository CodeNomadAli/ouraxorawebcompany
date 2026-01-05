import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Home from './pages/homepage/home';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Contact from './pages/contactpage/contact';
import About from './pages/aboutupage/about';
import Articles from './pages/articalepage/articale';
import Portfolio from './pages/portfoliopage/portfolio';
import Services from './pages/sercicespage/servicepage/service';
import Ecommerce from './pages/sercicespage/componentspages/ecommerce';
import Custom from './pages/sercicespage/componentspages/customesoft';
import Webdevelop from './pages/sercicespage/componentspages/web-developer';
import Design from './pages/sercicespage/componentspages/uldesigb';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Global SEO */}
        <Helmet>
          <title>AxoraWeb Solutions | Web & App Development Company</title>
          <meta
            name="description"
            content="AxoraWeb Solutions is a professional web and app development company providing React, Next.js, Node.js, UI/UX, and eCommerce solutions for businesses worldwide."
          />
          <meta
            name="keywords"
            content="web development company, react developers, next js agency, UI/UX design, ecommerce development, custom software"
          />
          <link rel="canonical" href="https://axorawebsolutions.com/" />

          {/* Open Graph */}
          <meta property="og:title" content="AxoraWeb Solutions | Web & App Development Company" />
          <meta property="og:description" content="Professional web and app development company specializing in React, Next.js, Node.js, and UI/UX services." />
          <meta property="og:url" content="https://axorawebsolutions.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://axorawebsolutions.com/logo.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AxoraWeb Solutions | Web & App Development Company" />
          <meta name="twitter:description" content="Professional web and app development company specializing in React, Next.js, Node.js, and UI/UX services." />
          <meta name="twitter:image" content="https://axorawebsolutions.com/logo.jpg" />

          {/* JSON-LD Structured Data */}
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

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/custom" element={<Custom />} />
          <Route path="/services/web-developer" element={<Webdevelop />} />
          <Route path="/services/Ux-design" element={<Design />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
