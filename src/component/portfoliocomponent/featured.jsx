import React from "react";
import { FaCheck } from "react-icons/fa";

const Featured = () => {
  return (
    <section className="w-full">
      <div className="w-full bg-white px-4 sm:px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="/protfolioimg.jpg"
              alt="Featured Project"
              className="shadow-2xl shadow-blue-400 rounded-lg w-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h4 className="text-sm text-blue-600 font-bold uppercase">Featured Case Study</h4>
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold py-2">
              Revolutionizing Logistics with AI-Driven Routing
            </h1>
            <p className="text-gray-600 py-4 text-sm sm:text-base">
              We helped LogisticsCo reduce fuel costs by 35% using a custom machine learning algorithm that predicts traffic patterns and optimizes delivery routes in real-time.
            </p>

            {/* Features List */}
            <div className="space-y-3 mt-5">
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-500 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-600 font-semibold">35% Cost Reduction</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-500 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-600 font-semibold">2.5x Faster Delivery Times</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-500 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-600 font-semibold">Custom Mobile App for Drivers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
