import React from "react";
import { Link } from "react-router-dom";
import { FaSearch,FaPencilRuler, FaLaptop, FaRocket } from "react-icons/fa";

const  Work = () => {
  return (
   <section>
     <section class="bg-gray-50 py-16 px-[100px]">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">How We Work</h2>

    <div class="relative">
      <div class="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
        
        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-2 border-red-500">
          <FaSearch className="w-6 h-12 text-gray-500" />       
        </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Discovery</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">
          We analyze your goals and technical requirements.
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6  hover-border-red">
          <FaPencilRuler  className="w-6 h-12 text-amber-500" />       
        </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Design</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">We craft intuitive UI/UX and system architecture.     </p>
        </div>

        <div class="flex flex-col items-center text-center">
         <div class="w-20 h-20 rounded-full bg-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-2 border-red-500">
          <FaLaptop  className="w-6 h-12 text-gray-700" />       
        </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Development</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">Agile sprints to bring the product to life.  </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-white  flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-2 border-red-500">
          <FaRocket  className="w-6 h-12 text-blue-700" />       
        </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Launch</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">Testing, deployment, and ongoing scaling.</p>
        </div>

      </div>
    </div>
  </div>
</section>


  <div className="bg-white text-center py-8 px[100px] w-full">
  <h4 className="text-sm font-bold text-gray-400">Powering Solutions With</h4>
  <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-xl py-5">
    <h4>Laravel</h4>
    <h4>React</h4>
    <h4>Tailwind</h4>
    <h4>Python</h4>
    <h4>Aws</h4>
    <h4>OpenAI</h4>

   </div>
  </div>
   </section>


  )}

  export default Work