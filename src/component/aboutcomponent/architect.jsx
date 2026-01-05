import React from "react";
import { Link } from "react-router-dom";
const Architecture = () => {
  return (
    <section className="w-full bg-gray-50 text-center justify-center px-[100px] py-24 mt-24">
     <div class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-gray-100 bg-white text-gray-800 shadow-sm">
     <span class="w-2 h-2 bg-green-500 rounded-full"></span>
     <span class="text-sm font-medium">Established 2018 • 150+ Projects Shipped</span>
     </div>
     <h1 className="text-6xl font-bold py-8">We Are The Architects of <br /><span className="text-blue-700"> Digital Intelligence</span></h1>
     <p className="text-xl text-gray-500">More than just a software agency. We are your strategic partner in navigating the <br /> intersection of stunning Web Design and cutting-edge Artificial Intelligence.</p>
     <h4 className="text-sm  text-gray-500 py-9">Trusted by innovators at</h4>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-xl ">
       <h4>Google Cloud</h4>
       <h4>AWS Partner</h4>
       <h4>Shopify Plus</h4>
       <h4>Stripe</h4>
       <h4>Microsoft Azure</h4>
      </div>
    </section>

  )}

  export default Architecture;