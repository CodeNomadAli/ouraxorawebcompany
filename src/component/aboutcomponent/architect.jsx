"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Architecture = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 1.2,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: premiumTransition,
    },
  };

  return (
    <section className="w-full bg-gray-50 font-sans overflow-hidden">
      {/* Container: Synced with 768px (md:px-6) and 1700px (1550px) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12 sm:py-16 md:py-24 mt-16 md:mt-24 text-center"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 mt-4 px-3 sm:px-5 py-1 sm:py-2 rounded-full border border-gray-100 bg-white text-gray-800 shadow-sm text-xs sm:text-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-medium">Established 2018 • 150+ Projects Shipped</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-bold py-6 sm:py-8 md:py-8 leading-snug sm:leading-snug md:leading-[1.1]"
        >
          We Are The Architects of <br />
          <span className="text-blue-700">Digital Intelligence</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
        >
          More than just a software agency. We are your strategic partner in navigating the <br className="hidden md:block" />
          intersection of stunning Web Design and cutting-edge Artificial Intelligence.
        </motion.p>

        {/* Divider text */}
        <motion.h4 
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-sm text-gray-400 py-6 sm:py-8 md:py-9 uppercase tracking-widest font-semibold"
        >
          Trusted by innovators at
        </motion.h4>

        {/* Logos Grid */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 text-gray-400 font-bold text-base sm:text-lg md:text-xl grayscale opacity-70"
        >
          <h4 className="hover:grayscale-0 transition-all cursor-default duration-500 hover:text-blue-600">Google Cloud</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default duration-500 hover:text-orange-500">AWS Partner</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default duration-500 hover:text-green-600">Shopify Plus</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default duration-500 hover:text-indigo-500">Stripe</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default duration-500 hover:text-blue-400">Microsoft Azure</h4>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Architecture;