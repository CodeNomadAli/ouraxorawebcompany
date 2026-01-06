import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full mt-16">
      {/* Hero Header */}
      <div className="px-4 sm:px-8 md:px-[100px] text-center bg-white py-28">
        <button className="text-blue-600 bg-gray-50 text-sm h-8 px-4 border border-gray-100 rounded-2xl">
          🛍️ Enterprise E-Commerce Solutions
        </button>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4">
          Commerce without <br />
          <span className="text-blue-600">complexity.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-xl text-gray-500 py-3">
          We build scalable, high-performance online stores that seamlessly integrate <br />
          with your inventory, payments, and logistics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-6">
          <Link to="/contact">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-500 transition-colors">
              Discuss Your Project
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="bg-white text-black py-3 px-6 rounded-2xl hover:bg-slate-50 border border-gray-200 transition-colors">
              View Capabilities
            </button>
          </Link>
        </div>
      </div>

      {/* Storefront Visual */}
      <div className="w-full px-4 sm:px-8 md:px-[150px] py-12">
        <div className="border-2 border-gray-100 rounded-lg bg-gray-50 shadow-xl h-[450px] w-full flex flex-col items-center justify-center">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
            <FaBagShopping className="w-7 h-7 text-blue-500" />
          </div>
          <h1 className="font-bold text-2xl py-2">Your Storefront</h1>
          <p className="text-gray-400">Optimized for Conversion</p>
        </div>
      </div>

      {/* Features */}
      <div className="w-full bg-gray-50 px-4 sm:px-8 md:px-[100px] py-12 mt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
              <FaBolt className="w-5 h-5 text-blue-500" />
            </div>
            <h1 className="text-xl font-bold py-2">Lightning Fast Performance</h1>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Slow sites lose sales. We engineer lightweight front-ends using modern frameworks to ensure sub-second load times.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="w-5 h-5 text-blue-500" />
            </div>
            <h1 className="text-xl font-bold py-2">Seamless Integrations</h1>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              We connect your store to your ERP, CRM, and shipping providers, automating busywork so you can focus on growth.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
              <FaPhone className="w-5 h-5 text-blue-500" />
            </div>
            <h1 className="text-xl font-bold py-2">Mobile-First Design</h1>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              With 70% of traffic coming from phones, we design for thumb-scroll first, ensuring a frictionless mobile checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
