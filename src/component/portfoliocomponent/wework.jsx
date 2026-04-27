import React from "react";
import { FaSearch, FaPencilRuler, FaLaptop, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion"; // Added motion

const Work = () => {
  // --- Standardized Premium Animations ---
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

  const techList = [
    { name: "Laravel", color: "hover:text-red-500" },
    { name: "React", color: "hover:text-blue-500" },
    { name: "Tailwind", color: "hover:text-sky-400" },
    { name: "Python", color: "hover:text-yellow-500" },
    { name: "AWS", color: "hover:text-orange-500" },
    { name: "OpenAI", color: "hover:text-emerald-500" },
  ];

  return (
    <section className="w-full font-sans overflow-hidden">
      {/* How We Work Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16 md:mb-24 tracking-tight"
          >
            How We Work
          </motion.h2>

          <div className="relative">
            {/* Desktop & Tablet Horizontal Line - Animated reveal */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden lg:block absolute top-10 left-0 h-0.5 bg-slate-200 -z-0"
            ></motion.div>
            
            {/* Mobile/Tablet Vertical Line - Animated reveal */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="lg:hidden absolute top-0 left-10 md:left-10 w-0.5 bg-slate-200 -z-0"
            ></motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
            >
              {/* Step 1 */}
              <motion.div variants={stepVariants} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-blue-500 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-blue-500 duration-300">
                  <FaSearch className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    We analyze your goals and technical requirements.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={stepVariants} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-amber-500 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-amber-500 duration-300">
                  <FaPencilRuler className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Design</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    We craft intuitive UI/UX and system architecture.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={stepVariants} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-gray-700 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-gray-700 duration-300">
                  <FaLaptop className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Development</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    Agile sprints to bring the product to life.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div variants={stepVariants} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-blue-700 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-blue-700 duration-300">
                  <FaRocket className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Launch</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    Testing, deployment, and ongoing scaling.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powering Solutions Section */}
      <div className="bg-white text-center py-16 border-t border-gray-100">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8"
        >
          <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            Powering Solutions With
          </h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-300 font-bold text-xl md:text-3xl">
            {techList.map((tech) => (
              <motion.h4 
                key={tech.name} 
                whileHover={{ scale: 1.1 }}
                className={`${tech.color} transition-all duration-300 cursor-default`}
              >
                {tech.name}
              </motion.h4>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;