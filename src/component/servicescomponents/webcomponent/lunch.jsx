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
    <section className="w-full">
      <div className="w-full bg-gray-900 py-16 px-4 sm:px-10 lg:px-24 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-blue-800">How we work</h2>
          <h1 className="text-4xl font-bold text-white py-5">
            From Concept to Launch in 4 Weeks
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-9">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gray-700 text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border border-gray-500 transition-colors duration-300 hover:bg-blue-600">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lunch;
