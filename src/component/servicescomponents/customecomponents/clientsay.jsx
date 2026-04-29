"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Clientsay = () => {
  // --- Standard Premium Animation Settings ---
  const premiumTransition = {
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: premiumTransition,
    },
  };

  return (
    <section className="w-full bg-white overflow-hidden font-sans">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="pt-24 pb-12 text-center flex flex-col items-center">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
            <span className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider">Trust & Results</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold py-5 text-gray-900 leading-tight">
            Client Success <span className="text-blue-600">Stories</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed font-normal">
            Don't just take our word for it. Hear from the founders and directors who have <br className="hidden sm:block" />
            trusted us with their critical software infrastructure.
          </motion.p>
        </div>

        {/* Swiper Testimonials */}
        <motion.div variants={itemVariants} className="py-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper pb-16"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="w-full h-[420px] flex flex-col border border-gray-200 bg-white rounded-3xl p-8 group hover:shadow-2xl transition-all duration-300 border-b-4 hover:border-b-blue-600">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-5xl p-2 group-hover:text-blue-600 text-gray-100 transition-colors" />
                </div>
                <p className="text-base text-gray-600 py-4 leading-relaxed flex-grow">
                  The team delivered a <b>stunning CRM application</b> that completely transformed our workflow. Everything feels faster, cleaner, and easier to manage now.
                </p>
                <div className="mt-auto">
                  <div className="flex py-6 gap-4 items-center">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-lg shadow-inner">SJ</div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">Sarah Johnson</p>
                      <p className="text-xs text-gray-500 font-medium">CEO</p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[2px]">Project: Custom CRM</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="w-full h-[420px] flex flex-col border border-gray-200 bg-white rounded-3xl p-8 group hover:shadow-2xl transition-all duration-300 border-b-4 hover:border-b-blue-600">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-5xl p-2 group-hover:text-blue-600 text-gray-100 transition-colors" />
                </div>
                <p className="text-base text-gray-600 py-4 leading-relaxed flex-grow">
                  Their mobile app expertise turned our vision into a real product. We saw a <b>huge jump in user engagement</b> just weeks after launch.
                </p>
                <div className="mt-auto">
                  <div className="flex py-6 gap-4 items-center">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-lg shadow-inner">MC</div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">Michael Chen</p>
                      <p className="text-xs text-gray-500 font-medium">Founder</p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[2px]">Project: Mobile App</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="w-full h-[420px] flex flex-col border border-gray-200 bg-white rounded-3xl p-8 group hover:shadow-2xl transition-all duration-300 border-b-4 hover:border-b-blue-600">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-5xl p-2 group-hover:text-blue-600 text-gray-100 transition-colors" />
                </div>
                <p className="text-base text-gray-600 py-4 leading-relaxed flex-grow">
                  They built a scalable HRM system that aligned perfectly with our internal processes. The communication was clear and the delivery was on point.
                </p>
                <div className="mt-auto">
                  <div className="flex py-6 gap-4 items-center">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-lg shadow-inner">ER</div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">Emily Rodriguez</p>
                      <p className="text-xs text-gray-500 font-medium">COO</p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[2px]">Project: HRM System</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="w-full h-[420px] flex flex-col border border-gray-200 bg-white rounded-3xl p-8 group hover:shadow-2xl transition-all duration-300 border-b-4 hover:border-b-blue-600">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" /><FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-5xl p-2 group-hover:text-blue-600 text-gray-100 transition-colors" />
                </div>
                <p className="text-base text-gray-600 py-4 leading-relaxed flex-grow">
                  Honestly, I was impressed by their commitment and honesty. They delivered a <b>fast and secure e-commerce store</b> that helped grow sales.
                </p>
                <div className="mt-auto">
                  <div className="flex py-6 gap-4 items-center">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-lg shadow-inner">AR</div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">Ahmed Raza</p>
                      <p className="text-xs text-gray-500 font-medium">Business Owner</p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[2px]">Project: E-Commerce</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="py-20 px-4 sm:px-0">
          <div className="w-full max-w-4xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center justify-center text-center rounded-[2.5rem] bg-gray-900 shadow-2xl relative overflow-hidden">
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 opacity-10 rounded-full -mr-24 -mt-24 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full -ml-24 -mb-24 blur-2xl"></div>

            <div className="z-10 flex flex-col items-center">
              <h2 className="font-bold mb-3 text-2xl md:text-4xl text-white leading-tight">
                Ready to Write Your <br className="hidden md:block" /> Success Story?
              </h2>

              <p className="text-gray-400 mb-6 text-sm md:text-lg max-w-[300px] md:max-w-2xl leading-relaxed">
                Join 300+ companies transforming their business with custom software.
              </p>

              <Link to="/contact" className="w-full sm:w-auto flex justify-center">
                <button className="w-[85%] sm:w-auto bg-blue-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-900/30">
                  Get Your Free Quote
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Clientsay;