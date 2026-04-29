"use client";

import React from "react";
import { FaBolt, FaLock, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Bulit = () => {
  // --- Global Animation Settings (Same as previous) ---
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
    <section className="w-full overflow-hidden">
      {/* Modern Architecture Section */}
      <div className="bg-gray-50 text-center py-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4"
        >
          <motion.h4 variants={itemVariants} className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Built with modern architecture
          </motion.h4>
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-lg md:text-xl py-5"
          >
            {["Laravel", "React", "Tailwind", "Alpine.js", "Next.js"].map((tech) => (
              <motion.h4 key={tech} variants={itemVariants} whileHover={{ color: "#2563eb", scale: 1.1 }}>
                {tech}
              </motion.h4>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <hr className="border-gray-300" />

      {/* Features Section */}
      <div className="w-full py-12 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 md:px-0 lg:px-8">
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="w-full px-2 md:px-6 lg:px-0 order-1"
            >
              <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                Why your "Template Site" is costing you money.
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-500 font-semibold py-6 text-base md:text-xl">
                Pre-made themes are heavy. They load slow, rank poorly on Google,
                and frustrate users on mobile. We build from scratch for raw speed.
              </motion.p>

              {/* Feature List */}
              <div className="space-y-6 mt-4">
                {[
                  { icon: <FaBolt />, title: "Sub-Second Load Times", desc: "Google penalizes slow sites. Ours load instantly." },
                  { icon: <FaMobileAlt />, title: "Mobile-First Architecture", desc: "60% of traffic is mobile. We design for phones first." },
                  { icon: <FaLock />, title: "Bank-Grade Security", desc: "No vulnerable plugins. Secure code logic." }
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex gap-4 group">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200"
                    >
                      <span className="text-white w-5 h-5">{feature.icon}</span>
                    </motion.div>
                    <div>
                      <h1 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{feature.title}</h1>
                      <p className="text-sm md:text-base text-gray-400">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              className="w-full order-2 px-0"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="/bulit.png"
                alt="Modern Architecture Illustration"
                className="w-full h-auto object-cover md:rounded-none lg:rounded-2xl shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Bulit;