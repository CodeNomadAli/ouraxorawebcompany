import React from "react";
import { FaCheck } from "react-icons/fa";

const Cardweb = () => {
  return (
    <section className="w-full px-4 sm:px-[100px] py-20 bg-gray-50">
      {/* Section Header */}
      <div className="text-center">
        <p className="text-3xl font-bold">Transparent Development Packages</p>
        <p className="text-gray-500 py-4">
          One-time fees. You own the code. No monthly builders fees.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-3 gap-7 py-16">
        {/* Card 1 */}
        <div className="w-full h-[450px] p-8 border-[1px] rounded-2xl border-gray-100 bg-white shadow-lg hover:border-blue-600 transition-all duration-300">
          <h1 className="font-bold text-xl">High-Convert Lander</h1>
          <p className="text-xs text-gray-400 py-3">For ads campaigns & single products.</p>
          <h1 className="text-4xl py-4 font-bold">$1,800</h1>

          <div className="flex mt-7">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Single Long-Scroll Page</p>
          </div>
          <div className="flex py-1">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Copywriting Assistance</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Contact Form Integration</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">1 Week Turnaround</p>
          </div>

          <div className="text-center">
            <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold rounded-xl text-xl py-2 mt-7 flex items-center justify-center">
              View Pricing
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-[450px] p-8 border-2 rounded-2xl border-blue-500 bg-white shadow-lg">
          <h1 className="font-bold text-xl">Corporate Website</h1>
          <p className="text-xs text-gray-400 py-3">Full brand presence for businesses.</p>
          <h1 className="text-4xl py-4 font-bold">$4,500</h1>

          <div className="flex mt-7">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1 font-bold">5-8 Custom Pages</p>
          </div>
          <div className="flex py-1">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">CMS (Manage your own content)</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Basic On-Page SEO</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Blog / News Section</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Google Analytics Setup</p>
          </div>

          <div className="text-center">
            <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-xl py-3 mt-7 flex items-center justify-center">
              Select Package
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-[450px] p-8 border-[1px] rounded-2xl border-gray-100 bg-white shadow-lg hover:border-blue-600 transition-all duration-300">
          <h1 className="font-bold text-xl">Web App / E-Comm</h1>
          <p className="text-xs text-gray-400 py-3">Complex functionality & stores.</p>
          <h1 className="text-4xl py-4 font-bold">$8,000+</h1>

          <div className="flex mt-7">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">E-commerce Functionality</p>
          </div>
          <div className="flex py-1">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">User Accounts / Logins</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">3rd Party API Integrations</p>
          </div>
          <div className="flex">
            <FaCheck className="w-4 h-7 text-blue-500" />
            <p className="text-sm text-gray-400 px-5 mt-1">Advanced Search & Filtering</p>
          </div>

          <div className="text-center">
            <button className="w-full bg-gray-50 hover:bg-gray-100 text-black border-[1px] border-gray-200 font-bold rounded-xl text-xl py-2 mt-7 flex items-center justify-center">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardweb;
