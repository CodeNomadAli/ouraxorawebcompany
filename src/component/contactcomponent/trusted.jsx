import React from "react";
import { FaMailBulk, FaMap, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion"; // Added motion

const Trusted = () => {
  // --- Animation Settings ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="w-full overflow-hidden">
      
      {/* 1. Trusted Brands */}
      <div className="bg-white text-center py-12">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-gray-400 uppercase tracking-widest"
          >
            Trusted by Engineering Teams at
          </motion.h4>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-300 font-bold text-xl sm:text-2xl py-8"
          >
            {["Google", "Microsoft", "Spotify", "Airbnb", "Stripe"].map((brand) => (
              <motion.h4 
                key={brand}
                variants={itemVariants}
                className="hover:text-gray-500 transition-colors cursor-default"
              >
                {brand}
              </motion.h4>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. Contact Cards */}
      <div className="bg-gray-50 w-full py-20 border-y border-gray-100">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          >
            
            {/* Email Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="w-full border text-center p-8 rounded-2xl shadow-xl shadow-gray-200/50 bg-white border-gray-100 transition-all"
            >
              <FaMailBulk className="text-blue-500 w-10 h-10 mx-auto" />
              <h1 className="text-xl font-bold pt-6 text-gray-900">Email Us</h1>
              <p className="text-sm text-gray-500 py-3">Best for detailed RFPs</p>
              <a href="mailto:axoraweb@gmail.com" className="inline-block">
                <h1 className="text-blue-600 font-bold hover:underline">
                  axoraweb@gmail.com
                </h1>
              </a>
            </motion.div>

            {/* Call Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="w-full border text-center p-8 rounded-2xl shadow-xl shadow-gray-200/50 bg-white border-gray-100 transition-all"
            >
              <FaPhone className="text-blue-500 w-10 h-10 mx-auto" />
              <h1 className="text-xl font-bold pt-6 text-gray-900">Call Us</h1>
              <p className="text-sm text-gray-500 py-3">Mon-Fri from 8am to 5pm</p>
              <div className="space-y-2">
                <a href="tel:+923245237429" className="block text-blue-600 font-bold hover:underline">
                  +92 324 5237429
                </a>
                <a href="tel:+923245237429" className="block text-blue-600 font-bold hover:underline">
                  +92 3245237429
                </a>
              </div>
            </motion.div>

            {/* HQ Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="w-full md:col-span-2 lg:col-span-1 border text-center p-8 rounded-2xl shadow-xl shadow-gray-200/50 bg-white border-gray-100 transition-all"
            >
              <FaMap className="text-blue-500 w-10 h-10 mx-auto" />
              <h1 className="text-xl font-bold pt-6 text-gray-900">Visit HQ</h1>
              <p className="text-sm text-gray-500 py-3">Software House</p>
              <h1 className="text-gray-700 font-bold">
                Pakistan, Lahore, DHA
              </h1>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* 3. Process Steps */}
      <div className="w-full bg-white py-20 px-4">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-20"
          >
            What Happens After You Click Send?
          </motion.h2>

          <div className="relative">
            {/* Desktop Connector Line Animation */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-0 origin-left"
            ></motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
            >
              {[
                { id: 1, title: "Internal Review", desc: "Our tech leads analyze your requirements.", color: "bg-[#0B1221]" },
                { id: 2, title: "Discovery Call", desc: "We meet to discuss scope and strategy.", color: "bg-[#0B1221]" },
                { id: 3, title: "Proposal", desc: "You receive a timeline and fixed-price quote.", color: "bg-[#0B1221]" },
                { id: 4, title: "Kickoff", desc: "We sign the contract and start coding.", color: "bg-blue-600" }
              ].map((step) => (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-xl mb-6 outline outline-offset-4 outline-white transition-transform group-hover:scale-110`}>
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Trusted;