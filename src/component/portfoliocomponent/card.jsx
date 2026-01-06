import React from "react";

const Card = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 md:px-12 text-center py-20 bg-gray-50">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold">Selected Works</h1>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-5">
          <button className="text-white bg-black rounded-2xl text-sm px-3 py-2 border-2 border-gray-300 hover:border-red-400">
            All
          </button>
          <button className="text-black bg-white rounded-2xl text-sm px-3 py-2 border-2 border-gray-300 hover:border-red-400">
            Web Development
          </button>
          <button className="text-black bg-white rounded-2xl text-sm px-3 py-2 border-2 border-gray-300 hover:border-red-400">
            Mobile App
          </button>
          <button className="text-black bg-white rounded-2xl text-sm px-3 py-2 border-2 border-gray-300 hover:border-red-400">
            UI/UX Design
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full px-4 sm:px-6 md:px-12 bg-gray-50 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {/* Card Template */}
          {[
            {
              category: "ECOMMERCE",
              title: "Omrolo",
              description:
                "Real-time anomaly detection system processing 10M+ transactions with daily 99.9% accuracy.",
              img: "/omorlo-presentation.png",
              tags: ["Laravel", "Livewire", "Tailwind CSS"],
            },
            {
              category: "FLUTTER",
              title: "Swish Social",
              description:
                "Cross-platform mobile shopping experience with AR product try-on capabilities.",
              img: "/swish.jpg",
              tags: ["Flutter", "Laravel", "Stripe"],
            },
            {
              category: "UI/UX DESIGN",
              title: "Mobile Screens",
              description:
                "Complete UX overhaul resulting in a 40% increase in user retention and session time.",
              img: "/mobile-screens.png",
              tags: ["Figma"],
            },
            {
              category: "WEB DEVELOPMENT",
              title: "E-COMMERCE",
              description:
                "Enterprise-grade portal for internal resource management and employee engagement.",
              img: "/ecommerce.png",
              tags: ["Vue.js", "Laravel", "AWS"],
            },
            {
              category: "WEB DEVELOPMENT",
              title: "Billionary Investment Tool",
              description:
                "SaaS platform leveraging LLMs to generate marketing copy in seconds.",
              img: "/billanory (2).png",
              tags: ["OpenAI API", "Next.js", "Node.js"],
            },
            {
              category: "MOBILE APP",
              title: "Grocery Order",
              description:
                "Secure patient data management system with telemedicine integration.",
              img: "/food .png",
              tags: ["React Native", "Tailwind CSS"],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-300 rounded-2xl overflow-hidden group hover:shadow-xl hover:border-red-300 transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                  View Case Study
                </button>
              </div>
              <div className="p-5">
                <h5 className="text-sm text-blue-500 font-medium">{card.category}</h5>
                <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">
                  {card.title}
                </h1>
                <p className="text-sm text-gray-700">{card.description}</p>
                <div className="flex flex-wrap gap-3 py-5">
                  {card.tags.map((tag, idx) => (
                    <button
                      key={idx}
                      className="text-black bg-gray-50 rounded-xl text-xs px-2 py-1 border border-gray-300 hover:border-red-400"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
