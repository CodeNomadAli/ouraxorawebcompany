import React from "react";

const Concept = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We dig deep into your business logic. We define user personas, technical requirements, and the roadmap.",
      number: "01",
      active: true,
    },
    {
      title: "Architecture & Design",
      description:
        "We architect the database, select the tech stack, and design high-fidelity UI/UX prototypes. No code is written until the blueprint is perfect.",
      number: "02",
    },
    {
      title: "Agile Development",
      description:
        "Our engineers work in two-week sprints. You get regular updates and demos, ensuring the software evolves exactly as you envisioned.",
      number: "03",
    },
    {
      title: "QA & Deployment",
      description:
        "Rigorous automated and manual testing ensures stability. Once approved, we manage the seamless deployment to your cloud infrastructure.",
      number: "04",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      {/* Header */}
      <div className="w-full text-center px-6">
        <h1 className="text-sm text-blue-600 font-bold">Our Methodology</h1>
        <h2 className="text-4xl font-bold py-3">
          From Concept to <span className="text-blue-700">Code</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We follow a rigorous, agile-driven process to ensure your custom software
          is delivered on time, on budget, and bug-free.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 mt-16">
        {/* Vertical Line */}
        <div
          className="
            absolute top-0
            left-6 md:left-1/2
            h-full w-1
            bg-gray-200
            md:-translate-x-1/2
          "
        />

        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
            >
              {/* Content */}
              <div
                className={`
                  pl-16
                  md:pl-0
                  ${
                    isEven
                      ? "md:text-right md:pr-16"
                      : "md:col-start-2 md:text-left md:pl-16"
                  }
                `}
              >
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>

              {/* Number Marker (ON THE LINE) */}
              <div
                className="
                  absolute top-0
                  left-6 md:left-1/2
                  -translate-x-1/2
                "
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg ${
                    step.active
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black border-2 border-gray-200"
                  }`}
                >
                  {step.number}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Concept;
