import React from "react";
import { Link } from "react-router-dom";

const Lunch = () => {
  return (
   <section className="w-full">
       <div className="w-full px-[100px] bg-gray-900 py-16 text-center">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-2sm md:text-2sm font-bold text-center text-blue-800 ">How we work</h2>
             <h1 className="text-4xl font-bold text-white py-5 ">From Concept to Launch in 4 Weeks</h1>
            <div class="relative">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10 mt-9">
                
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gray-700 text-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-[1px] border-gray-500  hover:bg-blue-600">01</div>
                  <h3 class="text-xl font-bold text-white mb-2">Discovery</h3>
                  <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">We deep dive into your brand, competitors, and goals to create a winning strategy. </p>
                </div>
        
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gray-700 text-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-[1px] border-gray-500  hover:bg-blue-600">02</div>
                  <h3 class="text-xl font-bold text-white mb-2">Design</h3>
                  <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">We create high-fidelity UI mockups. You see exactly how it looks before we code.   </p>
                </div>
        
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gray-700 text-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-[1px] border-gray-500  hover:bg-blue-600">03</div>
                  <h3 class="text-xl font-bold text-white mb-2">Development</h3>
                  <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">Clean, semantic coding using Laravel & Tailwind. Optimized for speed and security. </p>
                </div>
        
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gray-700 text-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-[1px] border-gray-500  hover:bg-blue-600">04</div>
                  <h3 class="text-xl font-bold text-white mb-2">Launch</h3>
                  <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">Deployment to cloud servers, domain setup, and basic SEO indexing. We handle IT.</p>
                </div>
        
              </div>
            </div>
          </div>
       </div>
   </section>

  )}

  export default Lunch;