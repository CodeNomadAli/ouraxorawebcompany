import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import {FaCheck } from "react-icons/fa";

const Featurepj = () => {
  return (
   <section className="text-center pt-14 py-12 px-[100px] mx-auto bg-gray-50  justify-items-center">
         <div class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
     <span class="w-2 h-2 bg-blue-800 rounded-full"></span>
     <span class="text-xs font-medium">Selected Work     </span>
   </div>

    <h1 className="text-5xl font-bold mt-4 ">Featured  <span className="text-blue-600"> Projects</span></h1>
    <p className="text-xl font-normal mt-5">Discover how we've helped businesses transform their digital presence. From <br /> seed-stage startups to enterprise giants.</p>

    

     <section className="w-full py-24 ">
       <div className="grid md:grid-cols-2 grid-flex gap-16">
    <div className="py-12">
        <img src="/billanory (2).png" alt=""  className=" w-full h-full rounded-xl hover:shadow-2xl hover:shadow-red-100"/>
    </div>
   
    <div className="lex flex-col gap-4 justify-center text-left">
      <div className="flex gap-3 ">
       <p className="text-xs rounded-xl bg-gray-100 px-2 py-2">Webflow</p>
       <p className="text-xs bg-gray-100 rounded-xl px-2 py-2">SaaS</p>
       <p className="text-xs bg-gray-100 px-2 py-2 rounded-xl">B2B</p>
      </div>

          <h1 className="text-3xl py-2 font-bold">Billonary Club</h1>
          <p className="text-sm text-blue-600 font-bold">Financial SaaS Platform</p>

          <p className="text-xl  py-5">We engineered a robust financial supply chain platform that transformed how users manage high-volume transactions. By streamlining complex user flows and optimizing the dashboard architecture, we helped the client secure significant Series A funding.</p>

          <h2 className="text-xl font-bold">Key Outcomes</h2>
            <div className="py-3">
          <div className="flex ">
            <FaCheck className="w-4 h-7 text-green-500" />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">300% increase in user conversions</p>
          </div>
           
           <div className="flex  ">
            <FaCheck className="w-4 h-7 text-green-500 " />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">$12.5M in funding raised</p>
          </div>

          <div className="flex  ">
            <FaCheck className="w-4 h-7 text-green-500 " />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">Dashboard load times cut by 50%</p>
          </div>
    </div>
    </div>

       </div>
     </section >

     <section className="w-full py-24 ">
     <div className="grid md:grid-cols-2 grid-flex gap-16">
      <div className="lex flex-col gap-4 justify-center text-left">
      <div className="flex gap-3 ">
       <p className="text-xs rounded-xl bg-gray-100 px-2 py-2">E-Commerce</p>
       <p className="text-xs bg-gray-100 rounded-xl px-2 py-2">UI/UX</p>
      </div>

          <h1 className="text-3xl py-2 font-bold">Ecommerce Solutions</h1>
          <p className="text-sm text-blue-600 font-bold">Digital Storefront Transformation</p>

          <p className="text-xl  py-5">A modern, high-performance e-commerce experience featuring advanced WebGL product interactions. This overhaul was designed to position the brand as an industry innovator, focusing on seamless navigation and immersive user engagement.</p>

          <h2 className="text-xl font-bold">Key Outcomes</h2>
            <div className="py-3">
          <div className="flex ">
            <FaCheck className="w-4 h-7 text-green-500" />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">200% growth in inbound leads</p>
          </div>
           
           <div className="flex  ">
            <FaCheck className="w-4 h-7 text-green-500 " />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">40% increase in session duration</p>
          </div>

    </div>
    </div>

       <div className="">
        <img src="/ecommerce.png" alt=""  className= " w-full h-full rounded-xl hover:shadow-2xl hover:shadow-red-100"/>
       </div>
     </div>
     </section>




     <section className="w-full py-24 ">
       <div className="grid md:grid-cols-2 grid-flex gap-16">
    <div className="">
        <img src="/video-player.jpg" alt=""  className=" w-full h-full rounded-xl hover:shadow-2xl hover:shadow-red-100"/>
    </div>
   
    <div className="lex flex-col gap-4 justify-center text-left">
      <div className="flex gap-3 ">
       <p className="text-xs rounded-xl bg-gray-100 px-2 py-2">Growth</p>
       <p className="text-xs bg-gray-100 rounded-xl px-2 py-2">Media</p>
      </div>

          <h1 className="text-3xl py-2 font-bold">Video Player</h1>
          <p className="text-sm text-blue-600 font-bold">High-Conversion Landing Experience</p>

          <p className="text-xl  py-5">A scientifically optimized landing page designed specifically to capture early adopters for a media startup. By clarifying the value proposition and simplifying the sign-up flow, we drove massive growth in user acquisition.</p>

          <h2 className="text-xl font-bold">Key Outcomes</h2>
            <div className="py-3">
          <div className="flex ">
            <FaCheck className="w-4 h-7 text-green-500" />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">85% Conversion Rate on ad traffic</p>
          </div>
           
           <div className="flex  ">
            <FaCheck className="w-4 h-7 text-green-500 " />       
             <p className="text-sm text-gray-400 px-5 mt-1 font-bold">Secured crucial seed funding</p>
          </div>

          
    </div>
    </div>

       </div>
     </section >
     
   
         <div>
        <Link to="/portfolio"> <button className="text-white bg-blue-500 rounded text-xl px-3 py-2 mt-7 flex"> View All Project   <span className="text-white w-6 font-bold px-3">→</span></button></Link>
         </div>
    </section>

  )}

  export default Featurepj;