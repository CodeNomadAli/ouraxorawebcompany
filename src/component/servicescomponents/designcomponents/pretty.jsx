import React from "react";
import { FaSearch, FaBolt } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { motion } from "framer-motion";

const Pretty = () => {
  // --- Standardized Premium Animations (Same as previous sections) ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // Same stagger speed
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: premiumTransition 
    },
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 400 } }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        
        {/* Header Section - Same Fade-in speed */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            More than just "pretty"
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
            We balance scientific research with artistic execution to create products that work.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 py-4"
        >
          
          {/* UX Research */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
            className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 w-full"
          >
            <motion.div 
              variants={iconVariants}
              className="w-14 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
            >
              <FaSearch className="text-blue-600 w-6 h-6 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">UX Research</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We interview your users, create personas, and map out customer journeys to ensure we are solving the right problem.
            </p>
          </motion.div>

          {/* UI Design */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
            className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 w-full"
          >
            <motion.div 
              variants={iconVariants}
              className="w-14 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300"
            >
              <FaTableCellsLarge className="text-purple-600 w-6 h-6 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">UI Design</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Pixel-perfect layouts, typography, and color theory. We create Design Systems (UI Kits) for consistency across all screens.
            </p>
          </motion.div>

          {/* Prototyping */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
            className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 w-full"
          >
            <motion.div 
              variants={iconVariants}
              className="w-14 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
            >
              <FaBolt className="text-blue-600 w-6 h-6 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">Prototyping</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Clickable, interactive mockups that act like the real app. We test these with real users before writing a single line of code.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Pretty;