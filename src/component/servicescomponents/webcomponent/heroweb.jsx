import React from "react";
import { Link } from "react-router-dom";

const Heroweb = () => {
  return (
     <section className="w-full mt-20 py-28 text-center justify-items-center" style={{backgroundImage: 'url(/bgweb.jpg)',}}>
        <div class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-gray-800 text-blue-500 shadow-sm">
     <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
     <span class="text-sm font-medium"> Now accepting new projects for Q1</span>
   </div>
   <h1 className="text-6xl font-bold text-white py-5">We Don't Just Write Code. <br /> <span className="text-blue-300">We Engineer Growth.</span></h1>
   <p className="text-gray-400 py-4 text-xl">Your website is your best salesperson. We build <b> lightning-fast, custom websites </b> <br /> designed to convert visitors into revenue. No templates, no bloat.</p>
   <div className="flex gap-5">
        <Link to="/contact"><button className="text-white bg-blue-600 hover:bg-blue-500 rounded-2xl text-2sm px-4 py-2 mt-7 flex"> View Pricing  </button></Link>
       <Link to="/portfolio"><button className="text-white bg-gray-600 hover:bg-gray-500 rounded-2xl text-2sm px-3 py-2 mt-7 flex">View Our Work</button></Link>

   </div>
     </section>

  );
};

export default Heroweb;
