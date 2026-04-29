"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Productsec = () => {
  // --- Global Animation Settings (Consistent with start code) ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...premiumTransition,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section className="w-full bg-blue-50 overflow-hidden">
      {/* Main Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center"
      >
        
        {/* Animated Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl"
        >
          Is your product confusing your users?
        </motion.h1>
        
        {/* Animated Paragraph */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 text-base sm:text-lg font-medium mt-6 mb-8 max-w-2xl leading-relaxed"
        >
          Let's fix that. Schedule a free 30-minute discovery call. We'll review your current 
          interface and identify quick wins.
        </motion.p>

        {/* Animated Button - Mobile responsive padding included */}
        <motion.div variants={itemVariants}>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button" 
              className="bg-blue-600 text-white py-3 px-8 md:py-4 md:px-10 rounded-full font-bold text-base md:text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Book Discovery Call
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Productsec;