"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

const Buildsection = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 2,
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

  const steps = [
    {
      id: "01",
      icon: <FaComments className="text-2xl" />,
      title: "Discovery & Planning",
      description: "We begin by understanding your business goals and technical requirements.",
      features: ["Business Analysis", "User Research", "Technical Requirements"],
    },
    {
      id: "02",
      icon: <FaLightbulb className="text-2xl" />,
      title: "Design & Prototyping",
      description: "Our team crafts user-focused designs and interactive prototypes.",
      features: ["UI/UX Design", "Wireframing", "Interactive Prototypes"],
    },
    {
      id: "03",
      icon: <FaCode className="text-2xl" />,
      title: "Development",
      description: "We build scalable, modern applications with seamless integration.",
      features: ["Custom Development", "System Integration", "Quality Assurance"],
    },
    {
      id: "04",
      icon: <FaRocket className="text-2xl" />,
      title: "Deployment",
      description: "We deploy your application and provide ongoing support.",
      features: ["App Launch", "Ongoing Support", "Maintenance"],
    },
  ];

  return (
    <section className="w-full bg-white pt-14 py-20 overflow-hidden font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-wider">Our Process</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight">
          How We Build Your <span className="text-blue-600">Solutions</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl mt-5 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Our proven 4-step process delivers scalable, high-performance applications. We don't just write code; we engineer solutions.
        </motion.p>

        {/* --- MOBILE & TABLET VIEW --- */}
        <div className="mt-16 relative lg:hidden text-left px-2 max-w-2xl mx-auto">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[30px] top-6 w-[2px] bg-blue-500 z-0"
          ></motion.div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative z-10 flex gap-5 items-start">
                <div className="relative flex-shrink-0">
                   <span className="absolute -top-2 -right-1 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 border-2 border-white">
                      {step.id}
                    </span>
                  <div className="w-[60px] h-[60px] bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-gray-700">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.description}</p>
                  
                  <div className="bg-slate-100 py-5 px-6 rounded-2xl border border-blue-300 mt-5">
                    <ul className="space-y-3">
                      {step.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-gray-600 font-bold text-xs">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="mt-12 relative hidden lg:block">
          {/* Animated Horizontal Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-10 left-0 h-[2px] bg-blue-100 z-0"
          ></motion.div>
          
          <div className="grid lg:grid-cols-4 gap-12 text-center mt-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative group">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 border-2 border-white">
                  {step.id}
                </span>
                <div className="mx-auto w-20 h-20 bg-white group-hover:bg-blue-600 rounded-3xl shadow-xl flex items-center justify-center border border-gray-100 transition-all duration-300 group">
                  <div className="text-gray-700 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                <p className="text-gray-600 mt-3 text-sm px-2 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid lg:grid-cols-4 gap-6 mt-20">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-slate-100 p-6 rounded-2xl border border-blue-300 transition-all shadow-sm hover:shadow-md"
              >
                <ul className="space-y-2">
                  {step.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-left text-gray-600 font-bold text-xs">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-16 pb-10">
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/axoraweb/30min">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg px-8 py-4 flex items-center mx-auto gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100">
              Book an Intro Call
              <span className="font-bold text-xl">→</span>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Buildsection;