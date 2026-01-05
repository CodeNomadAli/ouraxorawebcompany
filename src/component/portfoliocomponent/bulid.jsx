import React from "react";
import { Link } from "react-router-dom";
const Bulid = () => {
  return (
     <section className="w-full  mt-20 ">
        <div className="px-[100px] text-center justify-items-center bg-gray-50 py-28">
        <button className="text-blue-600 bg-blue-50 text-sm h-8 px-4 border-[1px] border-red-100 rounded-2xl ">Award Winning Agency</button>
        <h1 className="text-6xl font-bold  py-4">We Build Digital <br /><span className="text-blue-600">Masterpieces</span></h1>
        <p className="text-xl text-gray-500 py-3">From intelligent AI algorithms to stunning web experiences, we engineer <br /> software that transforms businesses and defines the future.</p>
        <div className="flex gap-4 py-6">
            <Link to="/portfolio"><button type="button" className="bg-blue-600 text-white py-3 px-4 rounded-2xl hover:bg-blue-500">View Our Work</button></Link>
           <Link to="/contact"> <button type="button" className="bg-white text-black py-3 px-4 rounded-2xl hover:bg-slate-50 border-[1px] border-gray-200">Start a Project</button></Link>
        </div>
        </div>

          <hr />
         <div className=" max-w-7xl mx-auto bg-white w-full py-14 ">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
    <div>
      <h1 className="text-4xl font-extrabold text-blue-600">150+</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Projects Delivered</p>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-blue-600">98%</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Projects Delivered</p>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-blue-600">10M+</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Users Impacted</p>
    </div>

      <div>
      <h1 className="text-4xl font-extrabold text-blue-600">24/7</h1>
      <p className="mt-2 font-bold text-xl text-gray-600">Support & Uptime</p>
    </div>

  </div>
</div>
<hr />
     </section>

  )}

  export default Bulid