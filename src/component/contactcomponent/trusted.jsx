import React from "react";
import { FaMailBulk, FaMap, FaPhone } from "react-icons/fa";

const Trusted = () => {
  return (
    <section className="w-full">
      {/* Trusted Brands */}
      <div className="bg-white text-center py-8 px-4 sm:px-6 md:px-12">
        <h4 className="text-sm font-bold text-gray-400">
          Trusted by Engineering Teams at
        </h4>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-lg sm:text-xl py-5">
          <h4>Google</h4>
          <h4>Microsoft</h4>
          <h4>Spotify</h4>
          <h4>Airbnb</h4>
          <h4>Stripe</h4>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="bg-gray-50 w-full px-4 sm:px-6 md:px-12 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {/* Email */}
          <div className="w-full max-w-sm h-auto border text-center p-7 rounded-xl shadow-xl bg-white border-gray-200 mx-auto">
            <FaMailBulk className="text-blue-400 w-10 h-10 mx-auto" />
            <h1 className="text-xl font-bold pt-6">Email Us</h1>
            <p className="text-sm text-gray-500 py-2">Best for detailed RFPs</p>
            <a href="mailto:axoraweb@gmail.com">
              <h1 className="text-blue-600 font-bold cursor-pointer">
                axoraweb@gmail.com
              </h1>
            </a>
          </div>

          {/* Call */}
          <div className="w-full max-w-sm h-auto border text-center p-7 rounded-xl shadow-xl bg-white border-gray-200 mx-auto">
            <FaPhone className="text-blue-400 w-10 h-10 mx-auto" />
            <h1 className="text-xl font-bold pt-6">Call Us</h1>
            <p className="text-sm text-gray-500 py-2">Mon-Fri from 8am to 5pm</p>
            <div className="space-y-1">
              <a
                href="https://wa.me/923245237429?text=Hello%20Axoraweb%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-blue-600 font-bold cursor-pointer">
                  +92 324 5237429
                </h1>
              </a>
              <a
                href="https://wa.me/923091419331?text=Hello%20Axoraweb%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-blue-600 font-bold cursor-pointer">
                  +92 3091419331
                </h1>
              </a>
            </div>
          </div>

          {/* HQ */}
          <div className="w-full max-w-sm h-auto border text-center p-7 rounded-xl shadow-xl bg-white border-gray-200 mx-auto">
            <FaMap className="text-blue-400 w-10 h-10 mx-auto" />
            <h1 className="text-xl font-bold pt-6">Visit HQ</h1>
            <p className="text-sm text-gray-500 py-2">Software House</p>
            <h1 className="text-gray-700 font-bold">
              Pakistan, Lahore, DHA
            </h1>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Process Steps */}
      <div className="w-full bg-white py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-16">
            What Happens After You Click Send?
          </h2>

          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#0B1221] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Internal Review</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  Our tech leads analyze your requirements.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#0B1221] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery Call</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  We meet to discuss scope and strategy.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#0B1221] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Proposal</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  You receive a timeline and fixed-price quote.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kickoff</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  We sign the contract and start coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
