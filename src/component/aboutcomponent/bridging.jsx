import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaShieldAlt, FaBolt, FaCode } from "react-icons/fa";

const Bridging = () => {
  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 px-4 sm:px-6 md:px-[100px] py-12 md:py-24">
        <div className="group overflow-hidden">
          <img
            src="/machice.jpg"
            alt="Human & Machine"
            className="rounded-xl hover:shadow-2xl transition-transform duration-500 group-hover:scale-105 w-full h-auto"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">
            Bridging the Gap Between <br /> Human & Machine
          </h1>
          <p className="text-gray-500 py-2">
            It started with a simple observation: businesses were struggling to adopt AI not because the technology wasn't there, but because the <b>integration was too complex.</b>
            <br /> <br />
            We founded this agency to solve that. We combine aesthetic excellence with rigorous engineering. We don't just write code; we solve business problems using the most advanced tools available.
          </p>
          <div className="flex gap-3">
            <div className="hidden md:block w-[6px] h-20 bg-blue-600 font-bold"></div>
            <p className="text-gray-600 py-2 text-2xl">
              "<i>Our mission is to democratize enterprise-grade technology for ambitious companies.</i>"
            </p>
          </div>
        </div>
      </div>

      {/* Security Cards */}
      <div className="w-full bg-gray-900 px-4 sm:px-6 md:px-[100px] text-center py-12 md:py-14">
        <h1 className="text-3xl text-white">Enterprise-Grade Security & Standards</h1>
        <p className="text-gray-300 py-2">We take your data and infrastructure seriously.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-12 gap-4 justify-items-center">
          {/* Card 1 */}
          <div className="w-[280px] h-[160px] rounded-xl p-5 group flex flex-col items-center justify-center bg-gray-700 border-[1px] border-gray-500 hover:border-blue-500">
            <div className="w-12 h-12 rounded-full group-hover:bg-blue-500 flex items-center justify-center">
              <FaShieldAlt className="w-5 h-5 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-white font-bold py-5">ISO 27001 Certified</h3>
          </div>

          {/* Card 2 */}
          <div className="w-[280px] h-[160px] rounded-xl p-5 group flex flex-col items-center justify-center bg-gray-700 border-[1px] border-gray-500 hover:border-blue-500">
            <div className="w-12 h-12 rounded-full group-hover:bg-blue-500 flex items-center justify-center">
              <FaLock className="w-5 h-5 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-white font-bold py-5">GDPR Compliant</h3>
          </div>

          {/* Card 3 */}
          <div className="w-[280px] h-[160px] rounded-xl p-5 group flex flex-col items-center justify-center bg-gray-700 border-[1px] border-gray-500 hover:border-blue-500">
            <div className="w-12 h-12 rounded-full group-hover:bg-blue-500 flex items-center justify-center">
              <FaBolt className="w-5 h-5 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-white font-bold py-5">SOC 2 Type II</h3>
          </div>

          {/* Card 4 */}
          <div className="w-[280px] h-[160px] rounded-xl p-5 group flex flex-col items-center justify-center bg-gray-700 border-[1px] border-gray-500 hover:border-blue-500">
            <div className="w-12 h-12 rounded-full group-hover:bg-blue-500 flex items-center justify-center">
              <FaCode className="w-5 h-5 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-white font-bold py-5">Clean Code Guarantee</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridging;