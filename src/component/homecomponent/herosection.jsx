import React from "react";
import { FaPlay } from "react-icons/fa";

const Herosection = () => {
  return (
    <section className="w-full bg-gray-50 flex flex-col md:flex-row px-4 sm:px-6 md:px-12 lg:px-24 py-12 mt-24 items-center">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col mb-10 md:mb-0">
       <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm w-max">
  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
  <span className="text-sm font-medium">Custom Software Solutions</span>
</div>


        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
          Expert <br /> Development for <br /> <span className="text-blue-600">Complex Apps</span>
        </h1>

        <hr className="border-blue-200 border-2 mt-4 w-36 sm:w-48 md:w-64" />

        <p className="text-sm sm:text-base mt-5 font-sans text-gray-700">
          We build scalable business systems that streamline your operations. Specializing in <b>CRM, HRM,</b> and <b>RSM Software.</b>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-7 gap-4 items-start sm:items-center">
          <a target="_blank" href="https://calendly.com/axoraweb/30min">
            <button className="text-white bg-blue-600 rounded-xl text-base sm:text-xl px-4 py-2 flex items-center gap-2 hover:bg-blue-700 transition-colors">
              Book an Intro Call <span className="text-white font-bold">→</span>
            </button>
          </a>

          <button className="flex items-center gap-2 group mt-2 sm:mt-0">
            <FaPlay className="text-2xl border-2 border-red-400 p-1 rounded-full group-hover:text-blue-500 transition-colors" />
            <span className="font-semibold group-hover:text-blue-500 transition-colors">View Projects</span>
          </button>
        </div>

        <hr className="mt-10" />

        {/* Stats */}
        <div className="flex mt-6 text-3xl font-bold gap-12 sm:gap-24">
          <h1>300+</h1>
          <h1>500+</h1>
          <h1>5+</h1>
        </div>

        <div className="flex gap-12 sm:gap-24 font-extralight text-sm mt-2">
          <p>Happy Clients</p>
          <p>Projects Done</p>
          <p>Years Exp.</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/secr.png"
          alt="Hero"
          className="h-[380px] w-full max-w-md sm:max-w-lg md:max-w-xl rounded-lg transform transition-transform duration-300 hover:-translate-x-4 hover:-translate-y-4"
        />
      </div>
    </section>
  );
};

export default Herosection;
