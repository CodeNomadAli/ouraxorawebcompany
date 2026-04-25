import React from "react";
import { Link } from "react-router-dom";

const Transformation = () => {
  return (
    <section className="w-full py-20 overflow-hidden">
      {/* Master Width Container - 1550px Alignment */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Original Font Sizes Kept */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold py-3 text-slate-900">
          Start your transformation.
        </h1>
        
        <p className="text-gray-500 text-sm sm:text-base md:text-lg py-3 max-w-2xl mx-auto">
          Join the forward-thinking brands that trust us with their digital commerce strategy.
        </p>

        <div className="mt-6">
          <Link to="/contact">
            <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95">
              Book a Free Consultation
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-400 py-5">
          No sales pressure. Just a technical discovery call.
        </p>
      </div>
    </section>
  );
};

export default Transformation;