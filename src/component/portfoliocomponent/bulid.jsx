"use client";

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// --- Standardized Number Counter ---
const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: duration, ease: [0.22, 1, 0.36, 1] });
    }
  }, [isInView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Bulid = () => {
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Stats Data
  const stats = [
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Users Impacted", value: 10, suffix: "M+" },
    { label: "Support & Uptime", value: "24/7", isStatic: true }
  ];

  return (
    <section className="w-full mt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center">
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 bg-blue-50 text-sm h-8 px-4 border border-blue-200 rounded-2xl mb-6"
          >
            Award Winning Agency
          </motion.button>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="text-3xl sm:text-5xl md:text-6xl font-bold py-4 leading-[1.1] text-gray-900 tracking-tight"
          >
            We Build Digital <br className="hidden md:block" />
            <span className="text-blue-600">Masterpieces</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ...premiumTransition }}
            className="text-base sm:text-lg md:text-xl text-gray-500 py-4 max-w-3xl mx-auto leading-relaxed px-2"
          >
            From intelligent AI algorithms to stunning web experiences, we engineer 
            software that transforms businesses and defines the future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ...premiumTransition }}
            className="flex flex-col sm:flex-row justify-center gap-4 py-8 px-4"
          >
            <Link to="/portfolio" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 text-white py-3.5 px-8 rounded-2xl hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-100"
              >
                View Our Work
              </motion.button>
            </Link>
            <Link to="/qoute" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-black py-3.5 px-8 rounded-2xl border border-gray-200 transition-all font-semibold"
              >
                Start a Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white py-16 md:py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
            
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center group"
              >
                <motion.h2 
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl lg:text-5xl font-extrabold text-blue-600 transition-colors"
                >
                  {stat.isStatic ? (
                    stat.value
                  ) : (
                    <>
                      <Counter value={stat.value} />
                      {stat.suffix}
                    </>
                  )}
                </motion.h2>
                <p className="mt-3 font-bold text-sm lg:text-lg text-gray-600 uppercase tracking-tight group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-6 lg:px-8">
        <motion.hr 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="border-gray-100" 
        />
      </div>
    </section>
  );
};

export default Bulid;