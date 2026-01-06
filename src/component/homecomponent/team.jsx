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
    <section className="mt-20 px-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-xl font-bold">Trusted by Innovative Teams</h1>
        <h2 className="text-3xl font-extrabold mt-2">
          Powering the Next Generation of <span className="text-blue-600">Industry Leaders</span>
        </h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {teams.map((team, index) => (
          <div
            key={index}
            className="group hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center text-center py-5 h-[100px] w-[250px] rounded-lg bg-gray-50 border border-gray-200"
          >
            {team.icon && (
              <div className="text-3xl mb-2 text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                {team.icon}
              </div>
            )}
            <h1 className="text-gray-500 group-hover:text-gray-800 font-extrabold text-xl transition-colors duration-300">
              {team.name}
            </h1>
            {team.subtitle && (
              <span className="text-xs text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                {team.subtitle}
              </span>
            )}
          </div>
        ))}
      </div>

      <hr className="my-14" />

      {/* Stats Section */}
      <div className="mb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-600">50+</h1>
            <p className="mt-2 font-bold text-xl">Enterprise Clients</p>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-blue-600">$100M+</h1>
            <p className="mt-2 font-bold text-xl">Revenue Enabled</p>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-blue-600">98%</h1>
            <p className="mt-2 font-bold text-xl">Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
