import React from "react";
import { Link } from "react-router-dom";

const Productsec = () => {
  return (
    <section className="w-full bg-blue-50">
      {/* Main Container - Standardized padding for 768px (sm:px-10) */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
          Is your product confusing your users?
        </h1>
        
        <p className="text-gray-600 text-base sm:text-lg font-medium mt-6 mb-8 max-w-2xl leading-relaxed">
          Let's fix that. Schedule a free 30-minute discovery call. We'll review your current 
          interface and identify quick wins.
        </p>

        <Link to="/contact">
          <button 
            type="button" 
            className="bg-blue-600 text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200 active:scale-95"
          >
            Book Discovery Call
          </button>
        </Link>

      </div>
    </section>
  );
};

export default Productsec;