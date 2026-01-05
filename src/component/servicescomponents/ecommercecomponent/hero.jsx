import React from "react";
import { Link } from "react-router-dom";
import {FaBolt, FaCheck, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full mt-16">
       <div className="px-[100px] text-center justify-items-center bg-white py-28">
        <button className="text-blue-600 bg-gray-50 text-sm h-8 px-4 border-[1px] border-gray-100 rounded-2xl ">🛍️Enterprise E-Commerce Solutions</button>
        <h1 className="text-6xl font-bold  py-4">Commerce without <br /><span className="text-blue-600">complexity.</span></h1>
        <p className="text-xl text-gray-500 py-3">We build scalable, high-performance online stores that seamlessly integrate <br /> with your inventory, payments, and logistics.</p>
        <div className="flex gap-4 py-6">
             <Link to="/contact">  <button type="button" className="bg-blue-600 text-white py-3 px-4 rounded-2xl hover:bg-blue-500">Discuss Your Project</button></Link>
              <Link to="/portfolio"><button type="button" className="bg-white text-black py-3 px-4 rounded-2xl hover:bg-slate-50 border-[1px] border-gray-200">View Capabilities</button></Link>
        </div>
        </div>


        <div className="w-full px-[150px] py-12">
           <div className="border-gray-100 border-2 rounded-lg bg-gray-50 shadow-xl h-[450px] w-full text-center justify-items-center py-32">
              <div className="bg-white w-16 h-16 rounded-2xl justify-items-center py-4">
               <FaBagShopping className="w-7 h-7 text-blue-500 " />       
              </div>

              <h1 className="font-bold text-2xl py-2">Your Storefront</h1>
              <p className="text-gray-400">Optimized for Conversion</p>
           </div>
        </div>


        <div className="w-full bg-gray-50 px-[100px] py-12 mt-8">
            <div className="grid grid-cols-3 grid-flex gap-5">
                <div>
                  <div className="bg-white w-12 h-12 rounded-2xl shadow justify-items-center py-4">
                  <FaBolt className="w-5 h-5 text-blue-500 " />       
                 </div>
                 <h1 className="text-xl font-bold py-3">Lightning Fast Performance</h1>
                 <p className="text-gray-600 font-medium py-2"> Slow sites lose sales. We engineer lightweight front-ends using modern frameworks to ensure sub-second load times.</p>
                </div>

                  <div>
                  <div className="bg-white w-12 h-12 rounded-2xl shadow justify-items-center py-4">
                  <FaCheckCircle className="w-5 h-5 text-blue-500 " />       
                 </div>
                 <h1 className="text-xl font-bold py-3">Seamless Integrations</h1>
                 <p className="text-gray-600 font-medium py-2"> We connect your store to your ERP, CRM, and shipping providers, automating the busywork so you can focus on growth.</p>
                </div>


                  <div>
                  <div className="bg-white w-12 h-12 rounded-2xl shadow justify-items-center py-4">
                  <FaPhone className="w-5 h-5 text-blue-500  " />       
                 </div>
                 <h1 className="text-xl font-bold py-3">Mobile-First Design</h1>
                 <p className="text-gray-600 font-medium py-2">With 70% of traffic coming from phones, we design for the thumb-scroll first, ensuring a frictionless mobile checkout.</p>
                </div>
            </div>
        </div>
    </section>
  

  )}

  export default Hero;