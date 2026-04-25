import React from "react";
import { Link } from "react-router-dom";

const Heroweb = () => {
  return (
    <section
      className="w-full mt-20 py-28 text-center bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bgweb.jpg)' }}
    >
      {/* Width Fix Wrapper */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-gray-800 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-sm font-medium">
            Now accepting new projects for Q1
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-white py-5 max-w-4xl mx-auto leading-tight">
          We Don't Just Write Code. <br />{" "}
          <span className="text-blue-300">We Engineer Growth.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 py-4 text-lg sm:text-xl max-w-3xl mx-auto">
          Your website is your best salesperson. We build{" "}
          <span className="text-white font-bold">lightning-fast, custom websites</span> designed to convert visitors
          into revenue. No templates, no bloat.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
          <Link to="/contact">
            <button className="w-full sm:w-auto text-white bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm px-8 py-3.5 transition font-bold shadow-lg shadow-blue-900/20">
              View Pricing
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="w-full sm:w-auto text-white bg-gray-600 hover:bg-gray-500 rounded-2xl text-sm px-8 py-3.5 transition font-bold">
              View Our Work
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Heroweb;