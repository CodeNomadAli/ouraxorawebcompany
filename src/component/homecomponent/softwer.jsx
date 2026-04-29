"use client";

import React from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Software = () => {
  // --- Animation Settings (Consistent with Website) ---
  const premiumTransition = {
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: premiumTransition,
    },
  };

  return (
    // Width logic fixed for ultra-wide screens (1550px)
    <section className="w-full bg-white pt-16 pb-12 overflow-hidden font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        {/* Badge - Clean & Centered */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm transition-transform hover:scale-105"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider">Our Expertise</span>
        </motion.div>

        {/* Title - Original font sizes and colors with Animation */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 flex flex-wrap items-center justify-center gap-3 text-gray-900 leading-tight"
        >
          <FaCode className="text-blue-600 shrink-0" /> 
          <span>Expert Software</span>
          <span className="relative inline-block">
            <span className="text-blue-600">Solutions</span>
            {/* Animated Underline Effect */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 h-[2px] bg-blue-200"
            />
          </span>
        </motion.h1>

        {/* Description - Original Text & Colors */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl font-medium mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
        >
          We craft stunning, modern, and scalable applications. From <span className="text-gray-900 font-bold">CRM & HRM Systems</span> to <span className="text-gray-900 font-bold">AI-Powered</span> tools, we elevate your business with high-quality code.
        </motion.p>

      </motion.div>
    </section>
  );
};

export default Software;