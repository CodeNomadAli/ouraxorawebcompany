"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  // Animation for individual FAQ cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="border border-gray-200 rounded-2xl mb-4 w-full overflow-hidden transition-all duration-300 bg-white hover:border-blue-200 shadow-sm"
    >
      {/* Header */}
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

      {/* Body with Framer Motion for height animation */}
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

const FAQ = () => {
  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-gray-50 w-full py-20 overflow-hidden font-sans">

      {/* Main Container - Aligned for 1700px ultra-wide */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >

        {/* Badge */}
        <motion.div variants={headerVariants} className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-wider">Common Queries</span>
        </motion.div>

        <motion.h1 variants={headerVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold py-5 text-gray-900 text-center leading-tight">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </motion.h1>

        <motion.p variants={headerVariants} className="text-base sm:text-lg md:text-xl max-w-3xl mb-12 text-gray-600 text-center leading-relaxed">
          Everything you need to know about our development process, pricing, and support.
        </motion.p>

        {/* FAQ Items Grid */}
        <div className="w-full max-w-4xl py-6">
          <FAQItem
            question="1. What type of applications do you develop?"
            answer="We specialize in crafting web, mobile, and desktop applications, including custom CRM, HRM, and RSM systems. Our solutions are tailored to your business needs, ensuring scalability, user-focused design, and seamless performance across platforms."
          />
          <FAQItem
            question="2. How long does it take to develop a custom application?"
            answer="The timeline varies based on project complexity and requirements. A simple application may take 4-8 weeks, while complex systems like CRM or HRM can take 3-6 months. We provide a detailed timeline during our initial consultation."
          />
          <FAQItem
            question="3. Do you offer support and maintenance?"
            answer="Yes, we provide comprehensive support and maintenance packages, including regular updates, performance optimization, security monitoring, and technical support to ensure your application remains robust and efficient."
          />
          <FAQItem
            question="4. Can you modernize or upgrade my existing application?"
            answer="Absolutely. We specialize in analyzing and upgrading existing applications to improve functionality, scalability, and user experience while aligning with your current business goals and brand identity."
          />
          <FAQItem
            question="5. What is included in your software development services?"
            answer="Our services include custom design and development, responsive and scalable architecture, integration with CRM, HRM, or RSM systems, performance optimization, cross-platform compatibility, and post-launch support with training for your team."
          />
          <FAQItem
            question="6. How much does it cost to develop a custom application?"
            answer="Costs depend on the project’s scope and complexity. Basic applications start at $5,000, while advanced systems like CRM or HRM may range from $20,000 to $100,000+. Contact us for a tailored quote based on your needs."
          />
        </div>

        {/* Call to Action Box */}
        <motion.div
          variants={headerVariants}
          className="w-full max-w-5xl mt-16 px-4"
        >
          <div className="w-full bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-8 shadow-2xl relative overflow-hidden group">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="text-center md:text-left z-10">
              <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
                Still have questions?
              </h2>
              <p className="text-gray-400 mt-2 md:mt-3 text-sm md:text-base max-w-[280px] md:max-w-none mx-auto md:mx-0">
                Our technical team is ready to help you define your scope.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="z-10 w-full md:w-auto"
            >
              <a target="_blank" rel="noreferrer" href="https://calendly.com/axoraweb/30min">
                <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
                  Chat with an Expert
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default FAQ;