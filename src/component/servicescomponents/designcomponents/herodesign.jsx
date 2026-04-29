import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added motion

const Herodesign = () => {
  // --- Animation Settings ---
  const premiumTransition = {
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full mt-16 font-sans overflow-hidden bg-white">
      {/* Main Container */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        {/* Hero Text Section */}
        <div className="text-center flex flex-col items-center py-16 md:py-24 lg:py-28">
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-black bg-gray-50 text-xs sm:text-sm h-8 px-4 border-[1px] border-gray-200 hover:border-blue-300 rounded-2xl transition-colors mb-4"
          >
            Human-Centered Design
          </motion.button>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={premiumTransition}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 leading-[1.1] text-gray-900 tracking-tight"
          >
            We turn complex logic into <br className="hidden md:block" />
            <motion.span 
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent"
            >
              beautiful experiences.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base sm:text-lg lg:text-xl text-gray-500 mt-6 max-w-3xl leading-relaxed"
          >
            Great design isn't just about making things look pretty. It's about solving 
            problems. We design intuitive interfaces that users understand instantly 
            and love using.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, ...premiumTransition }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link to="/portfolio" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 text-white py-4 px-10 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-100 font-semibold"
              >
                See Our Process
              </motion.button>
            </Link>
            <Link to="/qoute" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-black py-4 px-10 rounded-full border border-gray-200 transition-all duration-300 font-semibold"
              >
                Book a UX Audit
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image - Zoom & Fade Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full pb-16 sm:pb-24"
        > 
          <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-gray-100 bg-white w-full group">
            <img
              src="/phonede.png"
              alt="UX Design Showcase"
              className="w-full h-auto object-cover block transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            />
            {/* Subtle Overlay Effect on Hover */}
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-700 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herodesign;