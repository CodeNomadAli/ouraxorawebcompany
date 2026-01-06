import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Featurepj = () => {
  return (
    <section className="text-center pt-14 py-12 px-4 sm:px-6 md:px-12 lg:px-24 mx-auto bg-gray-50">
      
      {/* Header */}
      <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
        <span className="text-xs font-medium">Selected Work</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
        Featured <span className="text-blue-600">Projects</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl font-normal mt-5">
        Discover how we've helped businesses transform their digital presence. From <br />
        seed-stage startups to enterprise giants.
      </p>

      {/* Project 1 */}
      <section className="w-full py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/billanory (2).png"
              alt="Billonary Club"
              className="w-full h-auto rounded-xl hover:shadow-2xl hover:shadow-red-100"
            />
          </div>

          <div className="flex flex-col gap-4 justify-center text-left">
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">Webflow</span>
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">SaaS</span>
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">B2B</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-3xl py-2 font-bold">Billonary Club</h1>
            <p className="text-sm text-blue-600 font-bold">Financial SaaS Platform</p>

            <p className="text-base sm:text-lg md:text-xl py-5">
              We engineered a robust financial supply chain platform that transformed how users manage high-volume transactions. By streamlining complex user flows and optimizing the dashboard architecture, we helped the client secure significant Series A funding.
            </p>

            <h2 className="text-xl font-bold">Key Outcomes</h2>
            <div className="py-3 space-y-2">
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">300% increase in user conversions</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">$12.5M in funding raised</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">Dashboard load times cut by 50%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 */}
      <section className="w-full py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4 justify-center text-left order-2 md:order-1">
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">E-Commerce</span>
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">UI/UX</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-3xl py-2 font-bold">Ecommerce Solutions</h1>
            <p className="text-sm text-blue-600 font-bold">Digital Storefront Transformation</p>

            <p className="text-base sm:text-lg md:text-xl py-5">
              A modern, high-performance e-commerce experience featuring advanced WebGL product interactions. This overhaul was designed to position the brand as an industry innovator, focusing on seamless navigation and immersive user engagement.
            </p>

            <h2 className="text-xl font-bold">Key Outcomes</h2>
            <div className="py-3 space-y-2">
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">200% growth in inbound leads</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">40% increase in session duration</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/ecommerce.png"
              alt="Ecommerce Solutions"
              className="w-full h-auto rounded-xl hover:shadow-2xl hover:shadow-red-100"
            />
          </div>
        </div>
      </section>

      {/* Project 3 */}
      <section className="w-full py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/video-player.jpg"
              alt="Video Player"
              className="w-full h-auto rounded-xl hover:shadow-2xl hover:shadow-red-100"
            />
          </div>

          <div className="flex flex-col gap-4 justify-center text-left">
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">Growth</span>
              <span className="text-xs rounded-xl bg-gray-100 px-2 py-1">Media</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-3xl py-2 font-bold">Video Player</h1>
            <p className="text-sm text-blue-600 font-bold">High-Conversion Landing Experience</p>

            <p className="text-base sm:text-lg md:text-xl py-5">
              A scientifically optimized landing page designed specifically to capture early adopters for a media startup. By clarifying the value proposition and simplifying the sign-up flow, we drove massive growth in user acquisition.
            </p>

            <h2 className="text-xl font-bold">Key Outcomes</h2>
            <div className="py-3 space-y-2">
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">85% Conversion Rate on ad traffic</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="w-4 h-7 text-green-500 mt-1" />
                <p className="text-sm text-gray-400 font-bold">Secured crucial seed funding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View All Button */}
      <div className="mt-10">
        <Link to="/portfolio">
          <button className="text-white bg-blue-500 rounded text-xl px-6 py-3 flex items-center hover:bg-blue-600 transition-colors">
            View All Projects <span className="ml-3 font-bold">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Featurepj;
