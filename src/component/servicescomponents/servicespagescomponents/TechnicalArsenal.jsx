"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechnicalArsenal = () => {
  const [activeTab, setActiveTab] = useState("Backend");

  // --- Standardized Premium Animations ---
  const premiumTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  // --- Data for Tabs ---
  const arsenalData = {
    Backend: ["Laravel", "Node.js", "Python", "Go", "PHP"],
    Frontend: ["React", "Vue.js", "Next.js", "Tailwind CSS", "TypeScript"],
    Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
    DevOps: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "DigitalOcean"],
    "AI / ML": ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain"],
  };

  const tabs = Object.keys(arsenalData);

  return (
    <section className="w-full bg-gray-50 py-20 font-sans overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 text-center">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight"
        >
          Our Technical Arsenal
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                  : "bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={premiumTransition}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {arsenalData[activeTab].map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, ...premiumTransition }}
                  className="bg-gray-100 border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-blue-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
                >
                  {/* Blue Dot */}
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mb-4 shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-125" />
                  <span className="text-gray-900 font-bold text-sm md:text-base tracking-wide group-hover:text-blue-600 transition-colors">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-32 py-20 px-6 rounded-[3rem] bg-gray-50 border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 tracking-tighter relative z-10">
            Your Vision, Our <span className="text-blue-600">Engineering.</span>
          </h3>
          <p className="text-gray-500 text-sm md:text-lg mb-10 max-w-2xl mx-auto font-medium relative z-10">
            Stop struggling with off-the-shelf tools. Let's build exactly what your business needs to grow.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all relative z-10"
          >
            Get a Fixed-Price Proposal
          </motion.button>
          
          <p className="text-gray-400 text-[10px] md:text-xs mt-8 uppercase tracking-[0.3em] font-bold relative z-10">
            Response guaranteed within 24 hours.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnicalArsenal;