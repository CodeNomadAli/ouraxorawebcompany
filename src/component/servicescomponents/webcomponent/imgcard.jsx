import React from "react";

const Imgcard = () => {
  return (
    <section className="w-full bg-blue-900 overflow-hidden">
      {/* Main Container - Aligning with Clientsay & Cardweb */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section - Better alignment for 768px */}
        <div className="pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-800/50 text-blue-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Our Portfolio</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Selected <span className="text-blue-400">Work</span>
            </h1>
            <p className="font-medium text-blue-100/70 mt-3 text-base md:text-lg">
              High-performance solutions we've engineered for global clients.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="group flex items-center gap-2 text-white font-bold bg-blue-800/40 px-6 py-3 rounded-xl border border-blue-700/50 hover:bg-blue-700 transition-all"
            >
              View Full Portfolio 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Grid - Fixed for 768px (md) to look clean and aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              className="relative overflow-hidden rounded-[2rem] group h-72 sm:h-80 lg:h-72 border border-blue-800/50 shadow-2xl"
            >
              <img
                src={src}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-xl text-center w-full">View Case Study</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imgcard;