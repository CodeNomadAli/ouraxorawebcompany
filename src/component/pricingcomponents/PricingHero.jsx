import React from "react";

const PricingHero = () => {
  return (
    <section className="w-full pt-40 pb-24 md:pt-48 md:pb-32 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-100/50 text-blue-600 shadow-sm">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider">Pricing Plans</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
          Ready to build something <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
            extraordinary?
          </span>
        </h1>
        
        <p className="mt-8 text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Choose a plan that fits your goals. From simple landing pages to complex 
          enterprise solutions, we've got you covered with pixel-perfect code.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;