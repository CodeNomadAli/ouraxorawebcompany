import React from "react";
import { Link } from "react-router-dom";
import {  FaMailBulk,FaMap,FaPhone, FaShieldAlt } from "react-icons/fa";

const Trusted = () => {
  return (
   <section className="w-full ">
  <div className="bg-white text-center py-8 px[100px]">
  <h4 className="text-sm font-bold text-gray-400">Trusted by Engineering Teams at</h4>
  <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-400 font-bold text-xl py-5">
    <h4>Google</h4>
    <h4>Microsoft</h4>
    <h4>Spotify</h4>
    <h4>Airbnb</h4>
    <h4>Stripe</h4>
   </div>
  </div>

  <div className="bg-gray-50 w-full px-[100px] py-16">
   <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 justify-center">
  <div className="w-full max-w-[350px] h-[280px] border text-center p-7 rounded-xl shadow-xl bg-white border-gray-200 mx-auto">
    <FaMailBulk className="text-blue-400 w-10 h-10 mx-auto" />
    <h1 className="text-xl font-bold pt-8">Email Us</h1>
    <p className="text-sm text-gray-500 py-2">Best for detailed RFPs</p>
    <a href="mailto:axoraweb@gmail.com">
  <h1 className="text-blue-600 font-bold cursor-pointer">
    axoraweb@gmail.com
  </h1>
</a>

  </div>

  <div className="w-full max-w-[350px] h-[280px] border text-center p-7 rounded-xl shadow-xl bg-white border-gray-200 mx-auto">
    <FaPhone className="text-blue-400 w-10 h-10 mx-auto" />
    <h1 className="text-xl font-bold pt-8">Call Us</h1>
    <p className="text-sm text-gray-500 py-2">Mon-Fri from 8am to 5pm</p>
    <a 
  href="https://wa.me/923245237429?text=Hello%20Axoraweb%20Solutions"
  target="_blank"
  rel="noopener noreferrer"
>
  <h1 className="text-blue-600 font-bold cursor-pointer">
    +92 324 5237429
  </h1>
</a>
  <a
  href="https://wa.me/923091419331?text=Hello%20Axoraweb%20Solutions"
  target="_blank"
  rel="noopener noreferrer"
>
  <h1 className="text-blue-600 font-bold cursor-pointer">
    +92 3091419331
  </h1>
</a>

    
  </div>

  <div className="w-full max-w-[350px] h-[280px] border text-center p-7 rounded-xl shadow-xl bg-white border-gray-200 mx-auto">
    <FaMap className="text-blue-400 w-10 h-10 mx-auto" />
    <h1 className="text-xl font-bold pt-8">Visit HQ</h1>
    <p className="text-sm text-gray-500 py-2">Software House</p>
    <h1 className="text-gray-700 font-bold">Pakistan , Lahore, DHA  </h1>
  </div>
</div>

  </div>
  <hr className="text-gray-700"/>


  <div className="w-full bg-white py-10">
      
    <section class="bg-white py-16 px-4 font-sans">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">What Happens After You Click Send?</h2>

    <div class="relative">
      <div class="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
        
        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-[#0B1221] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            1
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Internal Review</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">
            Our tech leads analyze your requirements.
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-[#0B1221] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            2
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Discovery Call</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">
            We meet to discuss scope and strategy.
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-[#0B1221] text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            3
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Proposal</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">
            You receive a timeline and fixed-price quote.
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 outline outline-offset-4 outline-white">
            4
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Kickoff</h3>
          <p class="text-slate-500 text-sm leading-relaxed max-w-[200px]">
            We sign the contract and start coding.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
  </div>



 
   </section>

  )}

  export default Trusted;