"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Heroweb = () => {
  // --- Global Animation Settings (Consistent with your system) ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section
      className="relative w-full mt-20 py-28 text-center bg-gray-900 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(/bgweb.jpg)' }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Width Fix Wrapper */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Animated Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-500/30 bg-gray-800/80 text-blue-400 shadow-sm backdrop-blur-sm"
        >
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          ></motion.span>
          <span className="text-sm font-medium">
            Now accepting new projects for Q1
          </span>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-bold text-white py-5 max-w-4xl mx-auto leading-tight"
        >
          We Don't Just Write Code. <br />{" "}
          <span className="text-blue-300">We Engineer Growth.</span>
        </motion.h1>

        {/* Animated Description */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 py-4 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Your website is your best salesperson. We build{" "}
          <span className="text-white font-bold">lightning-fast, custom websites</span> designed to convert visitors
          into revenue.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-7 px-4 sm:px-0"
        >
          <Link to="/pricing">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-white bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm px-8 py-3.5 transition-all font-bold shadow-lg shadow-blue-900/40"
            >
              View Pricing
            </motion.button>
          </Link>
          <Link to="/services">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(75, 85, 99, 0.9)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-white bg-gray-600/80 backdrop-blur-md hover:bg-gray-500 rounded-2xl text-sm px-8 py-3.5 transition-all font-bold"
            >
              View Our Work
            </motion.button>
          </Link>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Heroweb;