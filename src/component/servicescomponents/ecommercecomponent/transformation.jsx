import React from "react";
import { Link } from "react-router-dom";

const Transformation= () => {
  return (
    <section className="w-full px-[100px] py-20  text-center justify-items-center">
      <h1 className="text-4xl py-3  font-bold">Start your transformation.</h1>
      <p className="text-gray-500 py-3">Join the forward-thinking brands that trust us with their digital commerce strategy.</p>
           <Link to="/contact"><button type="button" className="bg-blue-600 mt-4 text-white py-4 px-5 rounded-2xl hover:bg-blue-500">Book a Free Consultation</button></Link>
       <p className="text-sm text-gray-400 py-3">No sales pressure. Just a technical discovery call.</p>
    </section>


  )}
  export default Transformation