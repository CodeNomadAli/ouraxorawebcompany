"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Enginering = () => {
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
    <section className="w-full mt-10 md:mt-20 font-sans overflow-hidden">
      {/* Header Section - Fixed for PC & Tablet */}
      <div className="w-full bg-gray-50 py-16 sm:py-28">
        {/* Container: Synced for 768px (md:px-6) and 1700px (1550px) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Insights & <span className="text-blue-600">Engineering</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-500 py-4 sm:py-6 max-w-3xl mx-auto"
          >
            Deep dives into AI, Scalability, and Product Strategy. Written by the engineers who build them.
          </motion.p>
        </motion.div>
      </div>

      {/* Placeholder Section for future content - Width Fixed */}
      <div className="w-full bg-gray-50 pb-10">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          {/* Add your cards or articles here in future */}
        </div>
      </div>

      {/* Horizontal Line - Aligned with the content width */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8"
      >
        <hr className="border-gray-300" />
      </motion.div>
    </section>
  );
};

export default Enginering;