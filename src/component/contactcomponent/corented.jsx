import React, { useState } from "react";
import { FaShieldAlt, FaQuoteLeft } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      {/* Header */}
      <button
        className="w-full text-left px-4 py-3 bg-white text-black font-semibold rounded-lg flex justify-between items-center focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {/* Body */}
      {open && (
        <div className="px-4 py-3 text-gray-700 border-t bg-white border-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const Corented = () => {
  return (
    <section className="w-full">
      {/* Intellectual Property Section */}
      <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-[900px] bg-gray-900 rounded-xl p-6 sm:p-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-center">
            <div className="py-5 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#2a1724] rounded-[30px]">
                <FaShieldAlt className="text-blue-500 w-12 h-12" />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Concerned about Intellectual Property?
              </h1>
              <p className="text-sm sm:text-base text-gray-400 py-2 sm:py-3">
                We are a US-registered entity. We provide a signed Non-Disclosure Agreement (NDA)
                before our first call. You own 100% of the code we write.
              </p>
              <h3 className="text-blue-600 text-sm sm:text-base py-3 hover:text-white cursor-pointer">
                <u>Download our Standard NDA Template</u>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-white text-center py-12 px-4 sm:px-6 md:px-12">
        <FaQuoteLeft className="text-6xl sm:text-7xl text-blue-200 mx-auto mb-4" />
        <p className="text-lg sm:text-2xl md:text-3xl font-bold py-3 leading-snug">
          "They were the only agency that actually read <br />
          our brief before the first meeting. The project <br />
          was delivered 2 weeks early and under budget."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-200 rounded-full flex justify-center items-center font-bold text-xl sm:text-2xl border-red-600 border">
            DS
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-xl">David Stevenson</h1>
            <p className="text-gray-600 text-sm sm:text-base">CTO</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />

      {/* FAQ Section */}
      <div className="w-full bg-gray-50 py-14 px-4 sm:px-6 md:px-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Common Questions
        </h1>
        <div className="w-full max-w-3xl mx-auto text-left">
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

      {/* Call-to-Action Section */}
      <div className="w-full bg-white text-center py-14 px-4 sm:px-6 md:px-12">
        <h1 className="text-xl sm:text-2xl font-bold">Hate filling out forms?</h1>
        <p className="text-gray-600 py-3 text-sm sm:text-base">
          Skip the email tag. Book a 15-minute intro call directly on our calendar.
        </p>
        <a target="_blank" href="https://calendly.com/axoraweb/30min" rel="noreferrer">
          <button className="border-2 border-gray-400 mt-3 px-5 py-3 rounded-xl font-bold hover:text-blue-600 hover:border-red-600 transition-colors duration-300">
            Book a Meeting via Calendly
          </button>
        </a>
      </div>
    </section>
  );
};

export default Corented;
