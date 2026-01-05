import React from "react";
import { Link } from "react-router-dom";

const Cardabout = () => {
  return (
  <section className="w-full  ">
     <div className="w-full bg-gray-50 px-[100px] py-14">
      <div className="grid md:grid-cols-3 grid-flex py-12 gap-4  ">
        <div className="'w-[250px] h-[190px] border-[1px] border-t-red-500 border-t-[4px] p-8 shadow hover:shadow-xl rounded-xl bg-white">
          <h1 className="text-xl font-bold">Radical Transparency</h1>
          <p className="text-gray-700 py-2">No hidden fees. No tech jargon used to confuse you. You have full access to our project boards and code repositories.</p>
        </div>

          <div className="'w-[250px] h-[190px] border-[1px] border-t-blue-500 border-t-[4px] p-8 shadow hover:shadow-xl rounded-xl bg-white">
          <h1 className="text-xl font-bold">Innovation First</h1>
          <p className="text-gray-700 py-2">We don't use old tech. We leverage the latest in AI, React, and Laravel to give you a competitive advantage.</p>
        </div>

          <div className="'w-[250px] h-[190px] border-[1px] border-t-yellow-200 border-t-[4px] p-8 shadow hover:shadow-xl rounded-xl bg-white">
          <h1 className="text-xl font-bold">Results Obsessed</h1>
          <p className="text-gray-700 py-2">We don't care about vanity metrics. We care about ROI, User Retention, and Scalability. If it doesn't grow your business, we don't build it.</p>
        </div>
      </div>
     </div>


     <div className="w-full bg-gray-50 px-[100px] py-16">
       <div className="text-center">
         <h4 className="text-2sm text-blue-600 font-bold">Social Proof</h4>
         <h1 className="text-4xl  font-bold py-1">What Our Clients Say</h1>
       </div>
      <div className="grid md:grid-cols-3 grid-flex py-12 gap-4  ">
        <div className="'w-[250px] h-[220px] border-[1px]  p-5 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm text-gray-600">"<i>They didn't just build a website; they built a revenue machine. Our conversions doubled in 3 months.</i>"</p>
         <div className="flex gap-3 py-3">
           <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-700 font-bold items-center justify-center flex">J</div>
             <div>
                <h1 className="text-2sm font-bold">James L. <br /><span className="text-gray-400">CTO,</span></h1>
             </div>
         </div>
        </div>


          <div className="'w-[250px] h-[220px] border-[1px]  p-5 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm text-gray-600">"<i>Professional, transparent, and insanely talented. Best agency experience I've had in 10 years.</i>"</p>
         <div className="flex gap-3 py-3">
           <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-700 font-bold items-center justify-center flex">D</div>
             <div>
                <h1 className="text-2sm font-bold">David K. <br /><span className="text-gray-400">Founder,</span></h1>
             </div>
         </div>
        </div>


          <div className="'w-[250px] h-[220px] border-[1px]  p-5 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm text-gray-600">"<i>Their design team has a gift for making complex data look simple and beautiful</i>"</p>
         <div className="flex gap-3 py-8">
           <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-700 font-bold items-center justify-center flex">S</div>
             <div>
                <h1 className="text-2sm font-bold">Sophie B. <br /><span className="text-gray-400">Product Owner,</span></h1>
             </div>
         </div>
        </div>


          <div className="'w-[250px] h-[220px] border-[1px]  p-5 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm text-gray-600">"<i>The AI integration they proposed saved us 40 hours of manual data entry per week. Incredible ROI</i>"</p>
         <div className="flex gap-3 py-3">
           <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-700 font-bold items-center justify-center flex">A</div>
             <div>
                <h1 className="text-2sm font-bold">Anita R.<br /><span className="text-gray-400">Director of Ops, </span></h1>
             </div>
         </div>
        </div>


          <div className="'w-[250px] h-[220px] border-[1px]  p-5 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm text-gray-600">"<i>We threw a complex legacy migration at them, and they handled it without a single minute of downtime</i>"</p>
         <div className="flex gap-3 py-3">
           <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-700 font-bold items-center justify-center flex">M</div>
             <div>
                <h1 className="text-2sm font-bold">Marcus T. <br /><span className="text-gray-400">VP of Engineering,</span></h1>
             </div>
         </div>
        </div>


          <div className="'w-[250px] h-[220px] border-[1px]  p-5 shadow hover:shadow-xl rounded-xl bg-white">
         <p className="text-blue-600 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
         <p className="text-2sm text-gray-600">"<i>Support is top-notch. Even after launch, they treat us like their only client.</i>"</p>
         <div className="flex gap-3 py-8">
           <div className="w-12 h-12 rounded-full bg-blue-200 text-blue-700 font-bold items-center justify-center flex">R</div>
             <div>
                <h1 className="text-2sm font-bold">Ryan P.<br /><span className="text-gray-400">CEO,</span></h1>
             </div>
         </div>
        </div>
     </div>

     </div>






     <div className="w-full py-20 px-[100px]">
  <div className=" max-w-7xl mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
    <div>
      <h1 className="text-4xl font-extrabold text-blue-600">5+</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Years Experience</p>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-blue-600">12</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Countries Served</p>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-blue-600">$50M+</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Client Revenue Generated</p>
    </div>

      <div>
      <h1 className="text-4xl font-extrabold text-blue-600">100%</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Project Delivery Rate</p>
    </div>

  </div>
</div>


     </div>


     <div className="w-full bg-gradient-to-tr from-blue-600 via-black to-red-600 text-center py-16  justify-items-center px-[100px]">
     <p className="text-5xl text-white font-bold">Not Ready to Start a Project?</p>
       <p className="text-xl text-gray-400 py-4">That's okay. Join 5,000+ CTOs and Founders who get our weekly insights <br /> on AI trends, scalable architecture, and market shifts.</p>
       <p className="text-blue-500 text-xl font-bold">Plus, get our "2025 Tech Stack Audit Checklist" for free.</p>

       <div className="grid md:grid-cols-2 grid-flex py-12 gap-5">
           <div>
             <input type="email"id="email"placeholder="Enter your email work..." className="w-full px-4 py-3 pr-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-500"    />
           </div>
           <div>
             <button className="text-white  bg-blue-600 rounded-xl text-xl px-3 py-3  flex"> Get the Guide  </button>
           </div>
       </div>
     </div>
  </section>


  )}

  export default Cardabout;