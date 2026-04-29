"use client";

import React from "react";
import { motion } from "framer-motion";

const Tailored = () => {
  // --- Snappy & Professional Configuration ---
  const premiumTransition = {
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cards = [
    {
      label: "Direct to Consumer",
      title: "D2C Brand Stores",
      desc: "Immersive storytelling meets hard-hitting conversion tactics. Perfect for lifestyle brands scaling on Shopify Plus or WooCommerce.",
      features: ["Subscription Modeling", "Bundle Builders"],
    },
    {
      label: "Business to Business",
      title: "B2B Portals",
      desc: "Complex bulk ordering made simple. Wholesale pricing, net-payment terms, and customer-specific catalogs.",
      features: ["Tiered Pricing", "Quick Order Forms"],
    },
    {
      label: "Multi-Vendor",
      title: "Marketplaces",
      desc: "Build the next Amazon or Etsy. Scalable architecture that allows multiple vendors to list products while you control the commission.",
      features: ["Vendor Dashboards", "Commission Splitting"],
    },
  ];

  return (
    <section className="w-full py-16 overflow-hidden">
      {/* Master Width Container */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="w-full py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="max-w-xl"
          >
            <h1 className="text-3xl font-bold py-2">Tailored for your model</h1>
            <p className="text-gray-500 font-medium py-2 text-sm">
              One size does not fit all. We architect solutions based on your specific business <br className="hidden md:block" />
              requirements.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="mt-4 md:mt-0"
          >
            <a href="/" className="text-blue-600 font-semibold hover:underline group flex items-center gap-1">
              Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        <motion.hr 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="border-gray-100 origin-left" 
        />

        {/* Cards Grid */}
        <div className="w-full py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="w-full group bg-white shadow-sm hover:shadow-2xl p-8 border border-gray-100 rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{card.label}</h3>
                <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600 transition-colors">{card.title}</h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.desc}
                </p>

                <div className="flex flex-col gap-2 mt-8">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm text-gray-500">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gray-50 text-center py-14 mt-7 w-full border-t border-gray-100"
      >
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6"
          >
            We are certified partners with
          </motion.h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400 font-bold text-2xl">
            {["Shopify", "Magento", "BigCommerce", "WooCommerce", "Salesforce"].map((brand, bIdx) => (
              <motion.h4 
                key={bIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * bIdx }}
                className="hover:text-blue-600 cursor-default transition-colors"
              >
                {brand}
              </motion.h4>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tailored;