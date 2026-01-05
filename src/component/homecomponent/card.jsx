import React from "react";
import { Link } from "react-router-dom";
import {FaCheck, FaCode,FaMobile,FaPencilRuler,FaCog,FaRobot,FaLaptopCode } from "react-icons/fa";

const Card = () => {
  return (

    <section className="w-full flex flex-col items-center py-12 justify-center justify-items-center ">
      
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20 justify-items-center">
          {/*card 1 */}
        <div className="border-[1px] px-5 h-[420px] w-[380px] rounded-3xl mt-14 group  transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-y-4-[380px] hover:border-red-200  hover:bg-gray-50">
       <div className="w-14 h-13 bg-slate-50 px-4 py-4 m-6 rounded-xl group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
       <FaCode className="w-5 h-5 text-gray-700" />       
        </div>
        <div className="px-5">
         <h3 className="text-2xl font-bold">Custom Software</h3>
         <p className="mt-2 font-serif text-sm">Accelerate your pipeline with automated deployment, CI/CD, and scalable infrastructure.</p>
         </div>
         <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
          
          <div className="flex px-5 mt-7">
         <FaCheck className="w-4 h-7 text-blue-600" />       
           <p className="text-sm text-gray-400 px-5 mt-1 font-bold">CI/CD Pipelines</p>
         </div>

          <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Cloud Infrastructure</p>
         </div>

         <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Monitoring & Alerts</p>
         </div>
             <div className="flex mt-5 px-5">
            <button className="text-blue-500 font-bold  ">Learn more </button>
            <span className="text-blue-600 w-6 font-bold px-3">→</span>
        </div>
      </div>
   

        {/*card 2 */}
        <div className="border-[1px] px-5 h-[420px] w-[380px] rounded-3xl mt-14 group  transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-y-4-[380px] hover:border-red-200  hover:bg-gray-50">
       <div className="w-14 h-13 bg-slate-50 px-4 py-4 m-6 rounded-xl group-hover:shadow-2xl  group-hover:text-white">
       <FaPencilRuler className="w-5 h-5 text-gray-700" />       
        </div>
        <div className="px-5">
         <h3 className="text-2xl font-bold">UI/UX Design</h3>
         <p className="mt-2 font-serif text-sm">Crafting intuitive and engaging user interfaces that ensure seamless digital experiences.</p>
         </div>
         <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
          
          <div className="flex px-5 mt-7">
         <FaCheck className="w-4 h-7 text-blue-600" />       
           <p className="text-sm text-gray-400 px-5 mt-1 font-bold">Wireframes & Prototypes</p>
         </div>

          <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Design Systems</p>
         </div>

         <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Mobile-First Design</p>
         </div>
             <div className="flex mt-9 px-5">
            <button className="text-blue-500 font-bold  ">Learn more </button>
            <span className="text-blue-600 w-6 font-bold px-3">→</span>
        </div>
      </div>
   

     {/*card 3 */}
        <div className="border-[1px] px-5 h-[420px] w-[380px] rounded-3xl mt-14 group  transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-y-4-[380px] hover:border-red-200  hover:bg-gray-50">
       <div className="w-14 h-13 bg-slate-50 px-4 py-4 m-6 rounded-xl group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
       <FaMobile className="w-5 h-5 text-gray-700" />       
        </div>
        <div className="px-5">
         <h3 className="text-2xl font-bold">Mobile App Dev</h3>
         <p className="mt-2 font-serif text-sm">Fast, responsive, and feature-rich mobile applications for iOS and Android.</p>
         </div>
         <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
          
          <div className="flex px-5 mt-7">
         <FaCheck className="w-4 h-7 text-blue-600" />       
           <p className="text-sm text-gray-400 px-5 mt-1 font-bold">iOS & Android Apps</p>
         </div>

          <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Flutter & React Native</p>
         </div>

         <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Offline Functionality</p>
         </div>
             <div className="flex mt-5 px-5">
            <button className="text-blue-500 font-bold  ">Learn more </button>
            <span className="text-blue-600 w-6 font-bold px-3">→</span>
        </div>
      </div>
   

     {/*card 4 */}
        <div className="border-[1px] px-5 h-[420px] w-[380px] rounded-3xl mt-14 group  transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-y-4-[380px] hover:border-red-200  hover:bg-gray-50">
       <div className="w-14 h-13 bg-slate-50 px-4 py-4 m-6 rounded-xl group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
       <FaCog className="w-5 h-5 text-gray-700" />       
        </div>
        <div className="px-5">
         <h3 className="text-2xl font-bold">DevOps & Automation</h3>
         <p className="mt-2 font-serif text-sm">Accelerate your pipeline with automated deployment, CI/CD, and scalable infrastructure.</p>
         </div>
         <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
          
          <div className="flex px-5 mt-7">
         <FaCheck className="w-4 h-7 text-blue-600" />       
           <p className="text-sm text-gray-400 px-5 mt-1 font-bold">CI/CD Pipelines</p>
         </div>

          <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Cloud Infrastructure</p>
         </div>

         <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Monitoring & Alerts</p>
         </div>
             <div className="flex mt-5 px-5">
            <button className="text-blue-500 font-bold  ">Learn more </button>
            <span className="text-blue-600 w-6 font-bold px-3">→</span>
        </div>
      </div>
   

     {/*card 5 */}
        <div className="border-[1px] px-5 h-[420px] w-[380px] rounded-3xl mt-14 group  transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-y-4-[380px] hover:border-red-200  hover:bg-gray-50">
       <div className="w-14 h-13 bg-slate-50 px-4 py-4 m-6 rounded-xl group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
       <FaRobot  className="w-5 h-5 text-gray-700" />       
        </div>
        <div className="px-5">
         <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
         <p className="mt-2 font-serif text-sm">Implement intelligent solutions like machine learning and computer vision to unlock insights.</p>
         </div>
         <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
          
          <div className="flex px-5 mt-7">
         <FaCheck className="w-4 h-7 text-blue-600" />       
           <p className="text-sm text-gray-400 px-5 mt-1 font-bold">ML Model Development</p>
         </div>

          <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">AI-Powered Chatbots
</p>
         </div>

         <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">Predictive Analytics</p>
         </div>
             <div className="flex mt-5 px-5">
            <button className="text-blue-500 font-bold  ">Learn more </button>
            <span className="text-blue-600 w-6 font-bold px-3">→</span>
        </div>
      </div>
   

     {/*card 6 */}
        <div className="border-[1px] px-5 h-[420px] w-[380px] rounded-3xl mt-14 group  transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-y-4-[380px] hover:border-red-200  hover:bg-gray-50">
       <div className="w-14 h-13 bg-slate-50 px-4 py-4 m-6 rounded-xl group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
       <FaLaptopCode className="w-5 h-5 text-gray-700" />       
        </div>
        <div className="px-5">
         <h3 className="text-2xl font-bold">Website Development</h3>
         <p className="mt-2 font-serif text-sm">Fast, responsive, and scalable websites optimized for performance and SEO.

</p>
         </div>
         <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
          
          <div className="flex px-5 mt-7">
         <FaCheck className="w-4 h-7 text-blue-600" />       
           <p className="text-sm text-gray-400 px-5 mt-1 font-bold">Responsive Web Design</p>
         </div>

          <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">CMS Integration</p>
         </div>

         <div className="flex px-5 ">
         <FaCheck className="w-4 h-7 text-blue-600 mt-2" />       
           <p className="text-sm text-gray-400 px-5 mt-3 font-bold">E-commerce Solutions</p>
         </div>
             <div className="flex mt-9 px-5">
            <button className="text-blue-500 font-bold  ">Learn more </button>
            <span className="text-blue-600 w-6 font-bold px-3">→</span>
        </div>
      </div>
    <div className="w-full justify-items-center py-10">  
     <Link to="/services/webdevelop">  <button className="flex items-center  text-white bg-blue-600 rounded-xl text-xl px-6 py-3 hover:bg-blue-800 transition-colors duration-300"> View All Services
  <span className="ml-3 font-bold">→</span>
</button> </Link>
  </div>




   
       </div>
       </section>
  )}

  export default Card;