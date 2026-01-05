import React from "react";
import { Link } from "react-router-dom";

const Digitalsection = () => {
  return (
   <section className="w-full bg-gray-50 flex px-[100px] py-12 gap-5">
    <div className="grid md:grid-cols-2 grid-flex ">
      <div className="py-10 ">
        <div class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-800 shadow-sm">
        <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span class="text-sm font-medium">WHO ARE YOU</span>
       </div>
       <h1 className="text-5xl font-bold mt-7">Architects of <br /><span className="text-blue-700">Digital Transformation</span> </h1>
       <p className="text-xl text-gray-600  mt-1 ">We are a dedicated team of expert developers and designers specializing in crafting stunning, modern, and scalable software. From <b> Web & Mobile Apps </b>to complex <b> CRM, HRM, and RSM systems,</b> we build the engines that power business growth. <br /> <br />
         Since our founding, we’ve focused on one goal: delivering high-quality, user-focused solutions. We collaborate closely with startups and enterprises to turn ambitious visions into <u className="decoration-blue-600 decoration-2 underline-offset-4"> clean, maintainable code.</u></p>
         <div>
         <Link to="/about"><button className="text-white bg-blue-600 rounded text-sm px-3 py-3  mt-7 flex"> learn more About us  <span className="text-white w-6 font-bold px-3">→</span></button></Link>
         </div>
      
      </div>
      <div>
        <img src="/herose2.png" alt=""  className="mt-32 rounded-2xl w-50 shadow-red-100 shadow-xl"/>

      </div>

    </div>
    
    
    </section>

  )}

  export default Digitalsection