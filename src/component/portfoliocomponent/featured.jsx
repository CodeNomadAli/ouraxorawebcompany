import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion"; // Added motion

const Featured = () => {
  // --- Standardized Premium Animations ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="w-full font-sans overflow-hidden">
      <div className="w-full bg-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            {/* Image Column - Slide in from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              className="w-full group"
            >
              <div className="rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden bg-gray-100 aspect-video md:aspect-[16/9] lg:aspect-auto lg:h-[550px]">
                <img
                  src="/protfolioimg.png"
                  alt="Featured Project"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Text Content Column - Slide in from Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              className="w-full flex flex-col"
            >
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, ...premiumTransition }}
                className="text-xs md:text-sm text-blue-600 font-bold uppercase tracking-[0.2em] mb-4"
              >
                Featured Case Study
              </motion.h4>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, ...premiumTransition }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight"
              >
                Revolutionizing Logistics with <span className="text-blue-600">AI-Driven Routing</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, ...premiumTransition }}
                className="text-gray-500 mt-6 text-base md:text-lg leading-relaxed max-w-3xl"
              >
                We helped LogisticsCo reduce fuel costs by 35% using a custom machine learning algorithm that predicts traffic patterns and optimizes delivery routes in real-time.
              </motion.p>

              {/* Features List with Staggered Fade-in */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8">
                {[
                  "35% Cost Reduction",
                  "2.5x Faster Delivery Times",
                  "Custom Mobile App for Drivers"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1), ...premiumTransition }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="bg-green-100 p-1.5 rounded-full group-hover/item:bg-green-500 transition-colors duration-300">
                      <FaCheck className="text-green-600 group-hover/item:text-white w-3 h-3 transition-colors" />
                    </div>
                    <p className="text-gray-700 font-semibold text-sm md:text-base">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Read More Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, ...premiumTransition }}
                className="mt-10 lg:mt-12"
              >
                <button className="group relative w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 active:scale-95">
                  <span className="relative z-10">Read Full Story</span>
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;