"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { 
  Truck, Wind, Building2, Server, ShoppingCart, 
  Briefcase, Gamepad2, ShoppingBag, Mountain, 
  Baby, Utensils, TrendingUp 
} from 'lucide-react';

// --- Standardized Number Counter Sub-Component ---
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

const Team = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: premiumTransition,
    },
  };

  const partners = [
    { name: "Brightway", sub: "Logistics", icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-bold" },
    { name: "Remlyo", sub: "Harnessing Nature, Powered by AI", icon: <Wind className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-bold" },
    { name: "Construct Hub", sub: "BUILDING TOMORROW'S FOUNDATIONS", icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-bold uppercase" },
    { name: "HOST ETHICS", sub: "Hosting your online success", icon: <Server className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-black italic tracking-tighter" },
    { name: "Hello Shop", sub: "", icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic text-lg md:text-xl" },
    { name: "SMARTCASE", sub: "manager", icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5" />, hasLine: true, style: "font-sans tracking-widest font-light" },
    { name: "CCESS", icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />, sub: "A LEADING GAMING BRAND", style: "font-sans font-black italic" },
    { name: "OMROLO", sub: "", icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-black text-lg md:text-xl tracking-tighter" },
    { name: "Summit Estates", sub: "", icon: <Mountain className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic" },
    { name: "SNUG CRAZE", sub: "", icon: <Baby className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-black italic" },
    { name: "Taste Bites", sub: "", icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic font-semibold" },
    { name: "AS", sub: "", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic border-b border-gray-600 group-hover:border-blue-500" },
  ];

  return (
    <section className="bg-[#0a0f1c] py-12 md:py-20 px-4 min-h-screen w-full overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-2 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-3 font-bold italic">Trusted by Innovative Teams</p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Powering the Next Generation of <span className="text-blue-500">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"
        >
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "#1c273d" }}
              className="group bg-[#161f32]/60 border border-[#242d41] rounded-lg h-24 md:h-32 flex items-center justify-center p-3 md:p-6 
                         transition-all duration-300 cursor-pointer
                         hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <div className="flex flex-row items-center gap-2 md:gap-4 transition-all duration-300 opacity-40 group-hover:opacity-100 w-full justify-center">
                <div className="text-gray-400 transition-colors duration-300 group-hover:text-blue-400 shrink-0">
                  {p.icon}
                </div>
                <div className={`flex flex-col ${p.hasLine ? 'border-t border-gray-600 group-hover:border-blue-400 pt-1' : ''}`}>
                  <span className={`text-gray-200 transition-colors duration-300 group-hover:text-white text-xs md:text-lg leading-none ${p.style}`}>
                    {p.name}
                  </span>
                  {p.sub && (
                    <span className="text-[6px] md:text-[9px] text-gray-500 uppercase mt-1 tracking-widest font-bold group-hover:text-blue-200 transition-colors leading-tight">
                      {p.sub}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Section with Increase Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-gray-800/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col gap-1"
            >
              <h3 className="text-blue-500 text-2xl md:text-4xl font-extrabold tracking-tighter">
                <Counter value={50} />+
              </h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Enterprise Clients</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col gap-1 md:border-x border-gray-800/30 px-4"
            >
              <h3 className="text-blue-500 text-2xl md:text-4xl font-extrabold tracking-tighter">
                $<Counter value={100} />M+
              </h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Revenue Enabled</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col gap-1"
            >
              <h3 className="text-blue-500 text-2xl md:text-4xl font-extrabold tracking-tighter">
                <Counter value={98} />%
              </h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Retention Rate</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;