import React from "react";
import { Link } from "react-router-dom";
import {FaCheck } from "react-icons/fa";

const  Featured = () => {
  return (
  <section className="w-full">
    <div className="w-full bg-white px-[100px] py-20">
      <div className="grid md:grid-cols-2 grid-flex gap-14 ">
        <div>
            <img src="/protfolioimg.jpg" alt=""  className="shadow-2xl shadow-blue-400 rounded-lg" />
        </div>

        <div>
           <h4 className="text-sm text-blue-600 font-bold">FEATURED CASE STUDY</h4>
           <h1 className="text-4xl font-bold py-2">Revolutionizing Logistics with AI-Driven Routing</h1>
           <p className="text-gray-600 py-4">We helped LogisticsCo reduce fuel costs by 35% using a custom machine learning algorithm that predicts traffic patterns and optimizes delivery routes in real-time.</p>
                <div className="py-5">
                     <div className="flex ">
                       <FaCheck className="w-4 h-7 text-green-500" />       
                        <p className="text-sm text-gray-400 px-5 mt-1 font-bold">35% Cost Reduction</p>
                     </div>
                      
                      <div className="flex  ">
                       <FaCheck className="w-4 h-7 text-green-500 " />       
                        <p className="text-sm text-gray-400 px-5 mt-1 font-bold">2.5x Faster Delivery Times</p>
                     </div>
           
                     <div className="flex  ">
                       <FaCheck className="w-4 h-7 text-green-500 " />       
                        <p className="text-sm text-gray-400 px-5 mt-1 font-bold">Custom Mobile App for Drivers</p>
                     </div>
               </div> 
        </div>

      </div>
    </div>

  </section>


  )}

  export default Featured;