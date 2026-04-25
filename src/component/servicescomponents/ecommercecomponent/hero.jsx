import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full mt-16 overflow-hidden">
      {/* Hero Header - 1550px Alignment */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white py-28">
          <button className="text-blue-600 bg-gray-50 text-sm h-8 px-4 border border-gray-100 rounded-2xl mb-4">
            🛍️ Enterprise E-Commerce Solutions
          </button>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4">
            Commerce without <br />
            <span className="text-blue-600">complexity.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-xl text-gray-500 py-3 max-w-4xl mx-auto">
            We build scalable, high-performance online stores that seamlessly integrate <br className="hidden md:block" />
            with your inventory, payments, and logistics.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 py-6">
            <Link to="/contact">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-500 transition-colors w-full sm:w-auto font-medium">
                Discuss Your Project
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="bg-white text-black py-3 px-6 rounded-2xl hover:bg-slate-50 border border-gray-200 transition-colors w-full sm:w-auto font-medium">
                View Capabilities
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Storefront Visual - Full Width Alignment with Master Container */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-2 border-gray-100 rounded-lg bg-gray-50 shadow-xl h-[450px] w-full flex flex-col items-center justify-center">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
            <FaBagShopping className="w-7 h-7 text-blue-500" />
          </div>
          <h1 className="font-bold text-2xl py-2">Your Storefront</h1>
          <p className="text-gray-400">Optimized for Conversion</p>
        </div>
      </div>

      {/* Features - Full Width Alignment with Master Container */}
      <div className="w-full bg-gray-50 py-16 mt-8">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
                <FaBolt className="w-5 h-5 text-blue-500" />
              </div>
              <h1 className="text-xl font-bold py-2">Lightning Fast Performance</h1>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                Slow sites lose sales. We engineer lightweight front-ends using modern frameworks to ensure sub-second load times.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-5 h-5 text-blue-500" />
              </div>
              <h1 className="text-xl font-bold py-2">Seamless Integrations</h1>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                We connect your store to your ERP, CRM, and shipping providers, automating busywork so you can focus on growth.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
                <FaPhone className="w-5 h-5 text-blue-500" />
              </div>
              <h1 className="text-xl font-bold py-2">Mobile-First Design</h1>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                With 70% of traffic coming from phones, we design for thumb-scroll first, ensuring a frictionless mobile checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;