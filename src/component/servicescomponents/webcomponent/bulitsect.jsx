import React from "react";
import { FaBolt, FaLock, FaMobileAlt } from "react-icons/fa";

const Bulit = () => {
  return (
    <section className="w-full">
      {/* Modern Architecture Section */}
      <div className="bg-gray-50 text-center py-8 px-4 sm:px-[100px]">
        <h4 className="text-sm font-bold text-gray-400">
          Built with modern architecture
        </h4>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-xl py-5">
          <h4>Laravel</h4>
          <h4>React</h4>
          <h4>Tailwind</h4>
          <h4>Alpine.js</h4>
          <h4>Next.js</h4>
        </div>
      </div>
      <hr className="border-gray-300" />

      {/* Features Section */}
      <div className="w-full px-4 sm:px-[100px] py-20">
        <div className="grid md:grid-cols-2 gap-7">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-bold">
              Why your "Template Site" is costing you money.
            </h1>
            <p className="text-gray-500 font-semibold py-4">
              Pre-made themes are heavy. They load slow, rank poorly on Google,
              and frustrate users on mobile. We build from scratch for raw speed.
            </p>

            {/* Feature 1 */}
            <div className="flex gap-3 pt-10">
              <div className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                <FaBolt className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold">Sub-Second Load Times</h1>
                <p className="text-sm text-gray-400">
                  Google penalizes slow sites. Ours load instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 py-5">
              <div className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                <FaMobileAlt className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold">Mobile-First Architecture</h1>
                <p className="text-sm text-gray-400">
                  60% of traffic is mobile. We design for phones first.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3">
              <div className="w-12 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                <FaLock className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold">Bank-Grade Security</h1>
                <p className="text-sm text-gray-400">
                  No vulnerable plugins. Secure code logic.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="py-10 flex justify-center md:justify-end">
            <img
              src="/bulit.png"
              alt="Modern Architecture Illustration"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bulit;
