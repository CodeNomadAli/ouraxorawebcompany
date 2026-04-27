"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// --- Fixed Counter Component ---
const Counter = ({ value, suffix = "", decimals = 0, prefix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setDisplayValue(latest);
        },
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

const Wework = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section className="w-full overflow-hidden">
      {/* How We Work Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Work</h2>
            <p className="text-gray-400 py-3 mb-16">
              A transparent, agile process designed to get you to market faster.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="hidden md:block absolute top-10 left-0 h-0.5 bg-slate-100 -z-0"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10"
            >
              {[
                { num: "01", title: "Discovery", desc: "We analyze your SKUs, customer data, and goals." },
                { num: "02", title: "Strategy & Design", desc: "We meet to discuss scope and strategy.", color: "text-blue-600" },
                { num: "03", title: "Development", desc: "Coding the store and integrating payment gateways.", color: "text-blue-600" },
                { num: "04", title: "Growth", desc: "Launch, testing, and ongoing revenue optimization.", active: true },
              ].map((step, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-md mb-6 outline outline-offset-4 outline-white transition-transform hover:scale-110 duration-300 ${
                    step.active ? "bg-blue-600 text-white" : `${step.color || "text-slate-900"} bg-white border-2 border-slate-100`
                  }`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-20 bg-slate-900">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Client Revenue Processed", value: 500, suffix: "M+", prefix: "$" },
              { label: "Stores Launched", value: 150, suffix: "+" },
              { label: "Uptime Record", value: 99.9, suffix: "%", decimals: 1 },
              { label: "Avg. Conv. Uplift", value: 35, suffix: "%" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, ...premiumTransition }}
              >
                <h1 className="text-4xl font-extrabold text-white">
                  <Counter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                    prefix={stat.prefix} 
                  />
                </h1>
                <p className="mt-2 text-lg text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-slate-900"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center space-y-6"
          >
            {[
              { q: "Which platform should I choose?", a: "It depends on your scale. We typically recommend Shopify for D2C brands up to $50M/year, and Adobe Commerce (Magento) or custom builds for complex B2B needs." },
              { q: "Do you handle migration?", a: "Yes. We specialize in zero-downtime migrations, ensuring your SEO rankings, customer data, and order history are preserved perfectly." },
              { q: "How long does a build take?", a: "A standard Shopify build takes 4-8 weeks. Custom enterprise solutions can take 3-6 months depending on complexity and integrations." }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="w-full lg:w-[850px] border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-blue-100 hover:shadow-lg transition-all duration-300 bg-white shadow-sm group"
              >
                <h1 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{faq.q}</h1>
                <p className="text-base text-gray-500 mt-3 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Wework;