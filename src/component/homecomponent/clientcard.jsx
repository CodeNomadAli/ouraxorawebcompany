import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

const Clientcard =() => {
  return (
 <section className="py-10 px-[100px] justify-items-center">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div className="w-[370px] h-[400px] border-[1px] group hover:shadow-2xl border-gray-300 rounded-lg border-shadow p-7">
     <div className="flex items-center justify-between w-full">
     <p className="text-yellow-400 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      <FaQuoteLeft className="text-6xl p-4  group-hover:text-black text-gray-300" />
     </div>
     <p className="text-3sm text-gray-500 py-3">"The team delivered a <b> stunning CRM application </b> that transformed our workflow. Their expertise in scalable solutions is unmatched, significantly boosting our operational efficiency."</p>

     <div className="flex py-7 gap-5">
       <h1 className="bg-blue-100 text-blue-500 w-12 h-12 text-center rounded-full py-3 font-bold">SJ</h1>
       <p className="text-3sm  font-bold">Sarah Johnson <br /><span className="text-sm text-gray-500">CEO</span></p>
     </div>
     <p className="text-sm text-gray-500">Project: Custom CRM</p>
    </div>


     <div className="w-[370px] h-[400px] border-[1px] group hover:shadow-2xl border-gray-300 rounded-lg border-shadow p-7">
     <div className="flex items-center justify-between w-full">
     <p className="text-yellow-400 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      <FaQuoteLeft className="text-6xl p-4  group-hover:text-black text-gray-300" />
     </div>
     <p className="text-3sm text-gray-500 py-3">"Their mobile app expertise turned our vision into a high-converting application. We saw a  <b>200% increase in engagement </b> within weeks of launch."</p>

     <div className="flex py-10 gap-5">
       <h1 className="bg-blue-100 text-blue-500 w-12 h-12 text-center rounded-full py-3 font-bold">MC</h1>
       <p className="text-3sm  font-bold">Michael Chen <br /><span className="text-sm text-gray-500">Founder</span></p>
     </div>
     <p className="text-sm text-gray-500">Project: Mobile App</p>
    </div>


     <div className="w-[370px] h-[400px] border-[1px] group hover:shadow-2xl border-gray-300 rounded-lg border-shadow p-7">
     <div className="flex items-center justify-between w-full">
     <p className="text-yellow-400 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      <FaQuoteLeft className="text-6xl p-4  group-hover:text-black text-gray-300" />
     </div>
     <p className="text-3sm text-gray-500 py-3">"They built a scalable HRM system that perfectly aligned with our needs. Their professionalism and innovative approach exceeded our expectations, <b> delivering exceptional results.</b>"</p>

     <div className="flex py-7 gap-5">
       <h1 className="bg-blue-100 text-blue-500 w-12 h-12 text-center rounded-full py-3 font-bold">ER</h1>
       <p className="text-3sm  font-bold">Emily Rodriguez <br /><span className="text-sm text-gray-500">COO</span></p>
     </div>
     <p className="text-sm text-gray-500">Project: HRM System</p>
    </div>

 </div>


   <section className="px-4 md:px-[100px] py-20">
  <div className=" w-full max-w-3xl px-6 md:px-10 flex flex-col items-center justify-center text-center h-[300px] rounded-2xl bg-gray-900">
    <h2 className=" font-bold mb-4 text-white text-2xl md:text-3xl">Ready to Write Your Success Story?</h2>
    <p className="text-gray-400 mb-6 text-sm md:text-base">Join 300+ companies transforming their business with custom software. Let's discuss your <br /> vision today.</p>
    <button className="bg-blue-500  md:px-6 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Get Your Free Quote</button>
  </div>
</section>

 </section>


  )}

  export default Clientcard ;