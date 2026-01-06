import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const clients = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "CEO",
    project: "Custom CRM",
    testimonial:
      'The team delivered a <b>stunning CRM application</b> that transformed our workflow. Their expertise in scalable solutions is unmatched, significantly boosting our operational efficiency.',
  },
  {
    initials: "MC",
    name: "Michael Chen",
    role: "Founder",
    project: "Mobile App",
    testimonial:
      'Their mobile app expertise turned our vision into a high-converting application. We saw a <b>200% increase in engagement</b> within weeks of launch.',
  },
  {
    initials: "ER",
    name: "Emily Rodriguez",
    role: "COO",
    project: "HRM System",
    testimonial:
      'They built a scalable HRM system that perfectly aligned with our needs. Their professionalism and innovative approach exceeded our expectations, <b>delivering exceptional results.</b>',
  },
];

const Clientcard = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Client Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg p-7 w-full max-w-[370px] h-auto group hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between w-full">
              <p className="text-yellow-400 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <FaQuoteLeft className="text-5xl md:text-6xl p-2 group-hover:text-black text-gray-300" />
            </div>
            <p
              className="text-sm text-gray-500 py-3"
              dangerouslySetInnerHTML={{ __html: client.testimonial }}
            />
            <div className="flex py-5 md:py-7 gap-5 items-center">
              <div className="bg-blue-100 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg">
                {client.initials}
              </div>
              <div className="text-left">
                <p className="font-bold">{client.name}</p>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Project: {client.project}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 md:px-12 py-20">
        <div className="w-full max-w-3xl px-6 md:px-10 flex flex-col items-center justify-center text-center rounded-2xl bg-gray-900 mx-auto">
          <h2 className="font-bold mb-4 text-white text-2xl md:text-3xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Join 300+ companies transforming their business with custom software.
            Let's discuss your <br /> vision today.
          </p>
          <button className="bg-blue-500 md:px-6 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </section>
  );
};

export default Clientcard;
