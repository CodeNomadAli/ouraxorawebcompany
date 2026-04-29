import React from "react";
import { ShieldCheck, Copyright, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion"; // Added motion

const PricingDetails = () => {
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const faqs = [
    {
      question: "Are these prices fixed or estimates?",
      answer: "These are estimated price ranges. Final pricing depends on specific requirements, complexity, and customizations needed for your project."
    },
    {
      question: "What's included in the quoted price?",
      answer: "All quoted prices include development, testing, deployment, and post-launch support as specified in each plan."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes! You can upgrade your plan at any time during development. Downgrading may have limitations based on work already completed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, and PayPal. We typically work with a 30-40-30 payment structure."
    }
  ];

  return (
    <section className="w-full pb-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        {/* Main Estimate Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="flex flex-col lg:flex-row bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-20"
        >
          
          {/* Left Side - Details */}
          <div className="flex-1 p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-600/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-600/30 uppercase tracking-widest">
                Official Estimate
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                Rates Updated Today
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2">Custom Software Development</h2>
            <p className="text-slate-400 text-sm mb-10">Standard Plan <span className="text-slate-500">configuration</span></p>

            <div className="flex flex-wrap gap-12 mb-10 relative">
              <div className="z-10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Estimated Investment</p>
                <p className="text-4xl md:text-5xl font-extrabold text-white">$72 - $180</p>
              </div>
              <div className="z-10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Delivery Timeline</p>
                <p className="text-2xl md:text-3xl font-bold text-white">1-2 weeks</p>
              </div>
              {/* Decorative Animated Line under values */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-4 left-0 h-[1px] bg-gradient-to-r from-blue-600 to-transparent opacity-50"
              />
            </div>

            {/* Progress Bar - Animated */}
            <div className="mb-12">
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter text-slate-500 mb-3">
                <span>Initiation (30%)</span>
                <span>Development (40%)</span>
                <span>Launch (30%)</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full flex overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-blue-600 border-r border-slate-900"
                ></motion.div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                  className="h-full bg-blue-500 border-r border-slate-900"
                ></motion.div>
                <div className="h-full w-[30%] bg-slate-700"></div>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 italic">*Milestone-based payments. Your funds are secure at every step.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-800">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-800 rounded-lg text-blue-400"><Copyright size={20} /></div>
                <div>
                  <h4 className="text-sm font-bold">100% IP Ownership</h4>
                  <p className="text-xs text-slate-500">You own the code. No vendor lock-in.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-800 rounded-lg text-blue-400"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="text-sm font-bold">Mutual NDA Signed</h4>
                  <p className="text-xs text-slate-500">Your idea is legally protected.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-[400px] bg-slate-800/50 p-8 md:p-12 border-l border-slate-700/50 flex flex-col justify-center">
             <div className="relative">
                <div className="absolute -top-4 -right-4 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Secure Your Proposal</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Enter your email to receive this quote as a formal PDF. It includes a pre-signed Non-Disclosure Agreement.
                </p>

                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="axorawebsolution.com" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                  >
                    Get Official Quote
                  </motion.button>
                </div>

                <div className="mt-12">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold text-center mb-6">Trusted Infrastructure</p>
                  <div className="flex justify-center items-center gap-6 opacity-50 grayscale">
                     <span className="text-white font-bold text-lg italic">Stripe</span>
                     <span className="text-white font-bold text-xs border border-white px-1">ISO:27001</span>
                     <span className="text-white font-bold text-xs">GDPR</span>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={premiumTransition}
            className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...premiumTransition, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingDetails;