"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaMailBulk } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Mainsection = () => {
  const [count, setCount] = useState(0);
  const [secondCard, setSecondCard] = useState(false);

  const changecard = () => {
    setSecondCard(true);
  };

  // --- Global Animation Settings (Same as previous components) ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section className="w-full mt-24">
      {/* Search Bar Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={premiumTransition}
        className="bg-gray-50 w-full border-b border-gray-100 py-6"
      >
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="search"
              className="w-full py-3 border-gray-300 border-[1px] px-3 rounded-md outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Search for hosting and domain services..."
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-bold transition-colors shadow-md"
            >
              Add
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        
        {/* Page Header */}
        <motion.div variants={itemVariants} className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Your Cart</h1>
          <p className="text-gray-500 mt-2">
            GoDaddy is a trusted growth partner to millions of everyday entrepreneurs.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div 
              variants={itemVariants}
              className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              {/* Domain Registration Item */}
              <div className="flex flex-col md:flex-row gap-6 p-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 w-24 h-24 md:w-32 md:h-32 rounded-lg text-white font-bold text-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 shadow-lg"
                >
                  www
                </motion.div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div>
                        <h1 className="text-xl font-bold text-slate-900">axorawebsolutions.online</h1>
                        <p className="text-gray-700 text-[10px] font-bold bg-gray-100 px-3 py-1 rounded inline-block mt-2 uppercase tracking-tight">
                          The more domain names you own, the more protected your brand is
                        </p>
                        <p className="text-sm text-gray-400 mt-2">.ONLINE Domain Registration</p>
                      </div>
                      
                      <div className="text-right mt-4 md:mt-0 w-full md:w-auto">
                        <h1 className="text-blue-600 font-bold text-2xl">Rs278</h1>
                        <h2 className="line-through text-sm text-gray-500">₨15,447</h2>
                        <motion.p 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-0.5 rounded inline-block mt-1"
                        >
                          98% off
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 py-2 mt-6 pt-4 border-t border-gray-50 gap-4">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-slate-50 w-full sm:w-auto text-sm cursor-pointer outline-none focus:ring-1 focus:ring-blue-500">
                      <option value="1-year">1 Year</option>
                      <option value="2-year">2 Years</option>
                    </select>
                    <div className="flex items-center gap-6">
                      <p className="text-xs">Renews January 2027</p>
                      <motion.div whileHover={{ scale: 1.2, color: "#ef4444" }}>
                        <FaTrash className="text-xl cursor-pointer transition-colors"/>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 px-6 py-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest border-y border-gray-100">
                Configure Your Domain
              </div>

              {/* Hosting Offer */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center px-1 shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-slate-900">Full Domain Protection</h2>
                      <p className="text-sm text-gray-600">Prevents hackers from stealing your domain.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-900">Rs1,999</div>
                    <div className="text-sm font-bold text-blue-500">39% off</div>
                  </div>
                </div>
              </div>

              {/* Email Section with AnimatePresence for smooth swap */}
              <div className="p-6 bg-gray-50/30 border-t border-gray-100">
                <AnimatePresence mode="wait">
                  {!secondCard ? (
                    <motion.div 
                      key="promo"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="p-6 border-2 border-dashed border-blue-200 bg-white rounded-xl flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                      <div className="flex gap-4 items-center">
                        <FaMailBulk size={24} className="text-blue-500"/>
                        <h2 className="text-lg font-bold text-slate-900">Professional Email Pro Light</h2>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-2.5 border-2 border-black text-black font-bold rounded-lg transition-all text-sm uppercase"
                        onClick={changecard}
                      >
                        Get It
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="details"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
                    >
                      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        <div className="flex gap-4 items-center">
                           <div className="bg-blue-600 p-3 rounded-lg text-white shadow-lg">
                             <FaMailBulk size={20} />
                           </div>
                           <h1 className="text-lg font-bold text-slate-900">Email Pro Light Activated</h1>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-200 p-1 rounded-lg bg-gray-50">
                          <button className="w-8 h-8 bg-white border rounded shadow-sm" onClick={() => setCount(Math.max(0, count - 1))}>-</button>
                          <span className="font-bold w-6 text-center">{count}</span>
                          <button className="w-8 h-8 bg-white border rounded shadow-sm" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <motion.div whileHover={{ color: "#ef4444" }}>
                          <FaTrash onClick={() => setSecondCard(false)} className="text-gray-400 cursor-pointer transition-colors" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Order Summary */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h1>
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                  <h1 className="text-xl font-bold text-slate-900">Subtotal</h1>
                  <h3 className="text-3xl font-black text-blue-600">₨4,905</h3>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="bg-green-100 text-green-700 font-bold py-3 px-4 rounded-lg text-center text-sm"
                  >
                    🎉 Nice! You saved ₨24,149.
                  </motion.div>
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-100 text-lg uppercase"
                  >
                    Checkout
                  </motion.button>
                </div>
              </div>

              {/* Quality Badge */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 p-5 rounded-xl flex items-center gap-4 shadow-sm"
              >
                <FaCheckCircle className="text-blue-500 text-2xl shrink-0" />
                <div>
                  <h1 className="font-bold text-slate-900 text-sm">Quality Guaranteed</h1>
                  <p className="text-xs text-gray-500">24/7/365 support available.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mainsection;