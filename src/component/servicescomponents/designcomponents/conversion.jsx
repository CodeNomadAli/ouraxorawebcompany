import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

const Conversion = () => {
  return (
    <section className="w-full py-12 mt-12">
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-[100px] bg-gray-50 py-12">

        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Confusion kills conversion.</h1>
          <p className="text-gray-500 font-semibold py-4">
            Users judge your credibility in 0.05 seconds. If your software is hard to use, they churn. If your website is cluttered, they bounce.
          </p>

          <div className="w-full mt-5 bg-white shadow-md border border-gray-200 p-6 rounded-xl">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-md">
                <FaTriangleExclamation className="text-2xl text-blue-500 hover:text-gray-700 transition" />
              </div>
              <div>
                <p className="font-bold py-2">The "Frustration Gap"</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 py-3">
              Every extra click, slow loader, or unclear label drops your conversion rate by <b>20%</b>. We close that gap.
            </p>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full h-32 border border-gray-200 bg-white shadow rounded-xl">
            <h1 className="text-4xl font-bold text-blue-600">300%</h1>
            <p className="text-sm text-gray-500 mt-2">ROI on UX Design</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-32 border border-gray-200 bg-white shadow rounded-xl">
            <h1 className="text-4xl font-bold text-blue-600">50ms</h1>
            <p className="text-sm text-gray-500 mt-2">Time to make an impression</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-32 border border-gray-200 bg-white shadow rounded-xl">
            <h1 className="text-4xl font-bold text-blue-600">88%</h1>
            <p className="text-sm text-gray-500 mt-2">Won't return after bad XP</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-32 border border-gray-200 bg-blue-700 shadow rounded-xl">
            <h1 className="text-4xl font-bold text-white">∞</h1>
            <p className="text-sm text-gray-200 mt-2">Value of Trust</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Conversion;
