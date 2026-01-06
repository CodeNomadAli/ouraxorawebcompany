import React from "react";
import { FaCheck } from "react-icons/fa";

const Transformation = () => {
  return (
    <section className="w-full">
      {/* Transformation Gallery */}
      <div className="w-full px-4 sm:px-8 md:px-[100px] py-16 bg-gray-50">
        <h2 className="text-sm font-bold text-center text-blue-600">Visual Evidence</h2>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center py-3">
          Transformation Gallery
        </h1>
        <p className="text-sm sm:text-base text-gray-500 text-center font-medium">
          Hover over the images to see the transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-7 py-16">
          {/* Card 1 */}
          <div className="w-full group">
            <div className="relative w-full h-72 overflow-hidden rounded-xl">
              <img
                src="/beforegr.jpg"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <img
                src="/aftergr.jpg"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h1 className="text-2xl font-bold py-4">FinTech Analytics Platform</h1>
            <p className="text-sm text-gray-500">
              We transformed a complex manual spreadsheet process into a real-time, React-based
              <span className="text-blue-700"> Reduced user error rate by 45%.</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full group">
            <div className="relative w-full h-72 overflow-hidden rounded-xl">
              <img
                src="/ecommerce1.jpg"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <img
                src="/ecommerce2.jpg"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h1 className="text-2xl font-bold py-4">E-Commerce Checkout Flow</h1>
            <p className="text-sm text-gray-500">
              Reimagined a 5-page web form into a seamless 3-step mobile experience.
              <span className="text-blue-700"> Increased cart completion by 22%.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="text-center py-14">
        <h2 className="text-3xl font-bold">Clear Design Pricing</h2>
        <p className="text-gray-500 py-4">
          Whether you need a quick audit or a full product overhaul.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-[100px] py-16 justify-center">
        {/* Card 1 */}
        <div className="w-full max-w-[370px] p-8 border border-gray-100 rounded-2xl bg-white shadow-lg mx-auto">
          <h3 className="font-bold text-xl">UX Audit</h3>
          <p className="text-xs text-gray-400 py-3">For existing products.</p>
          <h2 className="text-4xl font-bold py-4">$1,500</h2>

          <div className="flex items-center mt-4">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">Expert Heuristic Analysis</p>
          </div>
          <div className="flex items-center py-1">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">Accessibility Check</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">PDF Report with Fixes</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">1 Hour Consultation</p>
          </div>

          <button className="w-full mt-6 py-2 border border-gray-200 rounded-xl font-bold hover:bg-gray-100 transition">
            View Pricing
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[370px] p-8 rounded-2xl bg-gray-900 shadow-lg mx-auto">
          <h3 className="font-bold text-xl text-white">Product Redesign</h3>
          <p className="text-xs text-gray-400 py-3">Complete visual overhaul.</p>
          <h2 className="text-4xl font-bold py-4 text-white">$4,500+</h2>

          <div className="flex items-center mt-4">
            <FaCheck className="w-4 h-4 text-blue-500" />
            <p className="text-sm text-gray-400 px-3 font-bold">Full Figma File</p>
          </div>
          <div className="flex items-center py-1">
            <FaCheck className="w-4 h-4 text-blue-500" />
            <p className="text-sm text-gray-400 px-3">User Research Phase</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-blue-500" />
            <p className="text-sm text-gray-400 px-3">Dark/Light Mode</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-blue-500" />
            <p className="text-sm text-gray-400 px-3">Design System (Style Guide)</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-blue-500" />
            <p className="text-sm text-gray-400 px-3">Developer Handoff</p>
          </div>

          <button className="w-full mt-6 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition">
            Select Package
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-[370px] p-8 border border-gray-100 rounded-2xl bg-white shadow-lg mx-auto">
          <h3 className="font-bold text-xl">Design Partner</h3>
          <p className="text-xs text-gray-400 py-3">Ongoing monthly support.</p>
          <h2 className="text-4xl font-bold py-4">$3,000/mo</h2>

          <div className="flex items-center mt-4">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">Dedicated Designer</p>
          </div>
          <div className="flex items-center py-1">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">Unlimited Requests</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">48h Turnaround</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="w-4 h-4 text-green-400" />
            <p className="text-sm text-gray-500 px-3">Social Media Graphics</p>
          </div>

          <button className="w-full mt-6 py-2 border border-gray-200 rounded-xl font-bold hover:bg-gray-100 transition">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
