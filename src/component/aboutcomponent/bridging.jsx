"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaBolt, FaCode } from "react-icons/fa";

const Bridging = () => {
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
    <section className="w-full font-sans overflow-hidden">
      {/* Top Section - Bridging the Gap */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 1. Image Container */}
          <motion.div variants={itemVariants} className="w-full group overflow-hidden rounded-2xl">
            <img
              src="/machice.jpg"
              alt="Human & Machine"
              className="w-full h-auto object-cover rounded-2xl hover:shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* 2. Text Container */}
          <motion.div variants={itemVariants} className="w-full text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Bridging the Gap Between <br className="hidden lg:block" /> Human & Machine
            </h1>
            <p className="text-gray-500 py-6 text-base md:text-lg leading-relaxed">
              It started with a simple observation: businesses were struggling to adopt AI not because the technology wasn't there, but because the <b className="text-gray-900">integration was too complex.</b>
              <br /> <br />
              We founded this agency to solve that. We combine aesthetic excellence with rigorous engineering. We don't just write code; we solve business problems using the most advanced tools available.
            </p>

            <div className="flex gap-4 items-start justify-center lg:justify-start">
              <div className="hidden lg:block w-1.5 h-20 bg-blue-600 rounded-full flex-shrink-0"></div>
              <p className="text-gray-700 text-xl md:text-2xl italic leading-snug border-l-4 border-blue-600 lg:border-l-0 pl-4 lg:pl-0 text-left">
                "Our mission is to democratize enterprise-grade technology for ambitious companies."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Security Cards Section */}
      <div className="w-full bg-gray-900 py-16 md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-bold">Enterprise-Grade Security & Standards</h2>
            <p className="text-gray-400 mt-4 text-lg">We take your data and infrastructure seriously.</p>
          </motion.div>

          {/* Grid layout for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaShieldAlt className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">ISO 27001 Certified</h3>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaLock className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">GDPR Compliant</h3>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaBolt className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">SOC 2 Type II</h3>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={itemVariants} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaCode className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">Clean Code Guarantee</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bridging;