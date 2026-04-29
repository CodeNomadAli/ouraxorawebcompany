"use client";

import React, { useEffect, useRef } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// --- Number Counter Sub-Component ---
const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: duration, ease: "easeOut" });
    }
  }, [isInView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Conversion = () => {
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: premiumTransition 
    },
  };

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50 mt-12 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Confusion kills conversion.
            </h1>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              Users judge your credibility in 0.05 seconds. If your software is hard to use, they churn. If your website is cluttered, they bounce.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full bg-white shadow-sm border border-gray-200 p-6 sm:p-8 rounded-2xl transition-shadow"
            >
              <div className="flex gap-4 items-center mb-4">
                <motion.div 
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }}
                  className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl"
                >
                  <FaTriangleExclamation className="text-2xl text-blue-500" />
                </motion.div>
                <p className="font-bold text-lg text-gray-900">The "Frustration Gap"</p>
              </div>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Every extra click, slow loader, or unclear label drops your conversion rate by <span className="text-blue-600 font-bold">20%</span>. We close that gap.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-6"
          >
            {/* Stat 1: 300% */}
            <motion.div variants={cardVariants} className="flex flex-col items-center justify-center p-6 border border-gray-100 bg-white shadow-sm rounded-2xl h-36 w-full">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600">
                <Counter value={300} />%
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide text-center px-2">ROI on UX Design</p>
            </motion.div>

            {/* Stat 2: 50ms */}
            <motion.div variants={cardVariants} className="flex flex-col items-center justify-center p-6 border border-gray-100 bg-white shadow-sm rounded-2xl h-36 w-full">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600">
                <Counter value={50} />ms
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide text-center px-2">Time to Impress</p>
            </motion.div>

            {/* Stat 3: 88% */}
            <motion.div variants={cardVariants} className="flex flex-col items-center justify-center p-6 border border-gray-100 bg-white shadow-sm rounded-2xl h-36 w-full">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600">
                <Counter value={88} />%
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide text-center px-2">Churn after bad XP</p>
            </motion.div>

            {/* Stat 4: Infinity (Static) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 border border-blue-800 bg-blue-600 shadow-lg rounded-2xl h-36 w-full"
            >
              <h1 className="text-5xl font-extrabold text-white">∞</h1>
              <p className="text-xs sm:text-sm font-semibold text-blue-50 mt-2 uppercase tracking-wide text-center px-2">Value of Trust</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Conversion;