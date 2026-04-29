"use client";

import React from "react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  // --- Animation Settings (Same as Hero) ---
  const premiumTransition = {
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Items sequence mein aayenge
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
    <section className="bg-white py-16 px-4 overflow-hidden">
      {/* Fixed width to match your standard layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto text-center"
      >
        {/* Heading Section */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#0a1d37] mb-3"
        >
          Trusted Partners & Recognition
        </motion.h2>

        {/* Blue Accent Line (Drawing Animation) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }} // w-16 = 64px
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="h-1 bg-blue-600 mx-auto mb-8 rounded-full"
        ></motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Collaborating with industry leaders to deliver world-class digital solutions.
        </motion.p>

        {/* Logos Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">

          {/* Trigent Technologies Logo */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center px-12 md:border-r border-gray-200"
          >
            <div className="h-32 flex items-center justify-center mb-6">
              <a
                href="https://trigenttechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/parent.png"
                  alt="Trigent Technologies"
                  className="max-h-full object-contain"
                />
              </a>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Technology Partner
            </span>
          </motion.div>

          {/* DesignRush Logo */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center px-12"
          >
            <div className="bg-[#0f172a] p-8 rounded-[2rem] shadow-lg mb-6 h-32 flex items-center justify-center min-w-[260px]">
              <a
                href="https://www.designrush.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/d1.png"
                  alt="DesignRush"
                  className="max-h-12 object-contain"
                />
              </a>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Top Rated Agency
            </span>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;