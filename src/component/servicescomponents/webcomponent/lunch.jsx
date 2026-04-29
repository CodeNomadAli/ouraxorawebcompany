"use client";

import React from "react";
import { motion } from "framer-motion";

const Lunch = () => {
  // --- Standardized Premium Animations (Matching your Work component) ---
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

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We deep dive into your brand, competitors, and goals to create a winning strategy.",
      color: "border-blue-500",
      hoverBg: "group-hover:bg-blue-500"
    },
    {
      number: "02",
      title: "Design",
      desc: "We create high-fidelity UI mockups. You see exactly how it looks before we code.",
      color: "border-amber-500",
      hoverBg: "group-hover:bg-amber-500"
    },
    {
      number: "03",
      title: "Development",
      desc: "Clean, semantic coding using Laravel & Tailwind. Optimized for speed and security.",
      color: "border-emerald-500",
      hoverBg: "group-hover:bg-emerald-500"
    },
    {
      number: "04",
      title: "Launch",
      desc: "Deployment to cloud servers, domain setup, and basic SEO indexing. We handle IT.",
      color: "border-blue-700",
      hoverBg: "group-hover:bg-blue-700"
    },
  ];

  return (
    <section className="w-full bg-gray-900 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">How we work</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            From Concept to Launch in 4 Weeks
          </h1>
        </motion.div>

        <div className="relative">
          {/* Desktop Horizontal Line (Reveals left to right) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-10 left-0 h-0.5 bg-gray-700 -z-0"
          ></motion.div>
          
          {/* Mobile/Tablet Vertical Line (Reveals top to bottom) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="lg:hidden absolute top-0 left-10 w-0.5 bg-gray-700 -z-0"
          ></motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={stepVariants} 
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Number Circle */}
                <div className={`w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center shadow-2xl mb-0 lg:mb-6 border-2 ${step.color} shrink-0 z-10 transition-all ${step.hoverBg} duration-300`}>
                  <span className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content Area */}
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Lunch;