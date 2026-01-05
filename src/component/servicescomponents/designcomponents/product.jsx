import React from "react";
import { Link } from "react-router-dom";

const Productsec = () => {
  return (
      <section className="w-full px-[100px] py-16 bg-blue-50 text-center justify-items-center">
       <h1 className="text-4xl font-bold">Is your product confusing your users?</h1>
       <p className="text-gray-500 font-medium py-4">Let's fix that. Schedule a free 30-minute discovery call. We'll review your current <br /> interface and identify quick wins.</p>
       <Link to="/contact"><button type="button" className="bg-blue-600 text-white py-3 mt-5 px-4 rounded-3xl hover:bg-blue-500">Book Discovery Call</button></Link>

      </section>
  

  )}

  export default Productsec;