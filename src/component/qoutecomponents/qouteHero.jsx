"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, ShieldCheck, X } from "lucide-react";

const QuoteHero = () => {
  const [file, setFile] = useState(null);

  const premiumTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  // File Upload Handler
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-20 font-sans min-h-screen">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 py-16">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl md:text-5xl font-black  text-gray-900 tracking-tight mb-4"
          >
            Start Your <span className="text-blue-600">Transformation</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeInUp}
            className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium"
          >
            Tell us about your vision. We’ll provide a detailed quote within 24 hours.
          </motion.p>
        </div>

        {/* Main Grid: items-start zaroori hai sticky ke liye */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative">
          
          {/* Left Side (Scrollable) */}
          <motion.div 
            initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeInUp}
            className="lg:col-span-2 bg-gray-10 border border-gray-200 shadow-md rounded-[2.5rem] p-8 md:p-12 shadow-sm"
          >
            <form className="space-y-12">
               {/* 1. Project Type */}
               <div>
                <label className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 block">1. What are we building?</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Custom Software", "Mobile App", "AI Solution", "Website", "UI/UX Design", "Consulting"].map((item) => (
                    <button key={item} type="button" className="py-4 px-2 rounded-2xl border border-gray-200 bg-white text-gray-700 font-bold text-sm hover:border-blue-500 hover:text-blue-600 transition-all">
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Scope & Constraints */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-blue-600 block">Estimated Budget</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Select Range</option>
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-blue-600 block">Target Timeline</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Select Timeline</option>
                    <option>1-3 Months</option>
                    <option>3-6 Months</option>
                  </select>
                </div>
              </div>

              {/* 3. Description & File Attachment */}
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-blue-600 block">Project Description</label>
                <textarea 
                  placeholder="Describe your core features..."
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-gray-700 h-48 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                ></textarea>
                
                {/* File Attachment Area */}
                <div className="relative group">
                  <input 
                    type="file" 
                    id="file-upload"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer z-20"
                  />
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 bg-white group-hover:border-blue-400 transition-all">
                    {file ? (
                      <div className="flex items-center gap-3 text-blue-600 font-bold">
                        <Paperclip size={20} />
                        <span>{file.name}</span>
                        <button type="button" onClick={() => setFile(null)} className="text-red-500 hover:text-red-700 z-30">
                          <X size={18} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Paperclip size={20} className="mb-2 group-hover:text-blue-500" />
                        <span className="text-sm font-bold group-hover:text-blue-500 text-center">Attach RFP or Specs (PDF, DOCX up to 10MB)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 pt-4 pb-10">
                <label className="text-xs font-black uppercase tracking-widest text-blue-600 block">4. Contact Information</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="email" placeholder="Work Email" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <input type="text" placeholder="Company Name" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck size={18} /> Included Mutual NDA Protection
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-100 transition-all"
                >
                  Request Quote <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Sidebar (Sticky) */}
          <div className="lg:sticky lg:top-24 space-y-8 self-start"> 
            <motion.div 
               initial="hidden" animate="visible" transition={{ delay: 0.5 }} variants={fadeInUp}
               className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-8">What You Get</h4>
              <ul className="space-y-8">
                {[
                  { id: 1, t: "Technical Breakdown", d: "Detailed architecture & stack suggestions." },
                  { id: 2, t: "Fixed Timeline", d: "Phase-by-phase delivery schedule." },
                  { id: 3, t: "Precise Investment", d: "Transparent pricing. No hidden fees." }
                ].map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[11px] font-black">{item.id}</span>
                    <div>
                      <p className="font-bold text-sm tracking-wide">{item.t}</p>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Testimonial */}
            <motion.div 
              initial="hidden" animate="visible" transition={{ delay: 0.6 }} variants={fadeInUp}
              className="bg-blue-50/50 border border-blue-100 rounded-[2.5rem] p-10"
            >
              <div className="flex text-yellow-400 mb-6">{"★★★★★"}</div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-8">
                "The detailed quote they provided gave us the confidence to pitch to our investors. Professional from day one."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-base text-gray-900">Mark T.</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">CEO @ TechFlow</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteHero;