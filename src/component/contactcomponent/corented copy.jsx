import React, { useState } from "react";
import { FaShieldAlt, FaQuoteLeft } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full text-left px-4 py-4 bg-white text-black font-semibold flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="pr-4">{question}</span>
        <span className={`transition-transform duration-300 text-xs ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="px-4 py-4 text-gray-700 border-t bg-white border-gray-200 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const Corented = () => {
  return (
    <section className="w-full overflow-hidden">
      
      {/* 1. Intellectual Property Section - Fixed Width */}
      <div className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-[1000px] bg-gray-900 rounded-2xl p-8 sm:p-14 shadow-2xl shadow-blue-900/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 bg-blue-500/10 rounded-[30px] border border-blue-500/20">
                  <FaShieldAlt className="text-blue-500 w-12 h-12" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Concerned about Intellectual Property?
                </h1>
                <p className="text-base text-gray-400 py-4 leading-relaxed">
                  We are a US-registered entity. We provide a signed Non-Disclosure Agreement (NDA)
                  before our first call. You own 100% of the code we write.
                </p>
                <h3 className="text-blue-500 font-bold py-2 hover:text-white cursor-pointer transition-colors inline-block">
                  <u className="decoration-blue-500/50 underline-offset-4">Download our Standard NDA Template</u>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Testimonial Section - Fixed Width */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaQuoteLeft className="text-5xl sm:text-7xl text-blue-100 mx-auto mb-6" />
          <p className="text-xl sm:text-2xl md:text-4xl font-bold py-3 leading-tight max-w-4xl mx-auto text-slate-900">
            "They were the only agency that actually read our brief before the first meeting. The project was delivered 2 weeks early and under budget."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex justify-center items-center font-bold text-xl text-blue-700 border-2 border-blue-100">
              DS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-xl text-slate-900">David Stevenson</h1>
              <p className="text-gray-500 font-medium">CTO</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* 3. FAQ Section - Fixed Width */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
            Common Questions
          </h1>
          <div className="w-full max-w-3xl mx-auto">
            <FAQItem
              question="What is your typical project minimum?"
              answer="Our typical engagements start at $5,000 for small components or MVP planning. Full-scale development projects usually range from $15,000 to $100,000+."
            />
            <FAQItem
              question="Do you provide post-launch support?"
              answer="Yes. All our plans include a warranty period (1-6 months). After that, we offer retainer packages for updates, server maintenance, and new features."
            />
            <FAQItem
              question="How fast can you start?"
              answer="Depending on our current load, we can usually kickoff discovery within 2-3 business days after the contract is signed."
            />
          </div>
        </div>
      </div>

      {/* 4. CTA Section - Fixed Width */}
      <div className="w-full bg-white text-center py-20 border-t border-gray-100">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Hate filling out forms?</h1>
          <p className="text-gray-600 py-4 text-base sm:text-lg max-w-xl mx-auto">
            Skip the email tag. Book a 15-minute intro call directly on our calendar.
          </p>
          <a target="_blank" href="https://calendly.com/axoraweb/30min" rel="noreferrer" className="inline-block mt-4">
            <button className="border-2 border-slate-300 px-8 py-4 rounded-2xl font-bold text-slate-700 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50/50 transition-all duration-300 shadow-sm active:scale-95">
              Book a Meeting via Calendly
            </button>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Corented;