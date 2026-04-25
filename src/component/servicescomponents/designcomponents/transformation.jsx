import React from "react";
import { FaCheck } from "react-icons/fa";

const Transformation = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Transformation Gallery */}
      <div className="w-full bg-gray-50 py-16 md:py-24">
        {/* Container aligned with Navbar at 768px (sm:px-10) */}
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Visual Evidence</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-gray-900">
              Transformation Gallery
            </h1>
            <p className="text-base text-gray-500 font-medium">
              Hover over the images to see the transformation.
            </p>
          </div>

          {/* Grid: 768px (md) par 1 column, 1024px (lg) par 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="w-full group cursor-pointer max-w-3xl mx-auto">
              <div className="relative w-full h-72 sm:h-80 md:h-[450px] overflow-hidden rounded-[2rem] shadow-xl border border-gray-200 bg-white">
                <img
                  src="/beforegr.jpg"
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/aftergr.jpg"
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-900">FinTech Analytics Platform</h3>
              <p className="text-gray-500 mt-2 leading-relaxed">
                We transformed a complex manual spreadsheet process into a real-time, React-based dashboard.
                <span className="text-blue-700 font-bold ml-1">Reduced user error rate by 45%.</span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full group cursor-pointer max-w-3xl mx-auto">
              <div className="relative w-full h-72 sm:h-80 md:h-[450px] overflow-hidden rounded-[2rem] shadow-xl border border-gray-200 bg-white">
                <img
                  src="/ecommerce1.jpg"
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/ecommerce2.jpg"
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-900">E-Commerce Checkout Flow</h3>
              <p className="text-gray-500 mt-2 leading-relaxed">
                Reimagined a 5-page web form into a seamless 3-step mobile experience.
                <span className="text-blue-700 font-bold ml-1">Increased cart completion by 22%.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full py-20 bg-white overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Clear Design Pricing</h2>
            <p className="text-gray-500 py-4 text-base md:text-lg max-w-2xl mx-auto">
              Whether you need a quick audit or a full product overhaul.
            </p>
          </div>

          {/* Pricing Grid: md (768px) par spacing aur layout fix */}
          {/* Hum md:grid-cols-2 use kar rahe hain taake tablet par cards behtar lagain */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

            {/* Card 1 */}
            <div className="w-full flex flex-col p-8 border border-gray-100 rounded-[2rem] bg-white shadow-lg hover:border-blue-500 transition-all">
              <div className="flex-grow">
                <h3 className="font-bold text-xl">UX Audit</h3>
                <p className="text-xs text-gray-400 py-3">For existing products.</p>
                <h2 className="text-4xl font-bold py-4 text-gray-900">$1,500</h2>
                <div className="space-y-4 mt-4">
                  {["Expert Heuristic Analysis", "Accessibility Check", "PDF Report with Fixes", "1 Hour Consultation"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-green-500 shrink-0" />
                      <p className="text-sm text-gray-600 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full mt-10 py-4 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all">View Pricing</button>
            </div>

            {/* Card 2 - Most Popular */}
            <div className="w-full flex flex-col p-8 rounded-[2rem] bg-gray-900 shadow-2xl relative border-2 border-blue-600 lg:scale-105 z-10">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</span>
              <div className="flex-grow">
                <h3 className="font-bold text-xl text-white">Product Redesign</h3>
                <p className="text-xs text-gray-400 py-3">Complete visual overhaul.</p>
                <h2 className="text-4xl font-bold py-4 text-white">$4,500+</h2>
                <div className="space-y-4 mt-4">
                  {["Full Figma File", "User Research Phase", "Dark/Light Mode", "Design System", "Developer Handoff"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-blue-500 shrink-0" />
                      <p className="text-sm text-gray-300 font-bold">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full mt-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">Select Package</button>
            </div>

            {/* Card 3 - md:col-span-2 lg:col-span-1 fix for 768px centered layout */}
            <div className="w-full md:col-span-2 lg:col-span-1 flex flex-col p-8 border border-gray-100 rounded-[2rem] bg-white shadow-lg hover:border-blue-500 transition-all max-w-md md:mx-auto lg:max-w-full">
              <div className="flex-grow">
                <h3 className="font-bold text-xl">Design Partner</h3>
                <p className="text-xs text-gray-400 py-3">Ongoing monthly support.</p>
                <h2 className="text-4xl font-bold py-4 text-gray-900">$3,000/mo</h2>
                <div className="space-y-4 mt-4">
                  {["Dedicated Designer", "Unlimited Requests", "48h Turnaround", "Social Media Graphics"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-green-500 shrink-0" />
                      <p className="text-sm text-gray-600 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full mt-10 py-4 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all">View Pricing</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;