import React from "react";
import { motion } from "framer-motion"; // Added motion

const Cardbulid = () => {
  // --- Standardized Premium Animations ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section className="w-full font-sans overflow-hidden">
      {/* Testimonials Section */}
      <div className="w-full bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              whileHover={{ y: -10 }}
              className="border border-gray-200 p-8 shadow-sm hover:shadow-xl rounded-2xl bg-white transition-all duration-300"
            >
              <p className="text-blue-600 text-xl mb-4">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <p className="text-base font-semibold py-2 text-gray-600 italic leading-relaxed">
                "The team transformed our outdated legacy system into a sleek, AI-powered platform. Efficiency increased by 200% in the first month."
              </p>
              <div className="flex gap-4 mt-6 items-center">
                <div className="w-12 h-12 rounded-full bg-green-400 text-black font-bold flex items-center justify-center shrink-0">
                  JD
                </div>
                <div>
                  <h1 className="text-sm font-bold leading-tight">
                    John Doe <br />
                    <span className="text-gray-400 font-normal">CTO, FinanceCorp</span>
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={premiumTransition}
              whileHover={{ y: -10 }}
              className="border border-gray-200 p-8 shadow-sm hover:shadow-xl rounded-2xl bg-white transition-all duration-300"
            >
              <p className="text-blue-600 text-xl mb-4">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <p className="text-base font-semibold py-2 text-gray-600 italic leading-relaxed">
                "Their understanding of both design and complex backend logic is rare. They didn't just build what we asked for, they improved upon it."
              </p>
              <div className="flex gap-4 mt-6 items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 text-black font-bold flex items-center justify-center shrink-0">
                  SS
                </div>
                <div>
                  <h1 className="text-sm font-bold leading-tight">
                    Sarah Smith <br />
                    <span className="text-gray-400 font-normal">Founder, StartUpX</span>
                  </h1>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-800 text-center py-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,rgba(0,0,0,1)_70%)]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Ready to Build Something <br className="hidden md:block" /> Extraordinary?
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-300 py-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Whether you need a custom web platform or an AI-driven solution, our team is ready to bring your vision to life.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 py-4 max-w-md mx-auto sm:max-w-none px-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-blue-600 rounded-xl text-lg px-8 py-4 hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-900/20"
            >
              Get an Estimate
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-gray-600/50 backdrop-blur-sm border border-gray-500 rounded-xl text-lg px-8 py-4 hover:bg-gray-600 transition-all font-semibold"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-sm text-gray-500 mt-10"
          >
            Trusted by 50+ innovative companies worldwide.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cardbulid;