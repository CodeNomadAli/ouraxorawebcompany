"use client";

import React from "react";
import { motion } from "framer-motion";

const MeetExperts = () => {
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
        staggerChildren: 0.15,
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

  const experts = [
   { 
      name: "Ali Hamza", 
      role: "CEO & FOUNDER", 
      desc: "Visionary leader driving the strategic growth and innovation of AppxGlobal, ensuring we deliver world-class digital solutions.",
      img: "/ali.png",
 },
    { 
      name: "Faqeer Hussain", 
      role: "CTO (CHIEF TECHNOLOGY OFFICER)", 
      desc: "Architecting scalable technical infrastructures and leading engineering teams to solve complex digital challenges.",
      img: "/faqeerhussain2.png" 
    },
    { 
      name: "Mubashir", 
      role: "FULL STACK ENGINEER", 
      desc: "Expert in building robust, high-performance web applications with a focus on seamless user experiences and clean code.",
      img: "/dev.png" 
    },
    { 
      name: "Alisha", 
      role: "SEO & MARKETING EXPERT", 
      desc: "Strategist focused on maximizing digital reach and ROI through data-driven search engine optimization and growth marketing.",
      img: "/alisha.png" 
    }
  ];

  return (
    <section className="w-full bg-white py-24 font-sans px-4 lg:px-8 overflow-hidden">
      {/* Width logic fixed to match Navbar exactly */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto text-center"
      >
        
        {/* Badge Color Updated to Blue */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-wider">The Minds Behind AppxGlobal</span>
          </div>
        </motion.div>

        {/* Heading Color Updated to Blue */}
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-[#05070A] mb-6">
          Meet Our <span className="text-blue-600 relative inline-block">
            Experts
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute -bottom-1 left-0 h-[2px] bg-blue-200"
            />
          </span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto mb-20 text-sm md:text-base leading-relaxed">
          A high-performance team of strategists, designers, and engineers dedicated to scaling your digital vision.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((exp, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col group transition-all duration-300"
            >
              <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={exp.img} alt={exp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="px-2 pb-4">
                <h3 className="text-xl font-bold text-gray-900 text-center">{exp.name}</h3>
                {/* Role Color Updated to Blue */}
                <p className="text-[9px] text-blue-600 font-black uppercase tracking-[0.15em] mt-1 mb-4 text-center">{exp.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed text-center">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link Updated to Blue */}
        <motion.div variants={itemVariants} className="mt-20">
          <p className="text-gray-400 italic text-sm mb-4">Want to join our growing team of innovators?</p>
          <a href="#" className="text-blue-600 font-bold text-sm hover:underline inline-flex items-center gap-2 group">
            View Open Positions 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default MeetExperts;