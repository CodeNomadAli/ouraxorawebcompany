import React from "react";
import { BsExposure } from "react-icons/bs";
import { Link } from "react-router-dom";

const Imgcard = () => {
  return (
     <section className="w-full px-[100px] py-12 bg-blue-900">
     <div className=" py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div className="max-w-xl">
    <h1 className="text-3xl font-bold py-2 text-white">Selected Work</h1>
    <p className=" font-medium  text-2sm text-white"> Results we've achieved for clients.</p>
  </div>

  <div className="mt-4 md:mt-0">
    <a href="#" className="text-blue-400 font-semibold hover:underline"> Learn More →</a>
  </div>
</div>

    <div className="grid md:grid-cols-2 grid-flex gap-10">
       <div className="relative overflow-hidden rounded-xl group">
        <img src="/ecommerce.png" alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>

        <div className="relative overflow-hidden rounded-xl group">
        <img src="https://appsglobal.co/images/video-player.png" alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>

        <div className="relative overflow-hidden rounded-xl group">
        <img src="/billanory (2).png" alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>

        <div className="relative overflow-hidden rounded-xl group">
        <img src="https://appsglobal.co/images/scalesam.png" alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>

        <div className="relative overflow-hidden rounded-xl group">
        <img src="https://appsglobal.co/images/mess-pilot.png" alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>

        <div className="relative overflow-hidden rounded-xl group">
        <img src="https://appsglobal.co/images/rental-bike.png" alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       </div>
    </div>
     </section>

     
  )}

  export default Imgcard;