import React from "react";
import { Link } from "react-router-dom";
import {   } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";

const Conversion = () => {
  return (
   <section className="w-full py-12 mt-12">
      <div className="grid md:grid-cols-2 grid-flex bg-gray-50 px-[100px] py-12 gap-12">
          <div >
           <h1 className="text-3xl font-bold">Confusion kills conversion.</h1>
           <p className="text-gray-500 font-semibold py-4">Users judge your credibility in 0.05 seconds. If your software is hard to use, they churn. If your website is cluttered, they bounce.</p>
           <div className="w-full h-[160px] mt-5 bg-white shadow-md border-[1px] p-4 px-7 border-gray-200">
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-md">
                  <FaTriangleExclamation className="text-2xl text-blue-500 hover:text-gray-700 transition" />
                </div>
                <div>
                    <p className="font-bold py-2">The "Frustration Gap"</p>
                </div>
              </div>
              <p className="text-2sm text-gray-500 py-3">Every extra click, slow loader, or unclear label drops your conversion rate by <b> 20%.</b> We close that gap.</p>
           </div>
          </div>

        
          <div className="grid md:grid-cols-2 grid-flex py-8 gap-5">
            <div className="w-[240px] h-[120px] border-gray-200 border-[1px] bg-white shadow rounded-xl text-center">
               <h1 className="text-4xl font-bold text-blue-600 pt-5">300%</h1>
               <p className="text-sm text-gray-500 py-2">ROI on UX Design</p>
            </div>

             <div className="w-[240px] h-[120px] border-gray-200 border-[1px] bg-white shadow rounded-xl text-center">
               <h1 className="text-4xl font-bold text-blue-600 pt-5">50ms</h1>
               <p className="text-sm text-gray-500 py-2">Time to make an impression</p>
            </div>

             <div className="w-[240px] h-[120px] border-gray-200 border-[1px] bg-white shadow rounded-xl text-center">
               <h1 className="text-4xl font-bold text-blue-600 pt-5">88%</h1>
               <p className="text-sm text-gray-500 py-2">Won't return after bad XP</p>
            </div>

             <div className="w-[240px] h-[120px] border-gray-200 border-[1px] bg-blue-700 shadow rounded-xl text-center">
               <h1 className="text-4xl font-bold text-white pt-5">∞</h1>
               <p className="text-sm text-gray-200 py-2">Value of Trust</p>
            </div>
          </div>
      </div>
   </section>

  )}

  export default Conversion