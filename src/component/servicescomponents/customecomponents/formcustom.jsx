"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaMailBulk } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Formcustom = () => {
const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.service ||
    !formData.budget ||
    !formData.message
  ) {
    setSuccessMsg("❌ Please fill all required fields!");
    setTimeout(() => setSuccessMsg(""), 4000);
    return;
  }

  setLoading(true); // ✅ instant feedback

  try {
    const res = await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccessMsg("✅ Email received & sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } else {
      setSuccessMsg("❌ Failed to send email!");
    }

  } catch (error) {
    setSuccessMsg("❌ Server error!");
  }

  setLoading(false);

  setTimeout(() => setSuccessMsg(""), 4000);
};
  return (
    <section className="w-full bg-gray-50 overflow-hidden">

      {/* ✅ SUCCESS MESSAGE */}
      {successMsg && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {successMsg}
        </div>
      )}

      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="w-full bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[700px]">

            <div className="relative lg:w-[450px] xl:w-[500px] bg-gray-900 p-8 md:p-12 overflow-hidden flex flex-col justify-center">
              <span className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/20 to-transparent"></span>

              <div className="relative">
                <button className="text-blue-400 bg-blue-500/10 text-sm font-bold px-4 py-1.5 border border-blue-500/20 rounded-full mb-6">
                  Project Inquiry
                </button>

                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Let's architect your <span className="text-blue-500">solution.</span>
                </h1>

                <p className="text-gray-400 py-6 text-base lg:text-lg">
                  Fill out the form to schedule a technical consultation. We usually respond within 2 hours during business days.
                </p>

                <div className="space-y-8 pt-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                      <FaCheckCircle className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h1 className="font-bold text-white text-lg">NDA Protected</h1>
                      <p className="text-sm text-gray-400">Your idea is safe with us.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                      <FaRegMessage className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h1 className="font-bold text-white text-lg">Fast Response</h1>
                      <p className="text-sm text-gray-400">Quick replies from our experts.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Direct Contact</p>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <FaMailBulk className="text-white w-5 h-5" />
                    </div>
                    <h1 className="text-white text-lg md:text-xl font-bold group-hover:text-blue-400 transition-colors">
                      axoraweb@gmail.com
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full p-8 md:p-12 lg:p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto lg:mx-0">

                <div>
                  <label className="block text-slate-700 font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ali Hamza"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-bold mb-2" htmlFor="email">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="axorawebsolution.com"
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-2" htmlFor="phone">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 3091419331"
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-bold mb-2" htmlFor="service">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 appearance-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="ai-ml">AI Machine Learning</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-2" htmlFor="budget">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. $10k-$25k"
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2" htmlFor="message">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, timeline, requirements..."
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all"
                    rows="4"
                  ></textarea>
                </div>

                {/* ... SAME FIELDS ... */}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-bold py-5 px-6 rounded-2xl hover:bg-blue-700 transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Request Quote"}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Formcustom;