import React from "react";
import { Link } from "react-router-dom";
import {FaMobile,FaCheck } from "react-icons/fa";

const Ecosystem = () => {
  return (
   <section className="w-full px-[100px] bg-gray-50 py-20">
   <div className="w-full text-center">
      <h1 className="text-4xl font-bold">The <span className="text-blue-600">Complete</span> Ecosystem</h1>
      <p className="text-2sm py-4 text-gray-500 ">We don't just build isolated apps; we build interconnected systems.</p>
   </div>
    <div className="grid md:grid-cols-3 grid-flex gap-5 py-12">
        {/* card1*/}
       <div className="flex flex-col gap-8">
        <div className="w-full h-[210px] py-10 border-[1px]  border-l-blue-500 border-l-[4px] p-6 border-gray-200 hover:shadow-xl bg-white rounded-2xl">
          <h1 className="text-xl font-bold">Custom Software & Web</h1>
          <h2 className="text-sm text-gray-400 py-2">The command center of your business.</h2>
          <p className="text-gray-600">Scalable web applications and complex backend architectures designed for high-volume data processing.</p>
        </div>

          <div className="w-full h-[210px] py-10 border-[1px]   border-l-blue-300 border-l-[4px] p-6 border-gray-200 hover:shadow-xl bg-white rounded-2xl">
          <h1 className="text-xl font-bold">API & Integrations</h1>
          <h2 className="text-sm text-gray-400 py-2">Connecting your tools.</h2>
          <p className="text-gray-600">Unifying your ERP, CRM, and third-party tools into one seamless workflow.</p>
        </div>
       </div>
      
         {/* card2*/}
        <div>
         <div className="w-full bg-blue-900 h-full p-8 rounded-2xl">
             <div className="w-14 h-13 bg-blue-800 px-4 py-4  rounded-xl group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
             <FaMobile className="w-5 h-5 text-white" />       
            </div> 
            <h1 className="text-xl font-bold text-white py-3">Mobile Applications</h1>
             <p className="text-gray-100">Extend your enterprise capability to the palm of your hand. We build native iOS and Android apps that sync instantly with your central software.</p>
             <div className="flex  mt-7">
              <FaCheck className="w-4 h-7 text-blue-600" />       
               <p className="text-sm text-gray-100 px-5 mt-1 font-bold">Field Workforce Apps</p>
             </div>
              <div className="flex ">
              <FaCheck className="w-4 h-7 text-blue-600" />       
               <p className="text-sm text-gray-100 px-5 mt-1 font-bold">Customer Client Portals</p>
             </div>
              <div className="flex  ">
              <FaCheck className="w-4 h-7 text-blue-600" />       
               <p className="text-sm text-gray-100 px-5 mt-1 font-bold">Offline-First Architecture</p>
             </div>
              <div className="mt-6">
               <a href="#" className="text-white text-xl font-semibold hover:underline"> View Mobile Cases →</a>
              </div>
         </div>
       </div>

        {/* card3*/}
          <div className="flex flex-col gap-8">
        <div className="w-full h-[210px] py-10 border-[1px]  border-l-blue-500 border-l-[4px] p-6 border-gray-200 hover:shadow-xl bg-white rounded-2xl">
          <h1 className="text-xl font-bold">QA & Testing</h1>
          <h2 className="text-sm text-gray-400 py-2">Ensuring reliability.</h2>
          <p className="text-gray-600">Rigorous automated testing to ensure your software works flawlessly across all devices and updates.</p>
        </div>

          <div className="w-full h-[210px] py-10 border-[1px]   border-l-blue-300 border-l-[4px] p-6 border-gray-200 hover:shadow-xl bg-white rounded-2xl">
          <h1 className="text-xl font-bold">Maintenance</h1>
          <h2 className="text-sm text-gray-400 py-2">Long-term stability.</h2>
          <p className="text-gray-600">24/7 monitoring and security patching to keep your digital infrastructure safe.</p>
        </div>
       </div>
      
       
    </div>
   </section>

  )}
  
  export default Ecosystem