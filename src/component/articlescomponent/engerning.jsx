import React from "react";
import { Link } from "react-router-dom";

const Enginering = () => {
  return (
    <section className="w-full mt-20">
      {/* Header Section */}
      <div className="w-full bg-gray-50 py-16 sm:py-28 px-4 sm:px-10 md:px-[100px] text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Insights & <span className="text-blue-600">Engineering</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 py-3 sm:py-5">
          Deep dives into AI, Scalability, and Product Strategy. Written by the engineers who <br className="hidden sm:block" /> build them.
        </p>
      </div>

      {/* Placeholder Section for future content */}
      <div className="w-full bg-gray-50 px-4 sm:px-10 md:px-24 pb-5">
        {/* Add your cards or articles here */}
      </div>

      <hr className="border-gray-300 mx-4 sm:mx-[100px]" />
    </section>
  );
};

export default Enginering;
