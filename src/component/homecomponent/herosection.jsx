import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Herosection = () => {
  return (
   <section className="w-full bg-gray-50 flex px-[100px] py-12 mt-24">
    <div className="grid md:grid-cols-2 grid-flex ">
      <div className=" mb-5 ">
    <div class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
     <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
     <span class="text-sm font-medium">
      Custom Software Solutions
     </span>
   </div>
     <h1 className="text-6xl font-bold mt-9">Expert <br /> Development for <br /> <span className="text-blue-600">Complex Apps</span></h1> <hr className="border-blue-200 border-2 mt-3 w-[400px] "/>
      <p className="text-sx font-sans mt-5">We build scalable business systems that streamline your operations. <br /> Specializing in b
      <b> CRM, HRM, </b> and <b> RSM Software. </b></p>
          <div className="flex">
            <div>
        <a target="_blank" href="https://calendly.com/axoraweb/30min"> <button className="text-white bg-blue-600 rounded-xl text-xl px-3 py-2 mt-7 flex"> Book an Intro Call  <span className="text-white w-6 font-bold px-3">→</span></button></a>
         </div>
          <div className="px-10 mt-9">
  <button className="flex items-center gap-3 group">
    <FaPlay className="text-2xl ml-0.5 border-red-400 rounded-full border-2 p-1 group-hover:text-blue-500" />
    <span className="px-2 font-semibold group-hover:text-blue-500">View Projects</span>
  </button>
</div>

         </div>
         <hr  className="mt-10"/>
         <div className="flex mt-6 text-3xl font-bold gap-24">
          <h1>300+</h1>
          <h1>500+</h1>
          <h1>5+</h1>
         </div>
          
          <div className="flex gap-[90px] font-extralight text-sm">
            <p>Happy Clients</p>
            <p>Projects Done</p>
            <p>Years Exp.</p>
          </div>
      </div>
      
      
      <div className="image">
     <img src="/secr.png" alt=""   className="h-[380px] mt-24 w-[800px] transform transition-transform duration-300 hover:-translate-x-4 hover:-translate-y-4-[380px] mt-24 w-[800px] transform transition-transform duration-300 hover:-translate-x-4 hover:-translate-y-4 rounded-lg "  />
      </div>

    </div>
</section>

  );
};

export default Herosection;

