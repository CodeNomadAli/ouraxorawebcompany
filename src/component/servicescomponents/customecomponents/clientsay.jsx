import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Clientsay = () => {
 const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO",
    initials: "SJ",
    project: "Custom CRM",
    text: "The team delivered a <b>stunning CRM application</b> that completely transformed our workflow. Everything feels faster, cleaner, and easier to manage now.",
  },
  {
    name: "Michael Chen",
    title: "Founder",
    initials: "MC",
    project: "Mobile App",
    text: "Their mobile app expertise turned our vision into a real product. We saw a <b>huge jump in user engagement</b> just weeks after launch.",
  },
  {
    name: "Emily Rodriguez",
    title: "COO",
    initials: "ER",
    project: "HRM System",
    text: "They built a scalable HRM system that aligned perfectly with our internal processes. The communication was clear and the delivery was on point.",
  },

  // Muslim / Pakistan
  {
    name: "Ahmed Raza",
    title: "Business Owner",
    initials: "AR",
    project: "E-Commerce Website",
    text: "Honestly, I was impressed by their commitment and honesty. They delivered a <b>fast and secure e-commerce store</b> that helped grow my online sales.",
  },

  // India
  {
    name: "Priya Sharma",
    title: "Product Manager",
    initials: "PS",
    project: "SaaS Dashboard",
    text: "The dashboard they built is clean, user-friendly, and powerful. My team now makes decisions faster thanks to the <b>real-time insights</b>.",
  },

  // UK
  {
    name: "James Wilson",
    title: "Operations Manager",
    initials: "JW",
    project: "Company Website Revamp",
    text: "Our website finally looks modern and professional. The performance improvements and responsive design made a <b>real difference</b> for our clients.",
  },

  // USA
  {
    name: "David Miller",
    title: "Startup Founder",
    initials: "DM",
    project: "MVP Development",
    text: "They helped us launch our MVP on time and within budget. The code quality and guidance we received were <b>exceptional for an early-stage startup</b>.",
  },

  // Middle East
  {
    name: "Fatima Al-Hassan",
    title: "Marketing Director",
    initials: "FH",
    project: "Landing Pages",
    text: "The landing pages converted better than we expected. The design, speed, and messaging were perfectly aligned with our brand goals.",
  },

  // Canada
  {
    name: "Omar Khan",
    title: "Tech Consultant",
    initials: "OK",
    project: "API Integration",
    text: "Their API integration work was smooth and well-documented. Everything worked flawlessly, saving us <b>weeks of development time</b>.",
  },
];

  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="pt-24 py-20 px-[100px] text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-red-200 bg-blue-50 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
          <span className="text-xs font-medium">Trust & Results</span>
        </div>

        <h1 className="text-5xl font-bold px-5 py-5">
          Client Success <span className="text-blue-600">Stories</span>
        </h1>

        <p className="text-xl px-5">
          Don't just take our word for it. Hear from the founders and directors who have <br />
          trusted us with their critical software infrastructure.
        </p>
      </div>

      {/* Testimonials Swiper */}
      <section className="py-10 px-[100px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false} // hidden arrows – you can enable if desired
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-[370px] mx-auto h-[400px] border-[1px] group hover:shadow-2xl border-gray-300 rounded-lg p-7 transition-shadow">
                <div className="flex items-center justify-between w-full">
                  <p className="text-yellow-400 text-xl">
                    ★ ★ ★ ★ ★
                  </p>
                  <FaQuoteLeft className="text-6xl p-4 group-hover:text-black text-gray-300 transition-colors" />
                </div>

                <p
                  className="text-base text-gray-500 py-3"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />

                <div className="flex py-7 gap-5 items-center">
                  <div className="bg-blue-100 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-bold">
                      {item.name} <br />
                      <span className="text-sm text-gray-500 font-normal">
                        {item.title}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500">Project: {item.project}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-[100px] py-20">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center h-[300px] rounded-2xl bg-gray-900">
          <h2 className="font-bold mb-4 text-white text-2xl md:text-3xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Join 300+ companies transforming their business with custom software. Let's discuss your <br />
            vision today.
          </p>
           <Link to="/contact"><button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Get Your Free Quote
          </button></Link>
        </div>
      </section>
    </section>
  );
};

export default Clientsay;