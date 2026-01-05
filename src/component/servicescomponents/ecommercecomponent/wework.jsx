import React from "react";
import { Link } from "react-router-dom";
import {FaBolt, FaCheck, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Wework = () => {
  return (
    <section>
 <div className="bg-white py-16 px-[100px] font-sans">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 ">How We Work</h2>
    <p className="text-gray-400 text-center py-3 mb-16">A transparent, agile process designed to get you to market faster.</p>

    <div class="relative">
      <div class="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
        
        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full  text-black bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            01
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Discovery</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">We analyze your SKUs, customer data, and goals.  </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full  text-blue bg-slate-50 border-2 border-blue-100 flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            02
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Strategy & Design</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">We meet to discuss scope and strategy.</p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full  text-blue bg-slate-50 border-2 border-blue-100 flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            03
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Development</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">Coding the store and integrating payment gateways.</p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-[#2834d6] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            04
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Growth</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">Launch, testing, and ongoing revenue optimization.</p>
        </div>

      </div>
    </div>
  </div>
</div>





 <div className="w-full py-20 px-[100px] bg-gray-900">
  <div className=" max-w-7xl mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
    <div>
      <h1 className="text-4xl font-extrabold text-white">$500M+</h1>
      <p className="mt-2  text-xl text-gray-400">Client Revenue Processed</p>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-white">150+</h1>
      <p className="mt-2  text-xl text-gray-400">Stores Launched</p>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-white">99.9%</h1>
      <p className="mt-2 text-xl text-gray-400">Uptime Record</p>
    </div>

      <div>
      <h1 className="text-4xl font-extrabold text-white">35%</h1>
      <p className="mt-2  text-xl text-gray-400">Avg. Conv. Uplift</p>
    </div>

  </div>
</div>
 </div>






 <div className="w-full px-[100px] py-14 mt-12  justify-items-center">
   <h1 className="text-center text-4xl font-bold mb-12">Frequently Asked Questions</h1>
   <div className="w-[800px] h-[130px] border-[1px] py-3 p-5 mb-4 rounded-xl border-gray-200">
     <h1 className="text-xl font-bold">Which platform should I choose?</h1>
     <p className="text-sm text-gray-500 py-3">It depends on your scale. We typically recommend Shopify for D2C brands up to $50M/year, and Adobe Commerce (Magento) or custom builds for complex B2B needs.</p>
   </div>

    <div className="w-[800px] h-[130px] border-[1px] py-3 p-5 mb-4 rounded-xl border-gray-200">
     <h1 className="text-xl font-bold">Do you handle migration?</h1>
     <p className="text-sm text-gray-500 py-3">Yes. We specialize in zero-downtime migrations, ensuring your SEO rankings, customer data, and order history are preserved perfectly.</p>
   </div>

    <div className="w-[800px] h-[130px] border-[1px] py-3 p-5 rounded-xl border-gray-200">
     <h1 className="text-xl font-bold">How long does a build take?</h1>
     <p className="text-sm text-gray-500 py-3">A standard Shopify build takes 4-8 weeks. Custom enterprise solutions can take 3-6 months depending on complexity and integrations.</p>
   </div>
 </div>
</section>
  )}

  export default Wework