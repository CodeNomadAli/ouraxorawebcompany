"use client";

import React from "react";
import { motion } from "framer-motion";

const DeliveryRoadmap = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      desc: "Requirements gathering and technical scoping.",
    },
    {
      number: "2",
      title: "Architecture",
      desc: "Database design, UI wireframes, and stack selection.",
    },
    {
      number: "3",
      title: "Development",
      desc: "Agile sprints with bi-weekly client updates.",
    },
    {
      number: "4",
      title: "Launch & Scale",
      desc: "Deployment, monitoring, and ongoing support.",
    },
  ];

  // --- Standard Premium Animation Settings ---
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

  return (
    <section className="w-full bg-white py-24 overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 text-center">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-20"
        >
          The Delivery Roadmap
        </motion.h2>

        {/* Roadmap Container */}
        <div className="relative">
          
          {/* Desktop Horizontal Line - Animated reveal */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-10 left-0 h-0.5 bg-gray-100 -z-0"
          ></motion.div>
          
          {/* Mobile Vertical Line - Animated reveal */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="lg:hidden absolute top-0 left-10 w-0.5 bg-gray-100 -z-0"
          ></motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={stepVariants}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl font-black text-gray-900 mb-0 lg:mb-6 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-100 relative bg-white shrink-0 z-10">
                   {step.number}
                </div>

                {/* Text Content */}
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] lg:mx-auto">
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

export default DeliveryRoadmap;