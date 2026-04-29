"use client";

import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  // --- Snappy & Professional Configuration ---
  const premiumTransition = {
    duration: 1.5,
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
    <section className="w-full mt-16 overflow-hidden">
      {/* Hero Header */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center bg-white py-28"
        >
          <motion.button 
            variants={itemVariants}
            className="text-blue-600 bg-gray-50 text-sm h-8 px-4 border border-gray-100 rounded-2xl mb-4"
          >
            🛍️ Enterprise E-Commerce Solutions
          </motion.button>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold py-4"
          >
            Commerce without <br />
            <span className="text-blue-600">complexity.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-xl text-gray-500 py-3 max-w-4xl mx-auto"
          >
            We build scalable, high-performance online stores that seamlessly integrate <br className="hidden md:block" />
            with your inventory, payments, and logistics.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 py-6">
            <Link to="/contact">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-500 transition-all w-full sm:w-auto font-medium active:scale-95 shadow-lg shadow-blue-100">
                Discuss Your Project
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="bg-white text-black py-3 px-6 rounded-2xl hover:bg-slate-50 border border-gray-200 transition-all w-full sm:w-auto font-medium active:scale-95">
                View Capabilities
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Storefront Visual */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-2 border-gray-100 rounded-lg bg-gray-50 shadow-xl h-[450px] w-full flex flex-col items-center justify-center"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md"
          >
            <FaBagShopping className="w-7 h-7 text-blue-500" />
          </motion.div>
          <h1 className="font-bold text-2xl py-2">Your Storefront</h1>
          <p className="text-gray-400">Optimized for Conversion</p>
        </motion.div>
      </div>

      {/* Features */}
      <div className="w-full bg-gray-50 py-16 mt-8">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Feature 1 */}
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <FaBolt className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h1 className="text-xl font-bold py-2">Lightning Fast Performance</h1>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                Slow sites lose sales. We engineer lightweight front-ends using modern frameworks to ensure sub-second load times.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <FaCheckCircle className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h1 className="text-xl font-bold py-2">Seamless Integrations</h1>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                We connect your store to your ERP, CRM, and shipping providers, automating busywork so you can focus on growth.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <FaPhone className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h1 className="text-xl font-bold py-2">Mobile-First Design</h1>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                With 70% of traffic coming from phones, we design for thumb-scroll first, ensuring a frictionless mobile checkout.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;