import React from "react";
import { Link } from "react-router-dom";
import {FaCode} from "react-icons/fa";

const Software = () => {
  return (
    <section className="text-center pt-14 py-12 px-[100px]">
         <div class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
     <span class="w-2 h-2 bg-blue-800 rounded-full"></span>
     <span class="text-xs font-medium">
      OUR EXPERTISE
     </span>
   </div>

    <h1 className="text-5xl font-bold mt-4 ">Expert Software <span className="text-blue-600"> <u> Solutions</u></span></h1>
    <p className="text-xl font-normal mt-5">We craft stunning, modern, and scalable applications. From <b> CRM & HRM Systems</b> <br /> to <b> AI-Powered</b> tools, we elevate your business with code.</p>

   
    </section>


  )}

  export default Software;
