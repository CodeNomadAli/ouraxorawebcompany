import React from "react";
import { Link } from "react-router-dom";

const Transformation = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-[100px] py-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold py-3">
        Start your transformation.
      </h1>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg py-3">
        Join the forward-thinking brands that trust us with their digital commerce strategy.
      </p>

      <Link to="/contact">
        <button className="bg-blue-600 mt-4 text-white py-4 px-6 rounded-2xl hover:bg-blue-500 transition-colors duration-300">
          Book a Free Consultation
        </button>
      </Link>

      <p className="text-sm text-gray-400 py-3">
        No sales pressure. Just a technical discovery call.
      </p>
    </section>
  );
};

export default Transformation;
