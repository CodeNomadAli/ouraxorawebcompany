import React, { useState } from "react";
import { FaShieldAlt, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Added motion

const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  // Animation variants for staggered list
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="border border-gray-200 rounded-2xl mb-4 w-full overflow-hidden transition-all duration-300 bg-white hover:border-blue-200 shadow-sm"
    >
      <button
        className="w-full text-left px-6 py-5 bg-white text-gray-900 font-bold flex justify-between items-center focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base md:text-lg">{question}</span>
        <span className={`bg-blue-50 text-blue-600 p-2 rounded-full transition-transform duration-500 ${open ? "rotate-180 bg-blue-600 text-white" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Corented = () => {
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="w-full overflow-hidden">
      
      {/* 1. Intellectual Property Section */}
      <div className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="w-full max-w-[1000px] bg-gray-900 rounded-2xl p-8 sm:p-14 shadow-2xl shadow-blue-900/10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div 
                initial={{ rotate: -15, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, ...premiumTransition }}
                className="flex-shrink-0"
              >
                <div className="flex items-center justify-center w-24 h-24 bg-blue-500/10 rounded-[30px] border border-blue-500/20">
                  <FaShieldAlt className="text-blue-500 w-12 h-12" />
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Concerned about Intellectual Property?
                </h1>
                <p className="text-base text-gray-400 py-4 leading-relaxed">
                  We are a US-registered entity. We provide a signed Non-Disclosure Agreement (NDA)
                  before our first call. You own 100% of the code we write.
                </p>
                <motion.h3 
                  whileHover={{ x: 10 }}
                  className="text-blue-500 font-bold py-2 hover:text-white cursor-pointer transition-colors inline-block"
                >
                  <u className="decoration-blue-500/50 underline-offset-4">Download our Standard NDA Template</u>
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Testimonial Section */}
      <div className="w-full bg-white py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <FaQuoteLeft className="text-5xl sm:text-7xl text-blue-100 mx-auto mb-6" />
          </motion.div>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold py-3 leading-tight max-w-4xl mx-auto text-slate-900">
            "They were the only agency that actually read our brief before the first meeting. The project was delivered 2 weeks early and under budget."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex justify-center items-center font-bold text-xl text-blue-700 border-2 border-blue-100 shadow-sm">
              DS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-xl text-slate-900">David Stevenson</h1>
              <p className="text-gray-500 font-medium">CTO</p>
            </div>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-200" />

      {/* 3. FAQ Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900"
          >
            Common Questions
          </motion.h1>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="w-full max-w-3xl mx-auto"
          >
            <FAQItem
              question="What is your typical project minimum?"
              answer="Our typical engagements start at $5,000 for small components or MVP planning. Full-scale development projects usually range from $15,000 to $100,000+."
            />
            <FAQItem
              question="Do you provide post-launch support?"
              answer="Yes. All our plans include a warranty period (1-6 months). After that, we offer retainer packages for updates, server maintenance, and new features."
            />
            <FAQItem
              question="How fast can you start?"
              answer="Depending on our current load, we can usually kickoff discovery within 2-3 business days after the contract is signed."
            />
          </motion.div>
        </div>
      </div>

      {/* 4. CTA Section */}
      <div className="w-full bg-white text-center py-20 border-t border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Hate filling out forms?</h1>
          <p className="text-gray-600 py-4 text-base sm:text-lg max-w-xl mx-auto">
            Skip the email tag. Book a 15-minute intro call directly on our calendar.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank" 
            href="https://calendly.com/axoraweb/30min" 
            rel="noreferrer" 
            className="inline-block mt-4"
          >
            <button className="border-2 border-slate-300 px-8 py-4 rounded-2xl font-bold text-slate-700 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50/50 transition-all duration-300 shadow-sm">
              Book a Meeting via Calendly
            </button>
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
};

export default Corented;