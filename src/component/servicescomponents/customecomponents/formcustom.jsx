"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaMailBulk } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Formcustom = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.budget || !formData.message) {
      setSuccessMsg("❌ Please fill all required fields!");
      setTimeout(() => setSuccessMsg(""), 4000);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg("✅ Email received & sent successfully!");
        setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
      } else {
        setSuccessMsg("❌ Failed to send email!");
      }
    } catch (error) {
      setSuccessMsg("❌ Server error!");
    }
    setLoading(false);
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <section className="w-full bg-gray-50 overflow-hidden">
      {/* ✅ SUCCESS MESSAGE ANIMATION */}
      <AnimatePresence>
        {successMsg && (
          <motion.div 
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            className="fixed top-5 left-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-2xl z-[100] font-medium text-sm md:text-base whitespace-nowrap"
          >
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="w-full bg-white border border-gray-200 rounded-[2rem] md:rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row min-h-fit lg:min-h-[700px]">
            
            {/* LEFT SIDE - INFO */}
            <div className="relative lg:w-[400px] xl:w-[500px] bg-gray-900 p-6 md:p-12 flex flex-col justify-center">
              <span className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/20 to-transparent"></span>

              <div className="relative">
                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-blue-400 bg-blue-500/10 text-[10px] md:text-sm font-bold px-4 py-1.5 border border-blue-500/20 rounded-full mb-4 md:mb-6"
                >
                  Project Inquiry
                </motion.button>

                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Let's architect your <span className="text-blue-500">solution.</span>
                </h1>

                <p className="text-gray-400 py-4 md:py-6 text-sm md:text-lg leading-relaxed">
                  Fill out the form to schedule a technical consultation. We respond within 2 hours.
                </p>

                <div className="space-y-4 md:space-y-8 pt-2">
                  {[
                    { icon: <FaCheckCircle />, title: "NDA Protected", desc: "Your idea is safe." },
                    { icon: <FaRegMessage />, title: "Fast Response", desc: "Quick replies." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.2 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 text-blue-500">
                        {item.icon}
                      </div>
                      <div>
                        <h1 className="font-bold text-white text-base md:text-lg">{item.title}</h1>
                        <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 md:mt-16 pt-6 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Direct Contact</p>
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <FaMailBulk className="text-white w-4 h-4" />
                    </div>
                    <h1 className="text-white text-sm md:text-xl font-bold group-hover:text-blue-400 transition-colors">
                      axoraweb@gmail.com
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex-1 w-full p-6 md:p-12 lg:p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-3xl mx-auto lg:mx-0">
                
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label className="block text-slate-700 font-bold mb-1.5 text-sm md:text-base" htmlFor="name">Name</label>
                  <input
                    type="text" id="name" value={formData.name} onChange={handleChange}
                    placeholder="Ali Hamza"
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm md:text-base outline-none transition-all"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="block text-slate-700 font-bold mb-1.5 text-sm md:text-base" htmlFor="email">Work Email</label>
                    <input
                      type="email" id="email" value={formData.email} onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm md:text-base outline-none transition-all"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <label className="block text-slate-700 font-bold mb-1.5 text-sm md:text-base" htmlFor="phone">Phone (Optional)</label>
                    <input
                      type="tel" id="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm md:text-base outline-none transition-all"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <label className="block text-slate-700 font-bold mb-1.5 text-sm md:text-base" htmlFor="service">Service</label>
                    <select
                      id="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm md:text-base outline-none appearance-none transition-all"
                    >
                      <option value="">Select service</option>
                      <option value="web">Web Development</option>
                      <option value="ai">AI Solutions</option>
                      <option value="app">Mobile App</option>
                    </select>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <label className="block text-slate-700 font-bold mb-1.5 text-sm md:text-base" htmlFor="budget">Budget</label>
                    <input
                      type="text" id="budget" value={formData.budget} onChange={handleChange}
                      placeholder="e.g. $500 - $1000"
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm md:text-base outline-none transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <label className="block text-slate-700 font-bold mb-1.5 text-sm md:text-base" htmlFor="message">Project Details</label>
                  <textarea
                    id="message" value={formData.message} onChange={handleChange}
                    placeholder="Briefly describe your project..."
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm md:text-base outline-none transition-all"
                    rows="3"
                  ></textarea>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-2 md:pt-4"
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-bold py-4 md:py-5 px-6 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all duration-300 disabled:opacity-60 shadow-lg shadow-blue-200 text-sm md:text-base"
                  >
                    {loading ? "Sending..." : "Request Quote"}
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formcustom;