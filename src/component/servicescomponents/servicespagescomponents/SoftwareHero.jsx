"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SoftwareHero = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-gray-50 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 text-center">
        
        {/* Top Tagline Badge - Styled like Herodesign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="text-black bg-gray-50 text-xs sm:text-sm h-8 px-5 flex items-center border-[1px] border-gray-200 rounded-2xl">
            End-To-End Engineering
          </span>
        </motion.div>

        {/* Main Heading - Using your Herodesign font sizes */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={premiumTransition}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight"
        >
          We Build Software That <br className="hidden md:block" />
          <motion.span 
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-blue-600"
          >
            Means Business
          </motion.span>
        </motion.h1>

        {/* Subtext Description - Consistent with your style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base sm:text-lg lg:text-xl text-gray-500 mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          From MVP to IPO, we provide the technical firepower you need. We don't just write 
          code; we architect scalable, secure, and future-proof solutions.
        </motion.p>

        {/* Action Buttons - Styled exactly like Herodesign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, ...premiumTransition }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Start Project Link (Blue Primary) */}
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-600 text-white py-4 px-10 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-100 font-semibold"
            >
              Start a Project
            </motion.button>
          </Link>

          {/* Explore Services Link (White Secondary) */}
          <Link to="/services" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-black py-4 px-10 rounded-full border border-gray-200 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
            >
              Explore Services
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SoftwareHero;