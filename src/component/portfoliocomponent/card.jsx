import React from "react";
import { Link } from "react-router-dom";
const  Card = () => {
  return (
    <section className="w-full  ">
        <div className="w-full px-[100px] text-center py-20 bg-gray-50 justify-items-center">
      <h1 className="text-4xl font-bold">Selected Works</h1>
        <div className="flex flex-wrap gap-3 sm:gap-4 py-5 ">
      <button className="text-white bg-black rounded-2xl text-sm px-3 py-2 border-[2px] border-gray-300 hover:border-red-400 flex">All</button>
      <button className="text-black bg-white rounded-2xl text-sm px-3 py-2 border-[2px] border-gray-300 hover:border-red-400 flex">Web Development</button>
      <button className="text-black bg-white rounded-2xl text-sm px-3 py-2 border-[2px] border-gray-300 hover:border-red-400 flex">Mobile App</button>
      <button className="text-black bg-white rounded-2xl text-sm px-3 py-2 border-[2px] border-gray-300 hover:border-red-400 flex">UL/UX Design</button>
    </div>
      </div>

        {/* cards */}
      <div className="w-full px-[100px] bg-gray-50 pb-16">
        <div className="grid md:grid-cols-3 grid-flex gap-9  ">
                
                {/* card 1 */}
            <div className=" relative card w-[380px] h-[460px] border-[1px] bg-white hover:shadow-xl border-gray-300 hover:border-red-300 rounded-2xl group overflow-hidden   ">
             <img src="/omorlo-presentation.png" alt=""  className="img-card-top h-[250px] rounded-2xl transition-transform duration-500 group-hover:scale-105"/>
             <div className="absolute inset-0 bg-black/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                View Case Study   </button>
               </div>
             <div className="p-5 ">
             <h5 className="text-sm text-blue-500 font-medium">ECOMMERENCE</h5>
             <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">Omrolo </h1>
                <p className="text-sm text-gray-700">Real-time anomaly detation system processing 10M+ transcation with daily 99.9% acurracy.</p>
             <div className="flex flex-wrap gap-3 sm:gap-4 py-5  ">
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Laravel</button>
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Livewire</button>
               <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Tailwind css</button>
             </div>
             </div>
           </div>

           {/* card 2 */}
            <div className=" relative card w-[380px] h-[460px] border-[1px] bg-white hover:shadow-xl border-gray-300 hover:border-red-300 rounded-2xl group overflow-hidden   ">
             <img src="/swish.jpg" alt=""  className="img-card-top w-full h-[250px] rounded-2xl transition-transform duration-500 group-hover:scale-105"/>
             <div className="absolute inset-0 bg-black/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                View Case Study   </button>
               </div>
             <div className="p-5">
             <h5 className="text-sm text-blue-500 font-medium">FLUTTER</h5>
             <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">Swish Social</h1>
                <p className="text-sm text-gray-700">A cross-platform mobile shopping experiences with AR product try-on capabilities.</p>
             <div className="flex flex-wrap gap-3 sm:gap-4 py-5  ">
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Flutter</button>
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Laravel</button>
               <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Stripe</button>
             </div>
             </div>
           </div>


                 {/* card 3 */}
            <div className=" relative card w-[380px] h-[460px] border-[1px] bg-white hover:shadow-xl border-gray-300 hover:border-red-300 rounded-2xl group overflow-hidden   ">
             <img src="/mobile-screens.png" alt=""  className="img-card-top rounded-2xl transition-transform duration-500 group-hover:scale-105"/>
             <div className="absolute inset-0 bg-black/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                View Case Study   </button>
               </div>
             <div className="p-5">
             <h5 className="text-sm text-blue-500 font-medium">UL/UX DESIGN</h5>
             <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">Mobile Screens </h1>
                <p className="text-sm text-gray-700">Complete ux overhoual resulting in a 40% increase in user retention and ression time.</p>
             <div className="flex flex-wrap gap-3 sm:gap-4 py-5  ">
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Figma</button>
             </div>
             </div>
           </div>


                 {/* card 4 */}
           <div className=" relative card w-[380px] h-[460px] border-[1px] bg-white hover:shadow-xl border-gray-300 hover:border-red-300 rounded-2xl group overflow-hidden   ">
             <img src="/ecommerce.png" alt=""  className="img-card-top h-[250px] w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"/>
             <div className="absolute inset-0 bg-black/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                View Case Study   </button>
               </div>
             <div className="p-5">
             <h5 className="text-sm text-blue-500 font-medium">WEB DEVELOPMENT</h5>
             <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">E-COMMERENCE</h1>
                <p className="text-sm text-gray-700">Enterprise-grade portal internal resource management and employee engagemnet</p>
             <div className="flex flex-wrap gap-3 sm:gap-4 py-5  ">
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Vue.js</button>
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Laravel</button>
               <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">AWS</button>
             </div>
             </div>
           </div>


               {/* card 5 */}
           <div className=" relative card w-[380px] h-[460px] border-[1px] bg-white hover:shadow-xl border-gray-300 hover:border-red-300 rounded-2xl group overflow-hidden   ">
             <img src="/billanory (2).png" alt=""  className="img-card-top h-[250px] rounded-2xl transition-transform duration-500 group-hover:scale-105"/>
             <div className="absolute inset-0 bg-black/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                View Case Study   </button>
               </div>
             <div className="p-5">
             <h5 className="text-sm text-blue-500 font-medium">WEB DEVELOPMENT</h5>
             <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">Billonary Investment Tool </h1>
                <p className="text-sm text-gray-700">Saas platform leveraging LLMs to generate marketing copy in seconds.</p>
             <div className="flex flex-wrap gap-3 sm:gap-4 py-5  ">
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">OpenAI API</button>
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Next.js</button>
               <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Node.js</button>
             </div>
             </div>
           </div>



                {/* card 6 */}
             <div className=" relative card w-[380px] h-[460px] border-[1px] bg-white hover:shadow-xl border-gray-300 hover:border-red-300 rounded-2xl group overflow-hidden   ">
             <img src="/food .png" alt=""  className="img-card-top w-full h-[250px] rounded-2xl transition-transform duration-500 group-hover:scale-105"/>
             <div className="absolute inset-0 bg-black/50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button className="px-4 py-1 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
                View Case Study   </button>
               </div>
             <div className="p-5">
             <h5 className="text-sm text-blue-500 font-medium">MOBILE APP</h5>
             <h1 className="text-2xl font-medium group-hover:text-blue-600 py-1">Grocery Order</h1>
                <p className="text-sm text-gray-700">Sequre patient data management system with telemedicine integration.</p>
             <div className="flex flex-wrap gap-3 sm:gap-4 py-5  ">
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Reat Native</button>
              <button className="text-black bg-gray-50  rounded-xl text-xs px-2 py-1 border-[1px] border-gray-300 hover:border-red-400 flex">Tailwind css</button>
             </div>
             </div>
           </div>
        </div>

      </div>
    </section>


  )}

  export default Card;