import React from "react";
import { FaBolt, FaLock, FaMobileAlt } from "react-icons/fa";

const Bulit = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Modern Architecture Section */}
      <div className="bg-gray-50 text-center py-8">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Built with modern architecture
          </h4>
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-lg md:text-xl py-5">
            <h4>Laravel</h4>
            <h4>React</h4>
            <h4>Tailwind</h4>
            <h4>Alpine.js</h4>
            <h4>Next.js</h4>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />

      {/* Features Section */}
      <div className="w-full py-12 md:py-24">
        {/* Container with responsive padding for 768px (md) */}
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 md:px-0 lg:px-8">
          
          {/* Flex column on mobile and tablet (up to md), grid on large screens */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Text Content - Full width on 768px */}
            <div className="w-full px-2 md:px-6 lg:px-0 order-1">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                Why your "Template Site" is costing you money.
              </h1>
              <p className="text-gray-500 font-semibold py-6 text-base md:text-xl">
                Pre-made themes are heavy. They load slow, rank poorly on Google,
                and frustrate users on mobile. We build from scratch for raw speed.
              </p>

              {/* Feature List */}
              <div className="space-y-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                    <FaBolt className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="font-bold text-slate-900 text-lg">Sub-Second Load Times</h1>
                    <p className="text-sm md:text-base text-gray-400">
                      Google penalizes slow sites. Ours load instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                    <FaMobileAlt className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="font-bold text-slate-900 text-lg">Mobile-First Architecture</h1>
                    <p className="text-sm md:text-base text-gray-400">
                      60% of traffic is mobile. We design for phones first.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                    <FaLock className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="font-bold text-slate-900 text-lg">Bank-Grade Security</h1>
                    <p className="text-sm md:text-base text-gray-400">
                      No vulnerable plugins. Secure code logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Full width on 768px (md:px-0) */}
            <div className="w-full order-2 px-0">
              <img
                src="/bulit.png"
                alt="Modern Architecture Illustration"
                className="w-full h-auto object-cover md:rounded-none lg:rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Bulit;