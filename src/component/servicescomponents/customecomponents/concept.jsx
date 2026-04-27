"use client";

import React from "react";
import { motion } from "framer-motion";

const Concept = () => {
  // --- Snappy & Professional Configuration ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We dig deep into your business logic. We define user personas, technical requirements, and the roadmap.",
      number: "01",
      active: true,
    },
    {
      title: "Architecture & Design",
      description:
        "We architect the database, select the tech stack, and design high-fidelity UI/UX prototypes. No code is written until the blueprint is perfect.",
      number: "02",
    },
    {
      title: "Agile Development",
      description:
        "Our engineers work in two-week sprints. You get regular updates and demos, ensuring the software evolves exactly as you envisioned.",
      number: "03",
    },
    {
      title: "QA & Deployment",
      description:
        "Rigorous automated and manual testing ensures stability. Once approved, we manage the seamless deployment to your cloud infrastructure.",
      number: "04",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="w-full text-center px-4"
        >
          <h1 className="text-sm text-blue-600 font-bold uppercase tracking-widest">Our Methodology</h1>
          <h2 className="text-4xl md:text-5xl font-bold py-4 text-slate-900">
            From Concept to <span className="text-blue-700">Code</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            We follow a rigorous, agile-driven process to ensure your custom software
            is delivered on time, on budget, and bug-free.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative py-20 mt-10">
          
          {/* Vertical Line Animation */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-10 md:left-1/2 h-full w-0.5 bg-gray-200 md:-translate-x-1/2 z-0"
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 last:mb-0"
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={premiumTransition}
                  className={`
                    pl-20
                    md:pl-0
                    relative z-10
                    ${
                      isEven
                        ? "md:text-right md:pr-20"
                        : "md:col-start-2 md:text-left md:pl-20"
                    }
                  `}
                >
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </motion.div>

                {/* Number Marker */}
                <div
                  className="
                    absolute top-0
                    left-10 md:left-1/2
                    -translate-x-1/2
                    z-20
                  "
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...premiumTransition, delay: 0.3 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-xl transition-transform hover:scale-110 duration-300 ${
                      step.active
                        ? "bg-blue-600 text-white ring-4 ring-blue-100"
                        : "bg-white text-slate-400 border-2 border-gray-200"
                    }`}
                  >
                    {step.number}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Concept;