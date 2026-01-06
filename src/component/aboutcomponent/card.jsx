import React from "react";
import { Link } from "react-router-dom";

const Cardabout = () => {
  return (
    <section className="w-full">
      {/* Features Cards */}
      <div className="w-full bg-gray-50 px-4 sm:px-6 md:px-[100px] py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
          <div className="w-full h-auto border-[1px] border-t-red-500 border-t-[4px] p-6 sm:p-8 shadow hover:shadow-xl rounded-xl bg-white">
            <h1 className="text-lg sm:text-xl font-bold">Radical Transparency</h1>
            <p className="text-gray-700 py-2 text-sm sm:text-base">
              No hidden fees. No tech jargon used to confuse you. You have full access to our project boards and code repositories.
            </p>
          </div>

          <div className="w-full h-auto border-[1px] border-t-blue-500 border-t-[4px] p-6 sm:p-8 shadow hover:shadow-xl rounded-xl bg-white">
            <h1 className="text-lg sm:text-xl font-bold">Innovation First</h1>
            <p className="text-gray-700 py-2 text-sm sm:text-base">
              We don't use old tech. We leverage the latest in AI, React, and Laravel to give you a competitive advantage.
            </p>
          </div>

          <div className="w-full h-auto border-[1px] border-t-yellow-200 border-t-[4px] p-6 sm:p-8 shadow hover:shadow-xl rounded-xl bg-white">
            <h1 className="text-lg sm:text-xl font-bold">Results Obsessed</h1>
            <p className="text-gray-700 py-2 text-sm sm:text-base">
              We don't care about vanity metrics. We care about ROI, User Retention, and Scalability. If it doesn't grow your business, we don't build it.
            </p>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="w-full bg-gray-50 px-4 sm:px-6 md:px-[100px] py-12 md:py-16">
        <div className="text-center">
          <h4 className="text-sm sm:text-base text-blue-600 font-bold">Social Proof</h4>
          <h1 className="text-2xl sm:text-4xl font-bold py-1">What Our Clients Say</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 py-6 md:py-12">
          {/* Testimonial Card */}
          <div className="w-full h-auto border-[1px] p-5 shadow hover:shadow-xl rounded-xl bg-white">
            <p className="text-blue-600 text-lg">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="text-sm sm:text-2sm text-gray-600">
              "<i>They didn't just build a website; they built a revenue machine. Our conversions doubled in 3 months.</i>"
            </p>
            <div className="flex gap-3 py-3 items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200 text-blue-700 font-bold flex items-center justify-center">J</div>
              <div>
                <h1 className="text-sm sm:text-2sm font-bold">
                  James L. <br />
                  <span className="text-gray-400">CTO,</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full h-auto border-[1px] p-5 shadow hover:shadow-xl rounded-xl bg-white">
            <p className="text-blue-600 text-lg">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="text-sm sm:text-2sm text-gray-600">
              "<i>Professional, transparent, and insanely talented. Best agency experience I've had in 10 years.</i>"
            </p>
            <div className="flex gap-3 py-3 items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200 text-blue-700 font-bold flex items-center justify-center">D</div>
              <div>
                <h1 className="text-sm sm:text-2sm font-bold">
                  David K. <br />
                  <span className="text-gray-400">Founder,</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full h-auto border-[1px] p-5 shadow hover:shadow-xl rounded-xl bg-white">
            <p className="text-blue-600 text-lg">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="text-sm sm:text-2sm text-gray-600">
              "<i>Their design team has a gift for making complex data look simple and beautiful</i>"
            </p>
            <div className="flex gap-3 py-3 items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200 text-blue-700 font-bold flex items-center justify-center">S</div>
              <div>
                <h1 className="text-sm sm:text-2sm font-bold">
                  Sophie B. <br />
                  <span className="text-gray-400">Product Owner,</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Add remaining testimonials similarly */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-blue-600">5+</h1>
              <p className="mt-2 font-bold text-lg sm:text-xl md:text-xl text-gray-600">Years Experience</p>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-blue-600">12</h1>
              <p className="mt-2 font-bold text-lg sm:text-xl md:text-xl text-gray-600">Countries Served</p>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-blue-600">$50M+</h1>
              <p className="mt-2 font-bold text-lg sm:text-xl md:text-xl text-gray-600">Client Revenue Generated</p>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-blue-600">100%</h1>
              <p className="mt-2 font-bold text-lg sm:text-xl md:text-xl text-gray-600">Project Delivery Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-tr from-blue-600 via-black to-red-600 text-center py-12 md:py-16 px-4 sm:px-6 md:px-[100px]">
        <p className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
          Not Ready to Start a Project?
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 py-2 sm:py-4">
          That's okay. Join 5,000+ CTOs and Founders who get our weekly insights <br /> on AI trends, scalable architecture, and market shifts.
        </p>
        <p className="text-blue-500 text-lg sm:text-xl font-bold">
          Plus, get our "2025 Tech Stack Audit Checklist" for free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email work..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-500 text-white"
          />
          <button className="text-white bg-blue-600 rounded-xl text-lg sm:text-xl px-4 py-3 flex justify-center">
            Get the Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cardabout;
