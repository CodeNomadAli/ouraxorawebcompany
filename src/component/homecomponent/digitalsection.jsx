"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Digitalsection = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="w-full bg-gray-50 overflow-hidden mt-16 font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        
        {/* Text Content */}
        <div className="w-full lg:flex-1 text-left order-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-800 shadow-sm w-max">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium uppercase tracking-wider">Who We Are</span>
          </motion.div>

          {/* Heading & Animated Line */}
          <div className="mt-7 flex flex-col items-start w-full">
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900">
              Architects of <br className="hidden sm:block" />
              <span className="text-blue-700">Digital Transformation</span>
            </motion.h1>
            
            {/* Standard Line Drawing Animation */}
            <motion.hr 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="border-blue-400 border-2 mt-4 max-w-[200px] sm:max-w-[300px] rounded-full" 
            />
          </div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 mt-8 leading-relaxed">
            We are a dedicated team of expert developers and designers specializing in crafting stunning, modern, and scalable software. From <b>Web & Mobile Apps</b> to complex <b>CRM, HRM, and RSM systems,</b> we build the engines that power business growth. <br /><br />
            Since our founding, we’ve focused on one goal: delivering high-quality, user-focused solutions. We collaborate closely with startups and enterprises to turn ambitious visions into <u className="decoration-blue-600 decoration-2 underline-offset-4 text-gray-900 font-medium">clean, maintainable code.</u>
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Link to="/about">
              <button className="text-white bg-blue-600 rounded-xl text-sm sm:text-base px-7 py-4 flex items-center hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95 font-semibold">
                Learn more About us
                <span className="ml-3 font-bold">→</span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={premiumTransition}
            className="relative w-full max-w-full lg:max-w-lg"
          >
            <img
              src="/herose2.png"
              alt="Digital Transformation"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:rotate-1 transition-transform duration-500 border border-gray-100 relative z-10"
            />
            {/* Background Accent */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl -z-10"
            ></motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Digitalsection;