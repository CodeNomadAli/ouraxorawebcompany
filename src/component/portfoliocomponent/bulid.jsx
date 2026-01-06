import React from "react";
import { Link } from "react-router-dom";

const Bulid = () => {
  return (
    <section className="w-full mt-20">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 md:px-12 text-center">
        <button className="text-blue-600 bg-blue-50 text-sm h-8 px-4 border border-red-100 rounded-2xl">
          Award Winning Agency
        </button>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4">
          We Build Digital <br />
          <span className="text-blue-600">Masterpieces</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-500 py-3">
          From intelligent AI algorithms to stunning web experiences, we engineer <br className="hidden sm:inline" />
          software that transforms businesses and defines the future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 py-6">
          <Link to="/portfolio">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-500 transition-colors">
              View Our Work
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-white text-black py-3 px-6 rounded-2xl border border-gray-200 hover:bg-slate-50 transition-colors">
              Start a Project
            </button>
          </Link>
        </div>
      </div>

      <hr className="my-4" />

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto bg-white w-full py-14 px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">150+</h1>
            <p className="mt-2 font-bold text-lg sm:text-xl text-gray-600">Projects Delivered</p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">98%</h1>
            <p className="mt-2 font-bold text-lg sm:text-xl text-gray-600">Client Satisfaction</p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">10M+</h1>
            <p className="mt-2 font-bold text-lg sm:text-xl text-gray-600">Users Impacted</p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">24/7</h1>
            <p className="mt-2 font-bold text-lg sm:text-xl text-gray-600">Support & Uptime</p>
          </div>
        </div>
      </div>

      <hr className="my-4" />
    </section>
  );
};

export default Bulid;
