"use client";

import React from "react";
import { motion } from "framer-motion";

const Imgcard = () => {
  // --- Standardized Premium Animations ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  const projects = [
    "/ecommerce.png",
    "https://appsglobal.co/images/video-player.png",
    "/billanory (2).png",
    "https://appsglobal.co/images/scalesam.png",
    "https://appsglobal.co/images/mess-pilot.png",
    "https://appsglobal.co/images/rental-bike.png",
  ];

  return (
    <section className="w-full bg-blue-900 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div className="max-w-xl">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, ...premiumTransition }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-800/50 text-blue-300"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Our Portfolio</span>
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Selected <span className="text-blue-400">Work</span>
            </h1>
            <p className="font-medium text-blue-100/70 mt-3 text-base md:text-lg">
              High-performance solutions we've engineered for global clients.
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0"
          >
            <a
              href="#"
              className="group flex items-center gap-2 text-white font-bold bg-blue-800/40 px-6 py-3 rounded-xl border border-blue-700/50 hover:bg-blue-700 transition-all shadow-lg"
            >
              View Full Portfolio 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((src, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[2rem] group h-72 sm:h-80 lg:h-72 border border-blue-800/50 shadow-2xl bg-blue-950"
            >
              {/* Image with Zoom Effect */}
              <motion.img
                src={src}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Modern Overlay with Staggered Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  <p className="text-white font-bold text-xl text-center border border-white/20 py-3 rounded-2xl backdrop-blur-md">
                    View Case Study
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Imgcard;