"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Softbulid = () => {
  // --- Snappy & Professional Configuration (Same as Hero) ---
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: premiumTransition,
    },
  };

  return (
    <section className="w-full bg-white mt-24 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="w-full"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-white text-black shadow-sm w-max">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium">Custom Software Engineering</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 leading-tight">
              Software Built for <br />
              <span className="text-blue-600">Business Scale</span>
            </motion.h1>

            <motion.hr 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="border-blue-200 border-2 mt-4 max-w-[260px] md:max-w-[384px]" 
            />

            <motion.p variants={itemVariants} className="text-gray-500 mt-6 max-w-2xl text-base md:text-lg">
              We don't just write code; we architect solutions. From complex
              CRM/ERP systems to high-performance SaaS platforms, we build the
              engine that powers your enterprise.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
              <Link to="/qoute">
                <button className="bg-blue-600 text-white rounded-xl text-lg px-6 py-3 hover:bg-blue-500 transition-all flex items-center shadow-lg active:scale-95">
                  Start Your Project <span className="ml-2 font-bold">→</span>
                </button>
              </Link>

              <Link to="/portfolio">
                <button className="border border-gray-300 rounded-xl text-lg px-6 py-3 hover:bg-gray-50 transition-all flex items-center active:scale-95">
                  View Case Studies <span className="ml-2 font-bold">→</span>
                </button>
              </Link>
            </motion.div>

            <motion.hr variants={itemVariants} className="mt-10 border-gray-100" />

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">99.9%</h2>
                <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider">Uptime</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Enterprise</h2>
                <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider">Security</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Scalable</h2>
                <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider">Architecture</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-10 lg:mt-0"
          >
            {/* SaaS Card */}
            <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
              <div className="w-14 h-14 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                🧳
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">SaaS Platforms</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Multi-tenant cloud solutions.
              </p>
            </motion.div>

            {/* CRM Card */}
            <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
              <div className="w-14 h-14 rounded-xl bg-purple-500 text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">CRM & ERP</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Workflow automation systems.
              </p>
            </motion.div>

            {/* Mobile Card */}
            <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
              <div className="w-14 h-14 rounded-xl bg-green-500 text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                📱
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Mobile Apps</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                iOS, Android & Cross-platform.
              </p>
            </motion.div>

            {/* Cloud Card */}
            <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
              <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
                &lt;/&gt;
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Cloud & DevOps</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Infrastructure as Code.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Softbulid;