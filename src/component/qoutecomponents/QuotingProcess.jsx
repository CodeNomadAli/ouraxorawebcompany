import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const QuotingProcess = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const premiumTransition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const processSteps = [
    { number: "1", title: "Request", desc: "You submit requirements.", color: "text-red-600", border: "border-red-100" },
    { number: "2", title: "Analysis", desc: "We scope the technical needs.", color: "text-blue-600", border: "border-blue-100" },
    { number: "3", title: "Proposal", desc: "Delivery within 24-48 hours.", color: "text-gray-900", border: "border-gray-100" },
  ];

  const faqs = [
    { q: "Is this quote legally binding?", a: "No, this is a preliminary non-binding quote based on your initial requirements. A formal legally binding agreement will be signed later." },
    { q: "Do you sign NDAs before quoting?", a: "Yes, we prioritize your data security. If you haven't already signed our mutual NDA during the request phase, we can sign yours before proceeding." },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:py-28 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* --- Quoting Process Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={premiumTransition}
          className="mb-28 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[11px] font-black uppercase text-blue-600 tracking-[0.25em] mb-16"
          >
            OUR QUOTING PROCESS
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 relative">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...premiumTransition, delay: idx * 0.1 }}
                className="relative flex flex-col items-center group pb-12 md:pb-0"
              >
                {/* Vertical Connector Line for Mobile & Desktop */}
                {idx !== processSteps.length - 1 && (
                  <>
                    {/* Desktop Horizontal Line */}
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-100 z-0" />
                    {/* Mobile Vertical Line */}
                    <div className="md:hidden absolute top-16 left-1/2 w-[2px] h-full bg-gray-100 z-0" />
                  </>
                )}

                {/* Number Circle */}
                <div className={`w-16 h-16 rounded-full border-2 ${step.border} bg-white flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <div className={`text-2xl font-black ${step.color}`}>
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="z-10 bg-white px-4">
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px] mt-2">
                    {step.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Divider Line --- */}
        <div className="h-[1px] bg-gray-100 max-w-5xl mx-auto mb-28" />

        {/* --- Questions Section (FAQ) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...premiumTransition, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-16 text-center"
          >
            Questions?
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white border-2 ${activeFAQ === index ? 'border-blue-600 shadow-xl shadow-blue-50' : 'border-gray-50'} rounded-[24px] transition-all duration-300 overflow-hidden`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg md:text-[20px] font-bold transition-colors ${activeFAQ === index ? 'text-blue-600' : 'text-gray-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFAQ === index ? 'bg-blue-600 rotate-180' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
                    <ChevronDown size={20} className={activeFAQ === index ? 'text-white' : 'text-gray-400'} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="px-8 pb-10"
                    >
                      <p className="text-gray-500 text-[16px] md:text-[17px] font-medium leading-[1.8] border-t border-gray-50 pt-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default QuotingProcess;