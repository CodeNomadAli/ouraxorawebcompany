import React, { useState } from "react";
import { FaClock, FaShieldAlt } from "react-icons/fa";

const Projects = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [toast, setToast] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [attemptSubmit, setAttemptSubmit] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAttemptSubmit(true);

    // ❌ privacy check
    if (!agreed) {
      setToast({ type: "error", text: "❌ Please agree to Privacy Policy!" });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    // ❌ validation
    if (!formData.name || !formData.email || !formData.message) {
      setToast({ type: "error", text: "❌ Please fill required fields!" });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setLoading(true); // START SENDING

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
        setToast({ type: "success", text: "✅ Email received & sent successfully!" });

        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });

        setAgreed(false);
        setAttemptSubmit(false);

      } else {
        setToast({ type: "error", text: "❌ Failed to send email!" });
      }

    } catch (error) {
      setToast({ type: "error", text: "❌ Server error!" });
    }

    setLoading(false);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <section className="w-full bg-gray-50 py-24 md:py-32 overflow-hidden">

      {/* TOAST MESSAGE */}
      {toast && (
        <div className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl text-white shadow-lg z-50 ${
          toast.type === "success" ? "bg-green-600" : "bg-red-600"
        }`}>
          {toast.text}
        </div>
      )}

      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE - ORIGINAL TEXT */}
          <div className="w-full">

            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full border border-green-100 bg-green-50 shadow-sm">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span className="text-xs font-medium text-green-600">
                Accepting New Projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-5 leading-tight">
              Let's Engineer <br /> Your
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 text-blue-600">
              Next Breakthrough
            </h2>

            <p className="text-gray-600 text-base sm:text-lg py-4 max-w-xl">
              Ready to automate your business or build the next SaaS unicorn? Fill out the form, and our engineering team will review your requirements.
            </p>

            <div className="py-8 space-y-5">

              <div className="flex gap-4 items-start">
                <FaClock className="text-blue-500 w-10 h-10 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Response in 24 Hours</h3>
                  <p className="text-sm text-gray-600">
                    Guaranteed response from a senior dev, not a bot.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaShieldAlt className="text-blue-500 w-10 h-10 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Mutual NDA Included</h3>
                  <p className="text-sm text-gray-600">
                    Your Intellectual Property is safe from day one.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT FORM - ORIGINAL DESIGN */}
          <div className="w-full bg-white shadow-2xl shadow-blue-200 rounded-xl p-6 sm:p-10 border border-gray-50">

            <form className="w-full" onSubmit={handleSubmit}>

              <h1 className="text-xl font-bold mb-6">
                Tell us about your project
              </h1>

              {/* NAME + EMAIL */}
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ali Hamza"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="axoraweb@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>

              </div>

              {/* SERVICE + BUDGET */}
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  >
                    <option value="">Service Needed</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="ai-ml">AI / Machine Learning</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  >
                    <option value="">Select price</option>
                    <option value="$5k-$10k">$8-$36</option>
                    <option value="$10k-$25k">$72k-$180</option>
                    <option value="$25k-$50k">$180+</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              </div>

              {/* PRIVACY CHECKBOX */}
              <div className="flex items-start gap-2 mb-6">

                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />

                <label
                  className={`text-xs ${
                    !agreed && attemptSubmit ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  I agree to the Privacy Policy. Data is 256-bit encrypted.
                </label>

              </div>

              {/* SUBMIT */}
              <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-bold py-5 px-6 rounded-2xl hover:bg-blue-700 transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Request Quote"}
                  </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;