import React from "react";
import { Link } from "react-router-dom";

const Digitalsection = () => {
  return (
    <section className="w-full bg-gray-50 flex flex-col md:flex-row px-4 sm:px-6 md:px-12 lg:px-24 py-12 gap-10">
      
      {/* Text Content */}
      <div className="flex-1 py-10">
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-800 shadow-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-sm font-medium">WHO ARE YOU</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-7 leading-snug">
          Architects of <br />
          <span className="text-blue-700">Digital Transformation</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">
          We are a dedicated team of expert developers and designers specializing in crafting stunning, modern, and scalable software. From <b>Web & Mobile Apps</b> to complex <b>CRM, HRM, and RSM systems,</b> we build the engines that power business growth. <br /><br />
          Since our founding, we’ve focused on one goal: delivering high-quality, user-focused solutions. We collaborate closely with startups and enterprises to turn ambitious visions into <u className="decoration-blue-600 decoration-2 underline-offset-4">clean, maintainable code.</u>
        </p>

        <div className="mt-7">
          <Link to="/about">
            <button className="text-white bg-blue-600 rounded text-sm px-4 py-3 flex items-center hover:bg-blue-700 transition-colors duration-300">
              Learn more About us
              <span className="text-white w-6 font-bold px-3">→</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
<div className="flex-1 flex justify-center mt-32 ">
  <img
    src="/herose2.png"
    alt="Digital Transformation"
    className="rounded-2xl shadow-xl w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto max-h-[350px]"
  />
</div>

    </section>
  );
};

export default Digitalsection;
