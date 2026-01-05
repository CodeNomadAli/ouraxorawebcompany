import React from "react";
import { Link } from "react-router-dom";
import {  FaTableCellsLarge } from "react-icons/fa6";
import { FaBolt,  FaSearch } from "react-icons/fa";

const Pretty = () => {
  return (
    <section className="w-full ">
       <div className="w-full px-[100px] py-12">
           <h1 className="text-4xl font-bold text-center">More than just "pretty"</h1>
           <p className="text-gray-500 text-2sm text-center py-3">We balance scientific research with artistic execution.</p>
              <div className="grid md:grid-cols-3 grid-flex gap-5 py-8">
                <div className="w-[380px] h-[260px] border-[1px] border-gray-100 rounded-xl hover:shadow-md p-7">
                  <div className="w-12 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaSearch className="text-blue-500 w-6 h-6" />
                  </div>
                  <h1 className="text-2xl font-bold py-3">UX Research</h1>
                  <p className="text-2sm text-gray-500">We interview your users, create personas, and map out customer journeys to ensure we are solving the right problem.</p>    
                </div>

                 <div className="w-[380px] h-[260px] border-[1px] border-gray-100 rounded-xl hover:shadow-md p-7">
                  <div className="w-12 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaTableCellsLarge className="text-purple-600 w-6 h-6" />
                  </div>
                  <h1 className="text-2xl font-bold py-3">UI Design (Visuals)</h1>
                  <p className="text-2sm text-gray-500">Pixel-perfect layouts, typography, and color theory. We create Design Systems (UI Kits) to ensure consistency across all screens.</p>    
                </div>

                 <div className="w-[380px] h-[260px] border-[1px] border-gray-100 rounded-xl hover:shadow-md p-7">
                  <div className="w-12 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaBolt className="text-blue-500 w-6 h-6" />
                  </div>
                  <h1 className="text-2xl font-bold py-3">Prototyping</h1>
                  <p className="text-2sm text-gray-500">Clickable, interactive mockups that act like the real app. We test these with real users before writing a single line of code.</p>    
                </div>
             </div>
       </div>
    </section>


  )}

  export default Pretty;