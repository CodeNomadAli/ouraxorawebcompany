import React from "react";
import { FaSearch, FaBolt } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";

const Pretty = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="w-full px-4 md:px-[100px]">
        <h1 className="text-4xl font-bold text-center">More than just "pretty"</h1>
        <p className="text-gray-500 text-sm text-center py-3">
          We balance scientific research with artistic execution.
        </p>

        <div className="grid md:grid-cols-3 gap-8 py-8 justify-items-center">
          {/* UX Research */}
          <div className="group w-full max-w-[380px] h-[260px] border-[1px] border-gray-100 rounded-xl p-7 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaSearch className="text-blue-500 w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold py-3">UX Research</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              We interview your users, create personas, and map out customer journeys to ensure we are solving the right problem.
            </p>
          </div>

          {/* UI Design */}
          <div className="group w-full max-w-[380px] h-[260px] border-[1px] border-gray-100 rounded-xl p-7 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaTableCellsLarge className="text-purple-600 w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold py-3">UI Design (Visuals)</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pixel-perfect layouts, typography, and color theory. We create Design Systems (UI Kits) to ensure consistency across all screens.
            </p>
          </div>

          {/* Prototyping */}
          <div className="group w-full max-w-[380px] h-[260px] border-[1px] border-gray-100 rounded-xl p-7 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaBolt className="text-blue-500 w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold py-3">Prototyping</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Clickable, interactive mockups that act like the real app. We test these with real users before writing a single line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pretty;
