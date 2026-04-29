import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Layout, 
  Cloud, 
  Cpu, 
  Users, 
  BarChart3, 
  Settings, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

const PricingHero = () => {
  const [selectedService, setSelectedService] = useState("Custom Software Development");

  const services = [
    { id: 1, name: "Custom Software Development", icon: <Code2 size={20} /> },
    { id: 2, name: "Web Development", icon: <Globe size={20} /> },
    { id: 3, name: "Mobile App Development", icon: <Smartphone size={20} /> },
    { id: 4, name: "E-commerce Solutions", icon: <ShoppingCart size={20} /> },
    { id: 5, name: "UI/UX Design", icon: <Palette size={20} /> },
    { id: 6, name: "Content Management System", icon: <Layout size={20} /> },
    { id: 7, name: "Cloud Services", icon: <Cloud size={20} /> },
    { id: 8, name: "AI & Machine Learning", icon: <Cpu size={20} /> },
    { id: 9, name: "IT Consulting", icon: <Users size={20} /> }, 
    { id: 10, name: "Data Analytics", icon: <BarChart3 size={20} /> },
    { id: 11, name: "DevOps & Automation", icon: <Settings size={20} /> },
    { id: 12, name: "Cybersecurity", icon: <ShieldCheck size={20} /> },
    { id: 13, name: "Digital Marketing", icon: <Zap size={20} /> },
  ];

  // --- Premium Animation Settings ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // Staggered entry for cards
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

  return (
    <section className="w-full pt-40 pb-24 md:pt-48 md:pb-32 bg-white border-b border-gray-100 overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Pricing for <span className="text-blue-600">Every Project</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Select your service and requirements to get an instant estimate. All prices are customizable based on your specific needs.
          </p>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4"
        >
          <h2 className="text-2xl font-bold text-slate-900">Select Your Service</h2>
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-[13px] bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
            <Zap size={14} className="fill-current" />
            <span>Most Popular: Web Development</span>
          </div>
        </motion.div>

        {/* Services Grid with Staggered Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10"
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }} // Extra lift on hover
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedService(service.name)}
              className={`group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 min-h-[140px]
                ${selectedService === service.name 
                  ? "border-blue-600 bg-white shadow-xl shadow-blue-100/40" 
                  : "border-slate-100 bg-slate-50/40 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                }`}
            >
              <div className={`mb-3 p-3 rounded-xl transition-all duration-300 
                ${selectedService === service.name 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                  : "bg-slate-200/50 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                }`}>
                {service.icon}
              </div>

              <span className={`text-[10px] font-bold uppercase tracking-widest text-center leading-tight
                ${selectedService === service.name ? "text-blue-600" : "text-slate-500 group-hover:text-blue-600"}`}>
                {service.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Description Box */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="w-full p-8 rounded-2xl border border-slate-200 bg-slate-50/30 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">{selectedService}</h3>
              <p className="text-gray-600 text-base md:text-lg">
                {selectedService === "Custom Software Development" 
                  ? "Tailored applications built to your exact specifications." 
                  : `High-quality ${selectedService.toLowerCase()} services optimized for performance and user experience.`}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingHero;