"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Cardweb = () => {
  // --- Standardized Premium Animations ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-center pb-12 flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, ...premiumTransition }}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm"
          >
            <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
            <span className="text-xs font-medium uppercase tracking-wider">Pricing Plans</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-5 text-gray-900 leading-tight">
            Transparent Development <span className="text-blue-600">Packages</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
            One-time fees. You own the code. No monthly builders fees.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10"
        >
          
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="w-full min-h-[480px] p-8 border border-gray-200 bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <h1 className="font-bold text-xl text-gray-900">High-Convert Lander</h1>
              <p className="text-sm text-gray-400 py-3 font-medium">For ads campaigns & single products.</p>
              <h1 className="text-4xl py-4 font-bold text-slate-900">$1,800</h1>

              <div className="space-y-4 mt-6">
                {["Single Long-Scroll Page", "Copywriting Assistance", "Contact Form Integration", "1 Week Turnaround"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-700 font-bold rounded-2xl py-4 mt-8 transition-all"
            >
              View Pricing
            </motion.button>
          </motion.div>

          {/* Card 2 - Featured */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="w-full min-h-[500px] p-8 border-2 rounded-[2rem] border-blue-500 bg-white shadow-2xl relative flex flex-col justify-between lg:scale-105 z-10"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Most Popular</span>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Corporate Website</h1>
              <p className="text-sm text-gray-400 py-3 font-medium">Full brand presence for businesses.</p>
              <h1 className="text-4xl py-4 font-bold text-slate-900">$4,500</h1>

              <div className="space-y-4 mt-6">
                {["5-8 Custom Pages", "CMS Implementation", "Basic On-Page SEO", "Blog / News Section", "Google Analytics Setup"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-800 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl py-4 mt-8 transition-all shadow-xl shadow-blue-200"
            >
              Select Package
            </motion.button>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="w-full min-h-[480px] p-8 border border-gray-200 bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <h1 className="font-bold text-xl text-gray-900">Web App / E-Comm</h1>
              <p className="text-sm text-gray-400 py-3 font-medium">Complex functionality & stores.</p>
              <h1 className="text-4xl py-4 font-bold text-slate-900">$8,000+</h1>

              <div className="space-y-4 mt-6">
                {["E-commerce Functionality", "User Accounts / Logins", "3rd Party API Integrations", "Advanced Search & Filtering"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold rounded-2xl py-4 mt-8 transition-all"
            >
              Contact Sales
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Cardweb;