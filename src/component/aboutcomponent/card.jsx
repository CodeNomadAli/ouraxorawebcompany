"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// --- Standardized Number Counter Sub-Component ---
const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: duration, ease: [0.22, 1, 0.36, 1] });
    }
  }, [isInView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Cardabout = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 1.2,
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

  return (
    <section className="w-full font-sans overflow-hidden">
      
      {/* 1. Features Cards */}
      <div className="w-full bg-gray-50 py-12 md:py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="w-full border-t-[4px] border-t-red-500 p-8 shadow hover:shadow-xl rounded-xl bg-white transition-all">
              <h1 className="text-xl font-bold text-gray-900">Radical Transparency</h1>
              <p className="text-gray-700 mt-3 text-base">
                No hidden fees. No tech jargon used to confuse you. You have full access to our project boards and code repositories.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="w-full border-t-[4px] border-t-blue-500 p-8 shadow hover:shadow-xl rounded-xl bg-white transition-all">
              <h1 className="text-xl font-bold text-gray-900">Innovation First</h1>
              <p className="text-gray-700 mt-3 text-base">
                We don't use old tech. We leverage the latest in AI, React, and Laravel to give you a competitive advantage.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="w-full md:col-span-2 lg:col-span-1 border-t-[4px] border-t-yellow-200 p-8 shadow hover:shadow-xl rounded-xl bg-white transition-all">
              <h1 className="text-xl font-bold text-gray-900">Results Obsessed</h1>
              <p className="text-gray-700 mt-3 text-base">
                We care about ROI, User Retention, and Scalability. If it doesn't grow your business, we don't build it.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* 2. Client Testimonials */}
      <div className="w-full bg-gray-50 py-12 md:py-16 border-t border-gray-200">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h4 className="text-blue-600 font-bold uppercase text-sm">Social Proof</h4>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "James L.", role: "CTO", initial: "J", text: "They didn't just build a website; they built a revenue machine. Our conversions doubled." },
              { name: "David K.", role: "Founder", initial: "D", text: "Professional, transparent, and insanely talented. Best agency experience." },
              { name: "Sophie B.", role: "Product Owner", initial: "S", text: "Their design team has a gift for making complex data look simple and beautiful." }
            ].map((client, i) => (
              <motion.div key={i} variants={itemVariants} className={`w-full p-6 shadow-sm hover:shadow-xl rounded-xl bg-white border border-gray-100 transition-all ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <p className="text-blue-600 text-lg mb-3">★★★★★</p>
                <p className="text-gray-600 italic text-sm sm:text-base">"{client.text}"</p>
                <div className="flex gap-3 mt-6 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-200 text-blue-700 font-bold flex items-center justify-center">
                    {client.initial}
                  </div>
                  <div>
                    <h1 className="font-bold text-gray-900 text-sm">{client.name}</h1>
                    <p className="text-xs text-gray-400">{client.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. Stats Section with Increase Animation */}
      <div className="w-full py-12 md:py-20 border-y border-gray-200">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
                <Counter value={5} />+
              </h1>
              <p className="mt-2 font-bold text-gray-600 text-sm">Years Experience</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
                <Counter value={12} />
              </h1>
              <p className="mt-2 font-bold text-gray-600 text-sm">Countries Served</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
                $<Counter value={50} />M+
              </h1>
              <p className="mt-2 font-bold text-gray-600 text-sm">Client Revenue</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
                <Counter value={100} />%
              </h1>
              <p className="mt-2 font-bold text-gray-600 text-sm">Delivery Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 4. CTA Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={premiumTransition}
        className="w-full bg-gradient-to-tr from-blue-600 via-black to-red-600 py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            Not Ready to Start a Project?
          </h1>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Join 5,000+ CTOs and Founders who get our weekly insights on AI trends and scalable architecture.
          </p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email work..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-500/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              Get the Guide
            </motion.button>
          </div>
          <p className="mt-6 text-blue-500 font-bold">
            Plus, get our "2025 Tech Stack Audit Checklist" for free.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Cardabout;