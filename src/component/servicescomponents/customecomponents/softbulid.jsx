import React from "react";
import { Link } from "react-router-dom";

const Softbulid = () => {
  return (
   <section className="w-full bg-white flex px-[100px] py-20 mt-24">
    <div className="grid md:grid-cols-2 grid-flex gap-7 ">
      <div className=" mb-5 ">
    <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-white  text-black shadow-sm">
     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
     <span className="text-sm font-medium">Custom Software Engineering </span>
   </div>
     <h1 className="text-6xl font-bold mt-9">Software Built for <br /> <span className="text-blue-600">Business Scale</span></h1> <hr className="border-blue-200 border-2 mt-3 w-[400px] "/>
      <p className="text-sx text-gray-500 mt-5">We don't just write code; we architect solutions. From complex CRM/ERP systems to high-performance SaaS platforms, we build the engine that powers your enterprise.</p>
          <div className="flex gap-4">
            <div>
               <Link to="/contact"> <button className="text-white bg-blue-600 rounded-xl text-xl px-4 hover:bg-blue-500 py-3 mt-7 flex">Start Your Project  <span className="text-white w-6 font-bold px-3">→</span></button></Link>
         </div>
         <div>
               <Link to="/portfolio"> <button className="text-black border-[1px] border-gray-300 bg-white rounded-xl text-xl px-4 hover:bg-gray-50 py-3 mt-7 flex">View Case Studies  <span className="text-white w-6 font-bold px-3">→</span></button></Link>
         </div>

         </div>
         <hr  className="mt-10 py-8"/>
         <div className="flex mt-6 text-3xl font-bold gap-16">
          <h1>99.9%</h1>
          <h1>Enterprise</h1>
          <h1>Scalable</h1>
         </div>
          
          <div className="flex gap-[140px]  text-sm font-bold text-gray-500">
            <p>Uptime</p>
            <p>Security</p>
            <p>Architecture</p>
          </div>
      </div>
      
      
     <div className="w-full  py-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl p-8 shadow-md group hover:shadow-xl transition">
      <div className="w-14 h-14 flex items-center group-hover:shadow-2xl justify-center rounded-xl bg-blue-500 text-white mb-6">
        🧳
      </div>
      <h3 className="text-xl font-semibold mb-2">SaaS Platforms</h3>
      <p className="text-gray-500">Multi-tenant cloud solutions.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl p-6 shadow-md group h-44 mt-12 hover:shadow-lg transition">
      <div className="w-10 h-10 flex items-center justify-center group-hover:shadow-2xl  rounded-xl bg-purple-500 text-white mb-6">
        📊
      </div>
      <h3 className="text-xl font-semibold ">CRM & ERP</h3>
      <p className="text-gray-500">Workflow automation systems.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl p-8 shadow-md group hover:shadow-lg transition">
      <div className="w-14 h-14 flex items-center justify-center group-hover:shadow-2xl  rounded-xl bg-green-500 text-white mb-6">
        📱
      </div>
      <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
      <p className="text-gray-500">iOS, Android & Cross-platform.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl p-6 shadow-md group h-44 mt-12 hover:shadow-lg transition">
      <div className="w-14 h-14 flex items-center justify-center group-hover:shadow-2xl  rounded-xl bg-orange-500 text-white mb-6">
        &lt;/&gt;
      </div>
      <h3 className="text-xl font-semibold ">Cloud & DevOps</h3>
      <p className="text-gray-500">Infrastructure as Code.</p>
    </div>

  </div>
</div>


    </div>
</section>

  )}

  export default Softbulid