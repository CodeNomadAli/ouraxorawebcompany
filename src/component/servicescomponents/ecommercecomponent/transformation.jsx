"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Transformation = () => {
  // --- Animation Variants ---
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
    <section className="w-full py-20 overflow-hidden">
      {/* Master Width Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        {/* Animated Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-4xl font-bold py-3 text-slate-900"
        >
          Start your transformation.
        </motion.h1>
        
        {/* Animated Paragraph */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-500 text-sm sm:text-base md:text-lg py-3 max-w-2xl mx-auto"
        >
          Join the forward-thinking brands that trust us with their digital commerce strategy.
        </motion.p>

        {/* Animated Button Section */}
        <motion.div variants={itemVariants} className="mt-6">
          <Link to="/contact">
            {/* Mobile: py-3 px-6 text-base 
               Desktop (md+): py-4 px-8 text-lg
            */}
            <button className="bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95 text-base md:text-lg">
              Book a Free Consultation
            </button>
          </Link>
        </motion.div>

        {/* Animated Sub-text */}
        <motion.p 
          variants={itemVariants}
          className="text-sm text-gray-400 py-5"
        >
          No sales pressure. Just a technical discovery call.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Transformation;