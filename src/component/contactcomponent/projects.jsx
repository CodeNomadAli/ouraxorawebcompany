import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt } from "react-icons/fa";
const Projects = () => {
  return (
   <section className="w-full bg-gray-50 flex px-[100px] py-24 mt-20 ">
    <div className="grid md:grid-cols-2 grid-flex gap-12">
       <div>
         <div class="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full border border-red-50 bg-green-50  shadow-sm">
         <span class="w-2 h-2 bg-green-300 rounded-full"></span>
         <span class="text-xs font-medium text-green-600 ">Accepting New Projects</span>
       </div>
       <h1 className="text-6xl font-bold py-5">Let's Engineer <br /> Your</h1>
       <h2 className="text-6xl font-bold py-2 text-blue-600">Next Breakthrough</h2>
       <p className="text-gray-600 text-xl ">Ready to automate your business or build the next SaaS unicorn? Fill out the form, and our engineering team will review your requirements.</p>

       <div className="py-12">
        <div className="flex gap-3">
          <div className="py-2">
          <FaClock className="text-blue-500 w-10 h-10 " />
          </div>
          <div>
            <h1 className="text-xl font-bold">Response in 24 Hours</h1>
            <p className="text-sm text-gray-600">Guaranteed response from a senior dev, not a bot.</p>
          </div>
        </div>

          <div className="flex gap-3 py-3">
          <div className="py-2">
          <FaShieldAlt className="text-blue-500 w-10 h-10 " />
          </div>
          <div>
            <h1 className="text-xl font-bold">Mutual NDA Included</h1>
            <p className="text-sm text-gray-600">Your Intellectual Property is safe from day one.</p>
          </div>
        </div>
        

       </div>

      </div>

      <div className="bg-white shadow-2xl shadow-blue-200 rounded-xl">
        <form className="max-w-lg mx-auto p-7">
          <h1 className="text-xl font-bold">Tell us about your project</h1>
            <div className=" gap-4 py-9 grid sm:grid-cols-1 md:grid-cols-2 ">
              <div>
                 <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                   <input type="text"id="name"placeholder="Ali Hamza" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"   />
              </div>

                <div>
                 <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Work Email</label>
                 <input type="email"id="email"placeholder="axoraweb@gmail.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"   />
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
                 <select id="service"className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-2 focus:ring-red-500 bg-slate-50">
                 <option value="">Select price</option>
                 <option value="custom-software">$5k-$10k</option>
                 <option value="web-development">$10k-$25k</option>
                 <option value="mobile-app">$25k-$50k</option>
                 <option value="ui-ux-design">$50k+</option>
                </select>
              </div>
            </div>

             <div className="py-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Project Details</label>
              <textarea id="message"placeholder="Tell us about your goals,timeline,requirement..."className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"rows="4"></textarea>
            </div>
               
               <div className="flex gap-2">
                <input type="checkbox" name="check" id="" />
                 <p className="text-xs text-gray-400">I agree to the Privacy Policy. Data is 256-bit encrypted.</p>
               </div>
                  <div className="py-8">
                 <button type="submit"className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                   Send Inquiry </button>
                   </div>
        </form>
      </div>      
     </div>


   </section>

  )}

  export default Projects;