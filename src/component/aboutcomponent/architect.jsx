import React from "react";
import { Link } from "react-router-dom";

const Architecture = () => {
  return (
    <section className="w-full bg-gray-50 text-center justify-center px-4 sm:px-6 md:px-[100px] py-12 sm:py-16 md:py-24 mt-24">
      
      <div className="inline-flex items-center gap-2 mt-4 px-3 sm:px-5 py-1 sm:py-2 rounded-full border border-gray-100 bg-white text-gray-800 shadow-sm text-xs sm:text-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="font-medium">Established 2018 • 150+ Projects Shipped</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-6 sm:py-8 md:py-8 leading-snug sm:leading-snug md:leading-tight">
        We Are The Architects of <br />
        <span className="text-blue-700">Digital Intelligence</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed">
        More than just a software agency. We are your strategic partner in navigating the <br className="block sm:hidden" />
        intersection of stunning Web Design and cutting-edge Artificial Intelligence.
      </p>

      <h4 className="text-xs sm:text-sm md:text-sm text-gray-500 py-6 sm:py-8 md:py-9">
        Trusted by innovators at
      </h4>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-10 text-gray-400 font-bold text-base sm:text-lg md:text-xl">
        <h4>Google Cloud</h4>
        <h4>AWS Partner</h4>
        <h4>Shopify Plus</h4>
        <h4>Stripe</h4>
        <h4>Microsoft Azure</h4>
      </div>
    </section>
  );
};

export default Architecture;
