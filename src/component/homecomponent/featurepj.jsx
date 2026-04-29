"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Featurepj = () => {
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
        staggerChildren: 0.3,
      },
    },
  };

  const staggerList = {
    visible: {
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="w-full bg-gray-50 pt-14 py-20 overflow-hidden font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Header Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-wider">Selected Work</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight">
          Featured <span className="text-blue-600 relative">
            Projects
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="absolute -bottom-1 left-0 h-[2px] bg-blue-200"
            />
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl font-normal mt-5 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Discover how we've helped businesses transform their digital presence. From <br className="hidden md:block" />
          seed-stage startups to enterprise giants.
        </motion.p>

        {/* Project 1: Billonary Club */}
        <div className="w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={premiumTransition}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src="/billanory (2).png"
                alt="Billonary Club"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={premiumTransition}
              viewport={{ once: true }}
              className="flex flex-col gap-4 justify-center"
            >
              <div className="flex gap-3 flex-wrap">
                {["Webflow", "SaaS", "B2B"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">{tag}</span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Billonary Club</h1>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tight">Financial SaaS Platform</p>

              <p className="text-base sm:text-lg text-gray-600 py-2 leading-relaxed">
                We engineered a robust financial supply chain platform that transformed how users manage high-volume transactions. By streamlining complex user flows and optimizing architecture, we helped secure significant funding.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">Key Outcomes</h2>
              <motion.div variants={staggerList} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-3 space-y-3">
                {["300% increase in user conversions", "$12.5M in funding raised", "Dashboard load times cut by 50%"].map((outcome, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-700 font-semibold">{outcome}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Project 2: Ecommerce Solutions */}
        <div className="w-full py-16 lg:py-24 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={premiumTransition}
              viewport={{ once: true }}
              className="flex flex-col gap-4 justify-center order-2 lg:order-1"
            >
              <div className="flex gap-3 flex-wrap">
                {["E-Commerce", "UI/UX"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">{tag}</span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Ecommerce Solutions</h1>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tight">Digital Storefront Transformation</p>

              <p className="text-base sm:text-lg text-gray-600 py-2 leading-relaxed">
                A modern, high-performance e-commerce experience featuring advanced WebGL product interactions. Designed to position the brand as an industry innovator.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">Key Outcomes</h2>
              <motion.div variants={staggerList} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-3 space-y-3">
                {["200% growth in inbound leads", "40% increase in session duration"].map((outcome, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-700 font-semibold">{outcome}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={premiumTransition}
              viewport={{ once: true }}
              className="order-1 lg:order-2 w-full"
            >
              <img
                src="/ecommerce.png"
                alt="Ecommerce Solutions"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              />
            </motion.div>
          </div>
        </div>

        {/* Project 3: Video Player / Media App */}
        <div className="w-full py-16 lg:py-24 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={premiumTransition}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src="/video-player.jpg"
                alt="Video Player"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={premiumTransition}
              viewport={{ once: true }}
              className="flex flex-col gap-4 justify-center"
            >
              <div className="flex gap-3 flex-wrap">
                {["Growth", "Media", "High-Performance"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">{tag}</span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Video Player</h1>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tight">High-Conversion Experience</p>

              <p className="text-base sm:text-lg text-gray-600 py-2 leading-relaxed">
                A scientifically optimized landing page designed to capture early adopters. Driving massive growth by clarifying the value proposition and simplifying sign-ups.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">Key Outcomes</h2>
              <motion.div variants={staggerList} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-3 space-y-3">
                {["85% Conversion Rate on ad traffic", "Secured crucial seed funding"].map((outcome, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-700 font-semibold">{outcome}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div variants={itemVariants} className="mt-10 flex justify-center pb-10">
          <Link to="/portfolio">
            <button className="text-white bg-blue-600 font-bold rounded-2xl text-lg px-8 py-4 flex items-center hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-100">
              View All Projects <span className="ml-3 font-bold">→</span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Featurepj;