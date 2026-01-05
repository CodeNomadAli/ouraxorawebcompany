import React from "react";
import { Link } from "react-router-dom";
import {FaCheck } from "react-icons/fa";

const Transformation = () => {
  return (
  <section className="w-full">
     <div className="w-full px-[100px] py-16 bg-gray-50">
       <h1 className="text-2sm font-bold text-center text-blue-600">Visual Evidence</h1>
       <h1 className="text-4xl font-bold text-center py-3">Transformation Gallery</h1>
       <p className="text-2sm text-gray-500 text-center font-medium">Hover over the images to see the transformation.</p>
       <div className="grid md:grid-cols-2 grid-flex gap-7 py-16">
            <div className="w-full group">
            <div className="relative w-full h-72 overflow-hidden rounded-xl">
              {/* Before Image */}
              <img src="/beforegr.jpg"alt="Before" className="absolute inset-0 w-full h-full object-cover  transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
              {/* After Image */}
                <img src="/aftergr.jpg" alt="After" className="absolute inset-0 w-full h-full object-cover    transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
             </div>
              <h1 className="text-2xl font-bold  py-4">FinTech Analytics Platform</h1>
              <p className="text-sm text-gray-500">We transformed a complex manual spreadsheet process into a real-time, react-based <span className="text-blue-700"> Reduced user error rate by 45%.</span></p>

          </div>


             <div className="w-full group">
            <div className="relative w-full h-72 overflow-hidden rounded-xl">
              {/* Before Image */}
              <img src="/ecommerce1.jpg"alt="Before" className="absolute inset-0 w-full h-full object-cover  transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
              {/* After Image */}
                <img src="/ecommerce2.jpg" alt="After" className="absolute inset-0 w-full h-full object-cover    transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
             </div>
              <h1 className="text-2xl font-bold  py-4">E-Commerce Checkout Flow</h1>
              <p className="text-sm text-gray-500">Reimagined a 5-page web form into a seamless 3-step mobile experience.<span className="text-blue-700">Increased cart completion by 22%.</span></p>

          </div>
        </div>
     </div>







       <div className="text-center py-14">
             <p className="text-3xl font-bold">Clear Design Pricing</p>
             <p className="text-gray-500 py-4">Whether you need a quick audit or a full product overhaul.</p>
            </div>
     
            <div className="grid md:grid-cols-3 grid-flex px-[100px] py-16">
             {/*car 1 */}
              <div className="w-[370px] h-[450px] p-8 border-[1px] mt-3 rounded-2xl border-gray-100 bg-white shadow-lg ">
                  <h1 className="font-bold text-xl">UX Audit</h1>
                  <p className="text-xs text-gray-400 py-3">For existing products.</p>
                  <h1 className="text-4xl py-4 font-bold">$1,500</h1>
     
                   <div className="flex  mt-7">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Expert Heuristic Analysis</p>
                  </div>
                  <div className="flex py-1">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Accessibility Check</p>
                  </div>
                  <div className="flex ">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">PDF Report with Fixes</p>
                  </div>
                  <div className="flex  ">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">1 Hour Consultation</p>
                  </div>
                      <div className="text-center">
                        <button className="w-full  text-black font-bold rounded-xl text-2sm py-2 mt-7 flex border-[1px] border-gray-200 items-center justify-center "> View Pricing</button>
                     </div>
     
              </div>
     
                 {/*car 2 */}
               <div className="w-[370px] h-[450px] p-8 border-2 rounded-2xl bg-gray-900 shadow-lg">
                  <h1 className="font-bold text-xl text-white">Product Redesign</h1>
                  <p className="text-xs text-gray-400 py-3">Complete visual overhaul.</p>
                  <h1 className="text-4xl py-4 font-bold text-white">$4,500+</h1>
     
                   <div className="flex  mt-7">
                     <FaCheck className="w-4 h-7 text-blue-500" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 font-bold ">Full Figma File</p>
                  </div>
                  <div className="flex py-1">
                     <FaCheck className="w-4 h-7 text-blue-500" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">User Research Phase</p>
                  </div>
                  <div className="flex ">
                     <FaCheck className="w-4 h-7 text-blue-500" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Dark/Light Mode</p>
                  </div>
                  <div className="flex  ">
                     <FaCheck className="w-4 h-7 text-blue-500" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Design System (Style Guide)</p>
                  </div>
                  <div className="flex  ">
                     <FaCheck className="w-4 h-7 text-blue-500" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Developer Handoff</p>
                  </div>
                      <div className="text-center">
                        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text- p2sm py-2 mt-7 flex items-center justify-center "> Select Package</button>
                     </div>
     
              </div>
     
                 {/*car 3 */}
                <div className="w-[370px] h-[450px] p-8 border-[1px] mt-3 rounded-2xl border-gray-100 bg-white shadow-lg">
                  <h1 className="font-bold text-xl">Design Partner</h1>
                  <p className="text-xs text-gray-400 py-3">Ongoing monthly support.</p>
                  <h1 className="text-4xl py-4 font-bold">$3,000/mo</h1>
     
                   <div className="flex  mt-7">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Dedicated Designer</p>
                  </div>
                  <div className="flex py-1">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Unlimited Requests</p>
                  </div>
                  <div className="flex ">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">48h Turnaround</p>
                  </div>
                  <div className="flex  ">
                     <FaCheck className="w-4 h-7 text-green-400" />       
                     <p className="text-sm text-gray-400 px-5 mt-1 ">Social Media Graphics</p>
                  </div>
                      <div className="text-center">
                        <button className="w-full  text-black font-bold rounded-xl text-2sm py-2 mt-7 flex border-[1px] border-gray-200 items-center justify-center "> View Pricing</button>
                     </div>
     
              </div>
            </div>
  </section>
   


  )}

  export default Transformation;