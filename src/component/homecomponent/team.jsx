import React from "react";
import { FaBug, FaTractor, FaLeaf, FaGamepad, FaTools } from "react-icons/fa";

const Team = () => {
  const teams = [
    { name: "Bright Way", icon: <FaTractor />, subtitle: "Logistics" },
    { name: "Remlyo", icon: <FaBug />, subtitle: "Harnessing nature powered by AI" },
    { name: "Construct Hub", icon: <FaTools />, subtitle: "" },
    { name: "HOST ETHICS", subtitle: "hosting your online success" },
    { name: "Hello Shop", subtitle: "" },
    { name: "SMART CAS", subtitle: "" },
    { name: "COESS", icon: <FaGamepad />, subtitle: "" },
    { name: "OMROLO", icon: <FaLeaf />, subtitle: "" },
    { name: "Summit Estate", subtitle: "" },
    { name: "NUG CRAZE", subtitle: "" },
    { name: "Taste Bites", subtitle: "" },
    { name: "AS", subtitle: "" },
  ];

  return (
    // Max-w-7xl with mx-auto ensures it matches Navbar & Footer alignment exactly
    <section className="mt-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">Trusted by Innovative Teams</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 leading-tight">
            Powering the Next Generation of <span className="text-blue-600">Industry Leaders</span>
          </h2>
        </div>

        {/* Team Grid - grid-cols-2 (Mobile) to grid-cols-4 (Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center p-4 sm:py-5 min-h-[110px] w-full rounded-xl bg-gray-50 border border-gray-200"
            >
              {team.icon && (
                <div className="text-2xl sm:text-3xl mb-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                  {team.icon}
                </div>
              )}
              <h1 className="text-gray-500 group-hover:text-gray-800 font-extrabold text-sm sm:text-xl transition-colors duration-300 leading-tight">
                {team.name}
              </h1>
              {team.subtitle && (
                <span className="hidden sm:block text-[10px] sm:text-xs text-gray-400 group-hover:text-green-500 transition-colors duration-300 mt-1 px-1">
                  {team.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>

        <hr className="my-16 border-gray-100" />

        {/* Stats Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-black text-blue-600">50+</h1>
              <p className="mt-2 font-bold text-lg text-gray-800">Enterprise Clients</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-black text-blue-600">$100M+</h1>
              <p className="mt-2 font-bold text-lg text-gray-800">Revenue Enabled</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-black text-blue-600">98%</h1>
              <p className="mt-2 font-bold text-lg text-gray-800">Retention Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;