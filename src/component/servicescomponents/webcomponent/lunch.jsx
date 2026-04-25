import React from "react";

const Lunch = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We deep dive into your brand, competitors, and goals to create a winning strategy.",
    },
    {
      number: "02",
      title: "Design",
      desc: "We create high-fidelity UI mockups. You see exactly how it looks before we code.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Clean, semantic coding using Laravel & Tailwind. Optimized for speed and security.",
    },
    {
      number: "04",
      title: "Launch",
      desc: "Deployment to cloud servers, domain setup, and basic SEO indexing. We handle IT.",
    },
  ];

  return (
    <section className="w-full bg-gray-900">
      {/* Container with standard max-width and responsive padding */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto py-16 md:py-24 px-4 md:px-0 lg:px-8 text-center">
        
        {/* Header Section */}
        <div className="px-4">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest">How we work</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white py-5">
            From Concept to Launch in 4 Weeks
          </h1>
        </div>

        {/* Steps Grid - Stacked on 768px (md), 4-cols on 1024px (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 px-4 md:px-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-full bg-gray-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border border-gray-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              
              {/* Description - Fixed width limit only on large screens */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[280px] lg:max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Lunch;