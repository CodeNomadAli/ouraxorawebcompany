import React from "react";
import { FaSearch, FaBars, FaBuilding } from "react-icons/fa";

const Diamondsec = () => {
  return (
    <section className="w-full">
      <div className="w-full bg-gray-900">
      {/* Header */}
      <div className="px-[100px] w-full py-12">
        <h1 className="text-sm text-blue-600 font-bold">How We Design</h1>
        <h2 className="text-3xl text-white font-bold py-2">The "Double Diamond" Process</h2>
        <p className="text-sm text-gray-200">
          We don't guess. We follow a proven framework to discover the problem and <br />
          deliver the solution.
        </p>
      </div>

      {/* Timeline */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 mt-20 ">
        <div className="absolute top-0 left-4 md:left-1/2 h-full w-[2px] bg-gray-700 md:-translate-x-1/2"></div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
          <div className="md:text-right md:pr-16">
            <h3 className="text-2xl font-bold mb-3 text-white">01. Discover & Empathize</h3>
            <p className="text-gray-500">
              We start by understanding the "Who" and the "Why". We conduct stakeholder interviews and user surveys.
            </p>
            <h1 className="text-sm text-blue-300 py-2">• Deliverable: User Personas</h1>
            <h1 className="text-sm text-blue-300">• Deliverable: Empathy Maps</h1>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="w-16 h-16 bg-gray-600 mt-7 rounded-xl flex items-center justify-center">
              <FaSearch className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-blue-500 mt-12 shadow-lg"></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
          <div className="flex justify-center md:justify-end">
            <div className="w-16 h-16 bg-gray-600 mt-7 rounded-xl flex items-center justify-center">
              <FaBars className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="md:text-left ml-0 md:ml-12 md:pr-16">
            <h3 className="text-2xl font-bold mb-3 text-white">02. Define & Wireframe</h3>
            <p className="text-gray-500">
              We organize the chaos. We define the user flow (Information Architecture) and sketch low-fidelity layouts.
            </p>
            <h1 className="text-sm text-blue-300 py-2">• Deliverable: User Journey Map</h1>
            <h1 className="text-sm text-blue-300">• Deliverable: Lo-Fi Wireframes</h1>
          </div>
          <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-gray-500 mt-12 shadow-lg"></div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
          <div className="md:text-right md:pr-16">
            <h3 className="text-2xl font-bold mb-3 text-white">03. Visual Design (UI)</h3>
            <p className="text-gray-500">
              This is where it gets beautiful. We apply your branding, colors, and typography to create high-fidelity screens.
            </p>
            <h1 className="text-sm text-blue-300 py-2">• Deliverable: High-Fidelity Mockups</h1>
            <h1 className="text-sm text-blue-300">• Deliverable: UI Component Library</h1>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="w-16 h-16 bg-gray-600 mt-7 rounded-xl flex items-center justify-center">
              <FaBuilding className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-purple-500 mt-12 shadow-lg"></div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
          <div className="flex justify-center md:justify-end">
            <div className="w-16 h-16 bg-gray-600 mt-7 rounded-xl flex items-center justify-center">
              <FaBars className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="md:text-left ml-0 md:ml-12 md:pr-16">
            <h3 className="text-2xl font-bold mb-3 text-white">04. Prototype & Handoff</h3>
            <p className="text-gray-500">
              We link the screens to create a clickable prototype. Once approved, we prep files for developers.
            </p>
            <h1 className="text-sm text-blue-300 py-2">• Deliverable: Interactive Prototype</h1>
            <h1 className="text-sm text-blue-300">• Deliverable: Developer Handoff File</h1>
          </div>
          <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-gray-500 mt-12 shadow-lg"></div>
          </div>
        </div>
      </section>
      </div>

      {/* Tools Section */}
      <div className="w-full px-[100px] py-12">
        <div className="bg-white text-center  px-[100px] group">
          <h4 className="text-sm font-bold text-gray-400">We speak the same language as your team</h4>
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-2xl py-5">
            <h4 className="group-hover:text-blue-500">Figma</h4>
            <h4 className="group-hover:text-purple-500">Adobe XD</h4>
            <h4 className="group-hover:text-black">Sketch</h4>
            <h4 className="group-hover:text-blue-600">Maze</h4>
            <h4 className="group-hover:text-yellow-500">Zeplin</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diamondsec;
