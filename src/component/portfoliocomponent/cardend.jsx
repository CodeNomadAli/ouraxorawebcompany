import React from "react";
import { Link } from "react-router-dom";
const Cardbulid = () => {
  return (
    <section>
         <div className="w-full bg-gray-50 px-[100px] py-12">
      
      <div className="grid md:grid-cols-2 grid-flex py-12 gap-4  ">
        <div className="'w-[550px] h-[270px] border-[1px]  p-12 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm font-bold py-2 text-gray-600">"<i>The team transformed our outdated legacy system into a sleek, AI-powered platform. Efficiency increased by 200% in the first month.</i>"</p>
         <div className="flex gap-3 py-3">
           <div className="w-12 h-12 rounded-full bg-green-400 text-black-700 font-bold items-center justify-center flex">JD</div>
             <div>
                <h1 className="text-2sm font-bold">John Doe <br /><span className="text-gray-400">CTO, FinanceCorp</span></h1>
             </div>
         </div>
        </div>


          <div className="'w-[550px] h-[270px] border-[1px]  p-12 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm font-bold py-2 text-gray-600">"<i>Their understanding of both design and complex backend logic is rare. They didn't just build what we asked for, they improved upon it.</i>"</p>
         <div className="flex gap-3 py-3">
           <div className="w-12 h-12 rounded-full bg-gray-300 text-black font-bold items-center justify-center flex">SS</div>
             <div>
                <h1 className="text-2sm font-bold">Sarah Smith<br /><span className="text-gray-400">Founder, StartUpX</span></h1>
             </div>
         </div>
        </div>

      </div>
    </div>


    <div className="w-full bg-gray-800 text-center justify-items-center px-[100px] py-16      bg-[radial-gradient(circle_at_center,rgba(139,48,48,0.5)_0%,rgba(0,0,0,1)_70%)]">
        <h1 className="text-5xl font-bold text-white">Ready to Build Something <br /> Extraordinary?</h1>
        <p className="text-gray-300  py-6">Whether you need a custom web platform or an AI-driven solution, our <br /> team is ready to bring your vision to life.</p>
        <div className="flex gap-5">
             <button className="text-white  bg-blue-600 rounded-xl text-xl px-4 py-3  flex"> Get an Estimate  </button>
             <button className="text-white  bg-gray-500 rounded-xl text-xl px-4 py-3  flex"> Book a Consulation  </button>
      </div>
      <p className="text-sm text-gray-500 py-6">Trusted by 50+ innovative companies worldwide.</p>
    </div>
    </section>




  )}
  export default Cardbulid;