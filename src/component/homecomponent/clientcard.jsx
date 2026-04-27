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
     <section className="px-4 py-12 md:py-20">
  <div className="w-full max-w-3xl bg-gray-900 rounded-[2.5rem] p-8 md:p-14 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group mx-auto">
    
    {/* Decoration (Consistency ke liye same circle use kiya hai) */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
    
    <div className="z-10">
      <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
        Ready to Write Your <br className="hidden md:block" /> Success Story?
      </h2>
      <p className="text-gray-400 mt-4 mb-8 text-base md:text-lg max-w-[300px] md:max-w-none mx-auto">
        Join 300+ companies transforming their business with custom software. Let's discuss your vision today.
      </p>
    </div>

    <div className="z-10 w-full md:w-auto">
      <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 active:scale-95">
        Get Your Free Quote
      </button>
    </div>
    
  </div>
</section>
    </section>
  );
};

export default Clientcard;
