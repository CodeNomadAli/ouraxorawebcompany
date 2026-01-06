import React from "react";
import { Link } from "react-router-dom";

const Imgcard = () => {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-24 py-12 bg-blue-900">
      {/* Header */}
      <div className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold py-2 text-white">Selected Work</h1>
          <p className="font-medium text-sm text-white">
            Results we've achieved for clients.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <a
            href="#"
            className="text-blue-400 font-semibold hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          "/ecommerce.png",
          "https://appsglobal.co/images/video-player.png",
          "/billanory (2).png",
          "https://appsglobal.co/images/scalesam.png",
          "https://appsglobal.co/images/mess-pilot.png",
          "https://appsglobal.co/images/rental-bike.png",
        ].map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl group h-64 sm:h-80 lg:h-72"
          >
            <img
              src={src}
              alt={`Project ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Imgcard;
