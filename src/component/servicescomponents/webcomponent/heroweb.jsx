import React from "react";
import { Link } from "react-router-dom";

const Heroweb = () => {
  return (
    <section
      className="w-full mt-20 py-28 text-center justify-items-center bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bgweb.jpg)' }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-gray-800 text-blue-500 shadow-sm mx-auto">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="text-sm font-medium">
          Now accepting new projects for Q1
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold text-white py-5 max-w-4xl mx-auto">
        We Don't Just Write Code. <br />{" "}
        <span className="text-blue-300">We Engineer Growth.</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 py-4 text-lg sm:text-xl max-w-3xl mx-auto">
        Your website is your best salesperson. We build{" "}
        <b>lightning-fast, custom websites</b> designed to convert visitors
        into revenue. No templates, no bloat.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
        <Link to="/contact">
          <button className="text-white bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm px-6 py-3 transition">
            View Pricing
          </button>
        </Link>
        <Link to="/portfolio">
          <button className="text-white bg-gray-600 hover:bg-gray-500 rounded-2xl text-sm px-6 py-3 transition">
            View Our Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Heroweb;
