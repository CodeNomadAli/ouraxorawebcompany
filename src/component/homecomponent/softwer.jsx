import React from "react";
import { FaCode } from "react-icons/fa";

const Software = () => {
  return (
    <section className="text-center pt-14 py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
        <span className="text-xs font-medium">OUR EXPERTISE</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mt-4 flex items-center justify-center gap-2">
        <FaCode className="text-blue-600" /> Expert Software{" "}
        <span className="text-blue-600 underline">Solutions</span>
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl font-normal mt-5 text-gray-700 max-w-3xl mx-auto">
        We craft stunning, modern, and scalable applications. From <b>CRM & HRM Systems</b> to <b>AI-Powered</b> tools, we elevate your business with code.
      </p>
    </section>
  );
};

export default Software;
