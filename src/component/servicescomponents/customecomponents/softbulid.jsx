import React from "react";
import { Link } from "react-router-dom";

const Softbulid = () => {
  return (
    <section className="w-full bg-white mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-white text-black shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium">
                Custom Software Engineering
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Software Built for <br />
              <span className="text-blue-600">Business Scale</span>
            </h1>

            <hr className="border-blue-200 border-2 mt-4 w-64 md:w-96" />

            <p className="text-gray-500 mt-6 max-w-xl">
              We don't just write code; we architect solutions. From complex
              CRM/ERP systems to high-performance SaaS platforms, we build the
              engine that powers your enterprise.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <button className="bg-blue-600 text-white rounded-xl text-lg px-6 py-3 hover:bg-blue-500 transition flex items-center">
                  Start Your Project <span className="ml-2 font-bold">→</span>
                </button>
              </Link>

              <Link to="/portfolio">
                <button className="border border-gray-300 rounded-xl text-lg px-6 py-3 hover:bg-gray-50 transition flex items-center">
                  View Case Studies <span className="ml-2 font-bold">→</span>
                </button>
              </Link>
            </div>

            <hr className="mt-10" />

            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <h2 className="text-3xl font-bold">99.9%</h2>
                <p className="text-sm text-gray-500 font-semibold">Uptime</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Enterprise</h2>
                <p className="text-sm text-gray-500 font-semibold">Security</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Scalable</h2>
                <p className="text-sm text-gray-500 font-semibold">Architecture</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl mb-6">
                🧳
              </div>
              <h3 className="text-xl font-semibold mb-2">SaaS Platforms</h3>
              <p className="text-gray-500">
                Multi-tenant cloud solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-purple-500 text-white flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-2">CRM & ERP</h3>
              <p className="text-gray-500">
                Workflow automation systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-green-500 text-white flex items-center justify-center text-2xl mb-6">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-500">
                iOS, Android & Cross-platform.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-6">
                &lt;/&gt;
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-500">
                Infrastructure as Code.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Softbulid;
