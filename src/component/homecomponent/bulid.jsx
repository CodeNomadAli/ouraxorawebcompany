import React from "react";
import { FaComments, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

const Bulidsection = () => {
  return (
    <section className="text-center pt-14 py-20 px-4 sm:px-6 lg:px-24">
      {/* Expertise Badge */}
      <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-red-200 bg-blue-50 text-blue-500 shadow-sm">
        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
        <span className="text-xs font-medium">OUR EXPERTISE</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
        How We Build Your <span className="text-blue-600"> Solutions</span>
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl font-normal mt-5 max-w-3xl mx-auto">
        Our proven 4-step process delivers scalable, high-performance applications. We don't just <br />
        write code; we engineer solutions.
      </p>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        {/* LINE */}
        <div className="relative hidden md:block">
          <div className="absolute top-10 left-0 w-full h-[2px] bg-blue-500"></div>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center mt-12">
          {/* STEP 1 */}
          <div className="relative">
            <div className="mx-auto w-20 h-20 bg-white hover:bg-blue-500 rounded-xl shadow-md flex items-center justify-center relative z-10">
              <FaComments className="text-2xl text-gray-700" />
            </div>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              01
            </span>
            <h3 className="mt-6 text-lg sm:text-xl font-bold">Discovery & Planning</h3>
            <p className="text-gray-500 mt-3 text-sm">
              We begin by understanding your business goals and technical requirements.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="relative">
            <div className="mx-auto w-20 h-20 bg-white hover:bg-blue-500 rounded-xl shadow-md flex items-center justify-center relative z-10">
              <FaLightbulb className="text-2xl text-gray-700" />
            </div>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              02
            </span>
            <h3 className="mt-6 text-lg sm:text-xl font-bold">Design & Prototyping</h3>
            <p className="text-gray-500 mt-3 text-sm">
              Our team crafts user-focused designs and interactive prototypes.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            <div className="mx-auto w-20 h-20 bg-white hover:bg-blue-500 rounded-xl shadow-md flex items-center justify-center relative z-10">
              <FaCode className="text-2xl text-gray-700" />
            </div>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              03
            </span>
            <h3 className="mt-6 text-lg sm:text-xl font-bold">Development</h3>
            <p className="text-gray-500 mt-3 text-sm">
              We build scalable, modern applications with seamless integration.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="relative">
            <div className="mx-auto w-20 h-20 bg-white hover:bg-blue-500 rounded-xl shadow-md flex items-center justify-center relative z-10">
              <FaRocket className="text-2xl text-gray-700" />
            </div>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              04
            </span>
            <h3 className="mt-6 text-lg sm:text-xl font-bold">Deployment</h3>
            <p className="text-gray-500 mt-3 text-sm">
              We deploy your application and provide ongoing support.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20 justify-center">
        {[
          ["Business Analysis", "User Research", "Technical Requirements"],
          ["UI/UX Design", "Wireframing", "Interactive Prototypes"],
          ["Custom Development", "System Integration", "Quality Assurance"],
          ["App Launch", "Ongoing Support", "Maintenance"],
        ].map((items, idx) => (
          <div key={idx} className="bg-slate-100 py-5 px-7 rounded-2xl border border-blue-300 w-full max-w-[250px] mx-auto">
            {items.map((item, i) => (
              <ul key={i} className="list-disc list-inside text-left">
                <li className="marker:text-blue-500 text-gray-600 font-bold text-xs">{item}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/axoraweb/30min">
          <button className="text-white bg-blue-600 rounded-xl text-xl px-3 py-2 mt-7 flex mx-auto items-center">
            Book an Intro Call
            <span className="text-white w-6 font-bold px-3">→</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Bulidsection;
