"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Cpu, Globe, Smartphone, PenTool } from "lucide-react";

const FeatureShowcase = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ...premiumTransition } },
  };

  return (
    <section className="w-full bg-gray-50 py-20 overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 space-y-32 md:space-y-48">
        
        {/* Section 1: Custom Software Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="order-1 lg:order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="\servieslaptop.png" alt="Software Architecture" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-2 space-y-6"
          >
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">Core Expertise</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
              Custom Software Architecture
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Off-the-shelf software rarely fits perfectly. We build robust, secure, and scalable systems designed specifically for your business logic.
            </p>
            <ul className="space-y-4 pt-4">
              {["Enterprise Resource Planning (ERP)", "SaaS Product Development (MVP to Scale)", "Legacy System Modernization"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Section 2: AI & Integration (Reversed Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1 space-y-6"
          >
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">Innovation</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
              Artificial Intelligence & Integration
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Don't just collect data—use it. We integrate cutting-edge AI models to help you predict trends, automate support, and generate content.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-200 transition-colors">
                <Cpu className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-gray-900">Generative AI Integration</h4>
                  <p className="text-sm text-gray-500">OpenAI / Claude API implementation for text & image generation.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-200 transition-colors">
                <Globe className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-gray-900">Predictive Analytics</h4>
                  <p className="text-sm text-gray-500">Turn historical data into future actionable insights.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/robot.png" alt="AI Integration" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>

        {/* Section 3: Mobile Apps & UI/UX */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/mobile.png" alt="Mobile App Design" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 space-y-6"
          >
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
              Mobile Apps & UI/UX Design
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Your technology is only as good as it looks and feels. We design intuitive interfaces and build native-quality mobile apps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm group hover:border-blue-500 transition-all">
                <Smartphone className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900">Cross-Platform</h4>
                <p className="text-xs text-gray-500 mt-1">React Native / Flutter apps that work on iOS & Android.</p>
              </div>
              <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm group hover:border-blue-500 transition-all">
                <PenTool className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900">Product Design</h4>
                <p className="text-xs text-gray-500 mt-1">Wireframing, Prototyping, and Design Systems (Figma).</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeatureShowcase;