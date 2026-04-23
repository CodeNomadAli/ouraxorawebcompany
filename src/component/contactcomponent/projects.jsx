"use client"; // For Next.js app directory
import React, { useState } from "react";
import { FaClock, FaShieldAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";



const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


   const sendEmail = async (formData) => {
  try {
    // 1️⃣ Send email to Admin
    const adminResult = await emailjs.send(
      "service_m80x3cs",
      "template_nijfdaw",
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        time: new Date().toLocaleString(),
        year: new Date().getFullYear(),
        reply_to: formData.email,
      },
      "w4X8Uw37-EG43JxmX"
    );

    // 2️⃣ Send Auto-Reply to User
  const autoReplyResult = await emailjs.send(
  "service_m80x3cs",
  "template_yxwtgnl",
  {
    name: formData.name,
    title: formData.service,

  },
  "w4X8Uw37-EG43JxmX"
);

console.log("Auto-reply result:", autoReplyResult);


    return {
      success: true,
      adminResult,
      autoReplyResult,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");
  setError("");

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    service: e.target.service.value,
    budget: e.target.budget.value,
    message: e.target.message.value,
    privacy: e.target.privacy.checked,
  };

  if (!formData.privacy) {
    setError("You must agree to the Privacy Policy.");
    setLoading(false);
    return;
  }

  const res = await sendEmail(formData);

  if (res.success) {
    setSuccess("Message sent successfully. We’ll contact you shortly.");
    e.target.reset();
  } else {
    setError("Failed to send message. Please try again.");
  }

  setLoading(false);
};

  return (
    <section className="w-full bg-gray-50 py-32 px-4 sm:px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full border border-green-100 bg-green-50 shadow-sm">
            <span className="w-2 h-2 bg-green-300 rounded-full"></span>
            <span className="text-xs font-medium text-green-600">
              Accepting New Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-5">
            Let's Engineer <br /> Your
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 text-blue-600">
            Next Breakthrough
          </h2>

          <p className="text-gray-600 text-base sm:text-lg py-4">
            Ready to automate your business or build the next SaaS unicorn? Fill
            out the form, and our engineering team will review your requirements.
          </p>

          <div className="py-8 space-y-4">
            <div className="flex gap-3 items-start">
              <FaClock className="text-blue-500 w-10 h-10 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Response in 24 Hours</h3>
                <p className="text-sm text-gray-600">
                  Guaranteed response from a senior dev, not a bot.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FaShieldAlt className="text-blue-500 w-10 h-10 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Mutual NDA Included</h3>
                <p className="text-sm text-gray-600">
                  Your Intellectual Property is safe from day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-2xl shadow-blue-200 rounded-xl p-6 sm:p-10">
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold mb-6">Tell us about your project</h1>

            {/* Name & Email */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ali Hamza"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="axoraweb@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"
                  required
                />
              </div>
            </div>

            {/* Service & Budget */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mb-4">
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"
                >
                  <option value="">Service Needed</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="ai-ml">AI / Machine Learning</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"
                >
                  <option value="">Select price</option>
                  <option value="$5k-$10k">$5-$50</option>
                  <option value="$10k-$25k">$50-$100</option>
                  <option value="$25k-$50k">$100-$200</option>
                  <option value="$50k+">$500+</option>
                  <option value="0">No Idea </option>

                </select>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your goals, timeline, requirements..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
              ></textarea>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start gap-2 mb-6">
              <input type="checkbox" id="privacy" name="privacy" />
              <label htmlFor="privacy" className="text-xs text-gray-400">
                I agree to the Privacy Policy. Data is 256-bit encrypted.
              </label>
            </div>

            {/* Success / Error Messages */}
            {success && <p className="text-green-600 mb-2">{success}</p>}
            {error && <p className="text-red-600 mb-2">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } text-white font-bold py-2 px-4 rounded-lg transition-colors`}
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Projects;
