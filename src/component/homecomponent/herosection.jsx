import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiZap, FiGrid } from "react-icons/fi";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <section className="w-full bg-gray-50 pt-24 md:pt-32 pb-12 lg:pb-20 xl:pb-32 overflow-hidden font-sans">
      {/* 1700px Alignment Logic maintained */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Changed md:flex-row to lg:flex-row to keep it full width on 768px and 1024px */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content - Now full width until lg (1024px) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm w-max">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium">Custom Software Solutions</span>
            </div>

            <div className="mt-6 flex flex-col items-center lg:items-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-[1.1] text-gray-900">
                Expert <br className="hidden sm:block" /> Development for <br className="hidden sm:block" />
                <span className="text-blue-600">Complex Apps</span>
              </h1>
              <hr className="border-blue-400 border-2 mt-4 w-[260px] sm:w-[350px] md:w-[420px] rounded-full mx-auto lg:mx-0" />
            </div>

            <p className="text-base sm:text-lg mt-12 text-gray-700 max-w-xl leading-relaxed">
              We build scalable business systems that streamline your operations. Specializing in <b>CRM, HRM,</b> and <b>RSM Software.</b>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row mt-8 gap-5 items-center lg:items-start w-full sm:w-auto">
              <a target="_blank" href="https://calendly.com/axoraweb/30min" rel="noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto text-white bg-blue-600 rounded-xl text-lg px-7 py-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                  Book an Intro Call <span className="font-bold">→</span>
                </button>
              </a>

              <button className="flex items-center gap-3 group p-2 transition-transform hover:translate-x-1">
                <FaPlay className="text-3xl border-2 border-blue-700 p-2 rounded-full text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all" />
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-sm">View Projects</span>
              </button>
            </div>

            <hr className="mt-10 border-gray-200 w-full" />

            {/* Stats Section - Balanced for full width on 768px */}
            <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">300+</h2>
                <p className="text-[10px] sm:text-sm font-medium text-gray-500 mt-1 uppercase tracking-tight">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">500+</h2>
                <p className="text-[10px] sm:text-sm font-medium text-gray-500 mt-1 uppercase tracking-tight">Projects Done</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">5+</h2>
                <p className="text-[10px] sm:text-sm font-medium text-gray-500 mt-1 uppercase tracking-tight">Years Exp.</p>
              </div>
            </div>
          </div>


{/* Right Content - Full width on 768px/1024px */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2">
  <div className="relative w-full max-w-[480px] lg:max-w-[550px] md:max-w-full">
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6 }} 
      className="w-full bg-[#05070A] rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-800 flex flex-col relative z-20"
    >
      {/* Browser UI */}
      <div className="h-9 bg-[#0B0E14] flex items-center px-5 gap-1.5 border-b border-gray-800/50">
        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full"></div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[#11141C] px-3 py-0.5 rounded text-[8px] text-gray-500 border border-gray-800">
            dashboard.axoraweb.com
          </div>
        </div>
      </div>

      <div className="flex flex-1 min-h-[340px] sm:min-h-[400px]">
        {/* Sidebar */}
        <div className="w-[65px] sm:w-[150px] bg-[#05070A] border-r border-gray-800/50 p-4 flex flex-col items-center sm:items-start gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
            <span className="hidden sm:block text-white font-bold text-sm">Nexus</span>
          </div>
          <div className="flex items-center gap-3 bg-blue-900/20 text-blue-500 p-2.5 rounded-xl border border-blue-800/30 w-full justify-center sm:justify-start">
            <FiGrid className="text-xl" />
            <span className="hidden sm:block text-xs font-semibold">Dashboard</span>
          </div>
        </div>

        {/* Main Dashboard Area */}
        <div className="flex-1 bg-[#0B0E14] p-5 sm:p-7 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">Overview</h2>
            <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 overflow-hidden">
              <img src="/logo.jpg" alt="User Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#11141C] p-4 rounded-2xl border border-gray-800/50">
              <p className="text-[9px] text-gray-500 font-bold uppercase mb-1">Total Revenue</p>
              <p className="text-sm sm:text-lg font-bold text-white leading-none">$124,500</p>
              <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                <div className="w-[70%] h-full bg-blue-500"></div>
              </div>
            </div>
            <div className="bg-[#11141C] p-4 rounded-2xl border border-gray-800/50">
              <p className="text-[9px] text-gray-500 font-bold uppercase mb-1">New Leads</p>
              <p className="text-sm sm:text-lg font-bold text-white leading-none">+482</p>
              <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                <div className="w-[55%] h-full bg-green-500"></div>
              </div>
            </div>
          </div>

          {/* List Section (Active & Pending) */}
          <div className="bg-[#11141C] rounded-xl p-4 border border-gray-800/40 space-y-4">
            
            {/* 1. Active Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-900/30 flex items-center justify-center text-blue-500 text-[10px] font-bold">A</div>
                <div className="space-y-1.5">
                  <div className="w-24 h-1.5 bg-gray-300 rounded-full"></div>
                  <div className="w-14 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>
              <div className="bg-green-900/20 text-green-400 text-[8px] px-2 py-0.5 rounded font-bold border border-green-900/30">Active</div>
            </div>

            <hr className="border-gray-800/50" />

            {/* 2. Pending Row (Updated) */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-yellow-900/20 flex items-center justify-center text-yellow-500 text-[10px] font-bold">P</div>
                <div className="space-y-1.5">
                  <div className="w-20 h-1.5 bg-gray-700 rounded-full"></div>
                  <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
              <div className="bg-yellow-900/20 text-yellow-500 text-[8px] px-2 py-0.5 rounded font-bold border border-yellow-900/30">Pending</div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating Zap Badge */}
    <motion.div 
      animate={{ y: [0, -15, 0] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
      className="absolute -left-4 sm:-left-12 top-[50%] bg-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 z-30"
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
        <FiZap className="text-xl sm:text-2xl" />
      </div>
      <div>
        <p className="text-[8px] sm:text-[10px] uppercase text-gray-400 font-black tracking-widest leading-none mb-1">Performance</p>
        <p className="text-xs sm:text-base font-bold text-gray-900 whitespace-nowrap">Fast & Scalable</p>
      </div>
    </motion.div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;