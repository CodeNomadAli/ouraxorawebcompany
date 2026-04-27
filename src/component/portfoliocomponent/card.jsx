import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added motion & AnimatePresence

const Card = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      category: "ECOMMERCE",
      filterTag: "Web Development",
      title: "Omrolo",
      description: "Real-time anomaly detection system processing 10M+ transactions with daily 99.9% accuracy.",
      img: "/omorlo-presentation.png",
      tags: ["Laravel", "Livewire", "Tailwind CSS"],
    },
    {
      category: "FLUTTER",
      filterTag: "Mobile App",
      title: "Swish Social",
      description: "Cross-platform mobile shopping experience with AR product try-on capabilities.",
      img: "/swish.jpg",
      tags: ["Flutter", "Laravel", "Stripe"],
    },
    {
      category: "UI/UX DESIGN",
      filterTag: "UI/UX Design",
      title: "Mobile Screens",
      description: "Complete UX overhaul resulting in a 40% increase in user retention and session time.",
      img: "/mobile-screens.png",
      tags: ["Figma"],
    },
    {
      category: "WEB DEVELOPMENT",
      filterTag: "Web Development",
      title: "E-COMMERCE",
      description: "Enterprise-grade portal for internal resource management and employee engagement.",
      img: "/ecommerce.png",
      tags: ["Vue.js", "Laravel", "AWS"],
    },
    {
      category: "WEB DEVELOPMENT",
      filterTag: "Web Development",
      title: "Billionary Investment Tool",
      description: "SaaS platform leveraging LLMs to generate marketing copy in seconds.",
      img: "/billanory (2).png",
      tags: ["OpenAI API", "Next.js", "Node.js"],
    },
    {
      category: "MOBILE APP",
      filterTag: "Mobile App",
      title: "Grocery Order",
      description: "Secure patient data management system with telemedicine integration.",
      img: "/food.png",
      tags: ["React Native", "Tailwind CSS"],
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.filterTag === filter);

  // --- Animation Settings ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="w-full font-sans overflow-hidden">
      {/* Header */}
      <div className="w-full bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Selected Works
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ...premiumTransition }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 py-8"
          >
            {["All", "Web Development", "Mobile App", "UI/UX Design"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full text-sm font-semibold px-6 py-2.5 border-2 transition-all duration-300 ${
                  filter === cat 
                  ? "bg-black text-white border-black shadow-lg" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-gray-50 pb-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((card, index) => (
                <motion.div
                  layout
                  key={card.title} // Title works better as a key for filtering
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
                  transition={premiumTransition}
                  className="relative bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 backdrop-blur-sm">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                      >
                        View Case Study
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h5 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{card.category}</h5>
                    <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                      {card.title}
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 group-hover:border-blue-100 group-hover:text-blue-400 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Card;