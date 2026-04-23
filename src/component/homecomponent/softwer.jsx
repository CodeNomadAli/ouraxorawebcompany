import React from "react";
import { FaCode } from "react-icons/fa";

const Software = () => {
  return (
    // Max-w-7xl matches your Navbar and Hero section alignment
    <section className="w-full bg-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge - Clean & Centered */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm transition-transform hover:scale-105">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider">Our Expertise</span>
        </div>

        {/* Title - Responsive font sizes */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 flex flex-wrap items-center justify-center gap-3 text-gray-900 leading-tight">
          <FaCode className="text-blue-600 shrink-0" /> 
          <span>Expert Software</span>
          <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Solutions</span>
        </h1>

        {/* Description - Max-width for better readability */}
        <p className="text-base sm:text-lg md:text-xl font-medium mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          We craft stunning, modern, and scalable applications. From <span className="text-gray-900 font-bold">CRM & HRM Systems</span> to <span className="text-gray-900 font-bold">AI-Powered</span> tools, we elevate your business with high-quality code.
        </p>

      </div>
    </section>
  );
};

export default Software;