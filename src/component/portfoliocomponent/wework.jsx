import React from "react";
import { FaSearch, FaPencilRuler, FaLaptop, FaRocket } from "react-icons/fa";

const Work = () => {
  return (
    <section>
      {/* How We Work Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-[100px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            How We Work
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-6 border-2 border-red-500">
                  <FaSearch className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  We analyze your goals and technical requirements.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-6 border-2 border-red-500">
                  <FaPencilRuler className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Design</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  We craft intuitive UI/UX and system architecture.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-6 border-2 border-red-500">
                  <FaLaptop className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Development</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Agile sprints to bring the product to life.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-6 border-2 border-red-500">
                  <FaRocket className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Launch</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Testing, deployment, and ongoing scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powering Solutions Section */}
      <div className="bg-white text-center py-8 px-4 sm:px-6 md:px-[100px] w-full">
        <h4 className="text-sm font-bold text-gray-400 mb-5">Powering Solutions With</h4>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-xl">
          <h4>Laravel</h4>
          <h4>React</h4>
          <h4>Tailwind</h4>
          <h4>Python</h4>
          <h4>AWS</h4>
          <h4>OpenAI</h4>
        </div>
      </div>
    </section>
  );
};

export default Work;
