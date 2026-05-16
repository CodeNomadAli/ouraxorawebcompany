"use client";

import React from "react";
import { Link } from "react-router-dom"; // Link added
import { motion } from "framer-motion";
import {
  FaCheck,
  FaCode,
  FaMobile,
  FaPencilRuler,
  FaCog,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-5 h-5 text-gray-700 transition-colors group-hover:text-white" />,
    title: "Custom Software",
    description: "Accelerate your pipeline with automated deployment, CI/CD, and scalable infrastructure.",
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring & Alerts"],
  },
  {
    icon: <FaPencilRuler className="w-5 h-5 text-gray-700 transition-colors group-hover:text-white" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces that ensure seamless digital experiences.",
    features: ["Wireframes & Prototypes", "Design Systems", "Mobile-First Design"],
  },
  {
    icon: <FaMobile className="w-5 h-5 text-gray-700 transition-colors group-hover:text-white" />,
    title: "Mobile App Dev",
    description: "Fast, responsive, and feature-rich mobile applications for iOS and Android.",
    features: ["iOS & Android Apps", "Flutter & React Native", "Offline Functionality"],
  },
  {
    icon: <FaCog className="w-5 h-5 text-gray-700 transition-colors group-hover:text-white" />,
    title: "DevOps & Automation",
    description: "Accelerate your pipeline with automated deployment, CI/CD, and scalable infrastructure.",
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring & Alerts"],
  },
  {
    icon: <FaRobot className="w-5 h-5 text-gray-700 transition-colors group-hover:text-white" />,
    title: "Artificial Intelligence",
    description: "Implement intelligent solutions like machine learning and computer vision to unlock insights.",
    features: ["ML Model Development", "AI-Powered Chatbots", "Predictive Analytics"],
  },
  {
    icon: <FaLaptopCode className="w-5 h-5 text-gray-700 transition-colors group-hover:text-white" />,
    title: "Website Development",
    description: "Fast, responsive, and scalable websites optimized for performance and SEO.",
    features: ["Responsive Web Design", "CMS Integration", "E-commerce Solutions"],
  },
];

const Card = () => {
  const premiumTransition = {
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
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

  return (
    <section className="w-full bg-white py-12 overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -12 }} 
              className="border border-gray-200 px-6 py-8 rounded-[2rem] w-full group transition-all duration-300 hover:border-blue-700 hover:bg-gray-50 hover:shadow-2xl flex flex-col h-full"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#00b4ff] mb-6">
                {service.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 font-serif text-sm text-gray-600 leading-relaxed">{service.description}</p>
                
                <hr className="border-t-2 border-dotted border-gray-200 my-8" />

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <FaCheck className="w-4 h-4 text-[#00b4ff] mt-1 shrink-0" />
                      <p className="text-sm text-gray-500 font-bold">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Link added here */}
              <div className="mt-8">
                <Link to="/portfolio" className="flex items-center gap-2 group/btn inline-flex">
                  <span className="text-[#00b4ff] font-bold group-hover/btn:underline transition-all">
                    Learn more
                  </span>
                  <span className="text-[#00b4ff] font-bold transition-transform group-hover/btn:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="w-full flex justify-center py-10 mt-14"
        >
          <Link to="/services">
            <button className="flex items-center text-white bg-[#00b4ff] rounded-xl text-lg px-8 py-4 hover:bg-[#00b4ff] transition-all duration-300 shadow-lg active:scale-95 font-semibold">
              View All Services
              <span className="ml-3 font-bold">→</span>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Card;