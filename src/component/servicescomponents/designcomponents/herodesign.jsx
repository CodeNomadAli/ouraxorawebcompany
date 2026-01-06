import React from "react";
import { Link } from "react-router-dom";

const Herodesign = () => {
  return (
    <section className="w-full mt-16">
      {/* Hero Text */}
      <div className="px-4 md:px-[100px] text-center justify-items-center py-28">
        <button className="text-black bg-gray-50 text-sm h-8 px-4 border-[1px] hover:border-blue-300 rounded-2xl">
          Human-Centered Design
        </button>

        <h1 className="text-6xl font-bold py-4">
          We turn complex logic into <br />
          <span className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
            beautiful experiences.
          </span>
        </h1>

        <p className="text-xl text-gray-500 py-3 leading-relaxed">
          Great design isn't just about making things look pretty. It's about solving <br />
          problems. We design intuitive interfaces that users understand instantly <br />
          and love using.
        </p>

        <div className="flex flex-wrap justify-center gap-4 py-6">
          <Link to="/portfolio">
            <button className="bg-blue-600 text-white py-3 px-4 rounded-3xl hover:bg-blue-500 transition-colors duration-300">
              See Our Process
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-white text-black py-3 px-4 rounded-3xl hover:bg-slate-50 border-[1px] border-gray-200 transition-colors duration-300">
              Book a UX Audit
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full px-4 md:px-[100px]">
        <img
          src="/phonede.png"
          alt="UX Design Showcase"
          className="w-full h-full rounded-2xl object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Herodesign;
