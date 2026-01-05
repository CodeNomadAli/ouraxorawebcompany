import React from "react";
import { FaCheckCircle, FaMailBulk } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Formsection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-[80px] lg:px-[170px] py-14">
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          
          <div className="flex flex-col lg:flex-row h-full">

            <div className="relative lg:w-[500px] bg-gray-900 p-8 py-12 overflow-hidden">
              <span className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500 to-transparent"></span>
              <button className="relative text-blue-600 bg-blue-50 text-sm px-4 py-1 border border-blue-100 rounded-2xl">Project Inquiry</button>
              <h1 className="relative text-3xl lg:text-4xl font-bold text-white py-4"> Let's architect your<span className="text-blue-500">solution.</span></h1>
             <p className="relative text-gray-400 py-2">
                Fill out the form to schedule a technical consultation. We usually
                respond within 2 hours during business days.</p>

             <div className="flex gap-3 pt-10">
                <div className="w-12 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                  <FaCheckCircle className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-bold text-white">NDA Protected</h1>
                  <p className="text-sm text-gray-400">Your idea is safe with us.</p>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <div className="w-12 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                  <FaRegMessage className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-bold text-white">Fast Response</h1>
                  <p className="text-sm text-gray-400"> Quick replies from our experts.</p>
                </div>
              </div>

              <hr className="mt-24 border-gray-700" />

              <p className="text-sm text-gray-500 pt-6">Direct Contact</p>

              <div className="flex items-center gap-3 group pt-2">
                <FaMailBulk className="text-white group-hover:text-blue-400 w-6 h-6" />
                <h1 className="text-white text-xl font-bold group-hover:text-blue-400"> axoraweb@gmail.com</h1>
              </div>
            </div>


           <div className="lg:w-2/3 w-full  p-6 md:p-10 ">
              <form className="space-y-6">
                 <div>
                 <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                   <input type="text"id="name"placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"   />
              </div>
                <div className=" gap-4 grid sm:grid-cols-1 md:grid-cols-2">
                <div>
                 <label className="block text-gray-700 font-medium mb-2" >Work Email</label>
                 <input type="email"id="email"placeholder="johncompany@gmail.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"   />
              </div>
              <div>
                 <label className="block text-gray-700 font-medium mb-2" >Phone (Optional)</label>
                 <input type="tell"id="number"placeholder="+1-(555)000-0000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"   />
              </div>
              </div>
                <div className=" gap-4 grid sm:grid-cols-1 md:grid-cols-2">
              <div>
                 <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Service Needed</label>
                 <select id="service"className="w-full bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50">
                 <option value="">Service Needed</option>
                 <option value="custom-software">Custom Software Development</option>
                 <option value="web-development">AI Machine Learning</option>
                 <option value="mobile-app">Web Development</option>
                 <option value="ui-ux-design">Mobile App</option>
                </select>
              </div>

                <div>
                 <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Estimated Budget</label>
                  <input type="number"id="number"placeholder="e.g. $10k-$25k" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"   />
               </div>
              </div>

           <div className="pt-4 pb-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Project Details</label>
              <textarea id="message"placeholder="Tell us about your goals,timeline,requirement..."className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"rows="4"></textarea>
            </div>
            <div className="pt-2 ">
              <button type="submit"className="w-full bg-blue-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-blue-600 transition-colors"> Request Quote </button>
            </div>
            <p className="text-xs text-center text-gray-400 ">By submitting this form, you agree to our privacy policy. We respect your data.</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Formsection;
