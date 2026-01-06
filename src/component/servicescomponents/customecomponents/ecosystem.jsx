import React from "react";
import { FaMobile, FaCheck } from "react-icons/fa";

const Ecosystem = () => {
  return (
    <section className="w-full px-6 md:px-[100px] bg-gray-50 py-20">
      {/* Header */}
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold">
          The <span className="text-blue-600">Complete</span> Ecosystem
        </h1>
        <p className="text-sm md:text-base py-4 text-gray-500">
          We don't just build isolated apps; we build interconnected systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-12">

        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="min-h-[210px] p-6 border border-gray-200 border-l-4 border-l-blue-500 hover:shadow-xl bg-white rounded-2xl">
            <h1 className="text-xl font-bold">Custom Software & Web</h1>
            <h2 className="text-sm text-gray-400 py-2">The command center of your business.</h2>
            <p className="text-gray-600">
              Scalable web applications and complex backend architectures designed for high-volume data processing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-h-[210px] p-6 border border-gray-200 border-l-4 border-l-blue-300 hover:shadow-xl bg-white rounded-2xl">
            <h1 className="text-xl font-bold">API & Integrations</h1>
            <h2 className="text-sm text-gray-400 py-2">Connecting your tools.</h2>
            <p className="text-gray-600">
              Unifying your ERP, CRM, and third-party tools into one seamless workflow.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <div className="bg-blue-900 p-8 rounded-2xl flex flex-col h-full justify-between">
            <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mb-4">
              <FaMobile className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white py-3">Mobile Applications</h1>
            <p className="text-gray-100 mb-4">
              Extend your enterprise capability to the palm of your hand. We build native iOS and Android apps that sync instantly with your central software.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-3">
                <FaCheck className="text-blue-500" />
                <p className="text-sm text-gray-100 font-bold">Field Workforce Apps</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-blue-500" />
                <p className="text-sm text-gray-100 font-bold">Customer Client Portals</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-blue-500" />
                <p className="text-sm text-gray-100 font-bold">Offline-First Architecture</p>
              </div>
            </div>
            <a href="#" className="text-white text-xl font-semibold hover:underline">
              View Mobile Cases →
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="min-h-[210px] p-6 border border-gray-200 border-l-4 border-l-blue-500 hover:shadow-xl bg-white rounded-2xl">
            <h1 className="text-xl font-bold">QA & Testing</h1>
            <h2 className="text-sm text-gray-400 py-2">Ensuring reliability.</h2>
            <p className="text-gray-600">
              Rigorous automated testing to ensure your software works flawlessly across all devices and updates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-h-[210px] p-6 border border-gray-200 border-l-4 border-l-blue-300 hover:shadow-xl bg-white rounded-2xl">
            <h1 className="text-xl font-bold">Maintenance</h1>
            <h2 className="text-sm text-gray-400 py-2">Long-term stability.</h2>
            <p className="text-gray-600">
              24/7 monitoring and security patching to keep your digital infrastructure safe.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
