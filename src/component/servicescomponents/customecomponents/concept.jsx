import React from "react";
import { Link } from "react-router-dom";

const Concept = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
       <div className="w-full text-center">
       <h1 className="text-2sm text-blue-600 font-bold">Our Methodology</h1>
       <h2 className="text-4xl font-bold py-3">From Concept to <span className="text-blue-700"> Code</span></h2>
       <p className="text-gray-500">We follow a rigorous, agile-driven process to ensure your custom software is <br /> delivered on time, on budget, and bug-free.</p>
       </div>


     <section className="relative max-w-6xl mx-auto px-6 py-20 mt-20">
     <div className="absolute top-0 left-4 md:left-1/2 h-full w-[2px] bg-gray-200 md:-translate-x-1/2"></div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
     <div className="md:text-right md:pr-16">
       <h3 className="text-2xl font-bold mb-3"> Discovery & Strategy</h3>
       <p className="text-gray-500">We dig deep into your business logic. We define user personas,technical requirements, and the roadmap.</p>
    </div>
   <div></div>

    <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg">01</div>
    </div>

  </div>


   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
    <div></div>

    <div className="md:text-left ml-12 md:pr-16">
       <h3 className="text-2xl font-bold mb-3"> Architecture & Design</h3>
       <p className="text-gray-500">We architect the database, select the tech stack, and design high-fidelity UI/UX prototypes. No code is written until the blueprint is perfect.</p>
    </div>

    <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-100 text-black flex items-center justify-center font-bold shadow-lg">02</div>
    </div>
  </div>




    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
     <div className="md:text-right md:pr-16">
       <h3 className="text-2xl font-bold mb-3">Agile Development</h3>
       <p className="text-gray-500">Our engineers work in two-week sprints. You get regular updates and demos, ensuring the software evolves exactly as you envisioned.</p>
    </div>
    <div></div>

    <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
      <div className="w-12 h-12 rounded-full bg-white text-black border-2 border-red-100 flex items-center justify-center font-bold shadow-lg">03</div>
    </div>
  </div>





   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mb-20">
    <div></div>

    <div className="md:text-left ml-12 md:pr-16">
       <h3 className="text-2xl font-bold mb-3"> QA & Deployment</h3>
       <p className="text-gray-500">Rigorous automated and manual testing ensures stability. Once approved, we manage the seamless deployment to your cloud infrastructure.</p>
    </div>
    <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
      <div className="w-12 h-12 rounded-full bg-white text-black border-2 border-red-100 flex items-center justify-center font-bold shadow-lg">04</div>
    </div>
</div>






</section>

    </section>


  )}

  export default Concept