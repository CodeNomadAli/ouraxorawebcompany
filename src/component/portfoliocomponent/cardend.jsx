import React from "react";

const Cardbulid = () => {
  return (
    <section>
      {/* Testimonials */}
      <div className="w-full bg-gray-50 px-4 sm:px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="border p-6 shadow hover:shadow-xl rounded-xl bg-white transition">
            <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="text-sm font-semibold py-2 text-gray-600 italic">
              "The team transformed our outdated legacy system into a sleek, AI-powered platform. Efficiency increased by 200% in the first month."
            </p>
            <div className="flex gap-3 py-3 items-center">
              <div className="w-12 h-12 rounded-full bg-green-400 text-black font-bold flex items-center justify-center">
                JD
              </div>
              <div>
                <h1 className="text-sm font-bold">
                  John Doe <br />
                  <span className="text-gray-400">CTO, FinanceCorp</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border p-6 shadow hover:shadow-xl rounded-xl bg-white transition">
            <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="text-sm font-semibold py-2 text-gray-600 italic">
              "Their understanding of both design and complex backend logic is rare. They didn't just build what we asked for, they improved upon it."
            </p>
            <div className="flex gap-3 py-3 items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 text-black font-bold flex items-center justify-center">
                SS
              </div>
              <div>
                <h1 className="text-sm font-bold">
                  Sarah Smith <br />
                  <span className="text-gray-400">Founder, StartUpX</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-800 text-center px-4 sm:px-6 md:px-12 py-16 bg-[radial-gradient(circle_at_center,rgba(139,48,48,0.5)_0%,rgba(0,0,0,1)_70%)]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Ready to Build Something <br /> Extraordinary?
        </h1>
        <p className="text-gray-300 py-6 text-sm sm:text-base">
          Whether you need a custom web platform or an AI-driven solution, our team is ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-4">
          <button className="text-white bg-blue-600 rounded-xl text-lg px-6 py-3 hover:bg-blue-500 transition">
            Get an Estimate
          </button>
          <button className="text-white bg-gray-500 rounded-xl text-lg px-6 py-3 hover:bg-gray-600 transition">
            Book a Consultation
          </button>
        </div>
        <p className="text-sm text-gray-500 py-6">
          Trusted by 50+ innovative companies worldwide.
        </p>
      </div>
    </section>
  );
};

export default Cardbulid;
