import React, { useState } from "react";

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
        <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Body */}
      {open && (
        <div className="px-4 py-3 text-gray-700 border-t bg-white  border-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gray-50 w-full py-20 px-[100px] flex flex-col items-center text-center">

      <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-red-200 bg-blue-50 text-blue-500 shadow-sm">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="text-sm font-medium">Common Queries</span>
      </div>

      <h1 className="text-5xl font-bold py-5">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>

      <p className="text-xl max-w-3xl mb-10">
        Everything you need to know about our development process, pricing, and support.
      </p>

      {/* FAQ */}
      <div className="w-full max-w-3xl py-10">
        <FAQItem
          question="1. What type of application do you develop?"
          answer="We specialize in crafting web, mobile, and desktop applications, including custom CRM, HRM, and RSM systems. Our solutions are tailored to your business needs, ensuring scalability, user-focused design, and seamless performance across platforms."
        />
        <FAQItem
          question="How long does it take to develop a custom application?"
          answer="The timeline varies based on project complexity and requirements. A simple application may take 4-8 weeks, while complex systems like CRM or HRM can take 3-6 months. We provide a detailed timeline during our initial consultation."
        />
        <FAQItem
          question="3. Do you offer support and maintenance?"
          answer="Yes, we provide comprehensive support and maintenance packages, including regular updates, performance optimization, security monitoring, and technical support to ensure your application remains robust and efficient."
        />

          <FAQItem
          question="Can you modernize or upgrade my existing application?"
          answer="Absolutely. We specialize in analyzing and upgrading existing applications to improve functionality, scalability, and user experience while aligning with your current business goals and brand identity."
        />

          <FAQItem
          question="What is included in your software development services?"
          answer="Our services include custom design and development, responsive and scalable architecture, integration with CRM, HRM, or RSM systems, performance optimization, cross-platform compatibility, and post-launch support with training for your team.."
        />

          <FAQItem
          question="How much does it cost to develop a custom application?"
          answer="Costs depend on the project’s scope and complexity. Basic applications start at $5,000, while advanced systems like CRM or HRM may range from $20,000 to $100,000+. Contact us for a tailored quote based on your needs."
        />
      </div>


  <div className="w-full max-w-3xl bg-gray-900 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-12 mx-auto h-auto md:h-[150px]">
    <div className="text-center md:text-left">
    <h1 className="text-xl md:text-2xl font-bold text-white">Still have questions?</h1>
    <p className="text-sm md:text-base text-gray-300 mt-2">Our technical team is ready to help you define your scope.</p>
  </div>

  <div className="flex justify-center md:justify-end w-full md:w-auto">
      <a target="_blank" href="https://calendly.com/axoraweb/30min"> <button className="bg-white text-black px-4 md:px-6 py-2 rounded-lg text-base md:text-xl hover:bg-gray-200">Chat with an Expert</button></a>
  </div>

</div>

    </section>
  );
};

export default FAQ;
