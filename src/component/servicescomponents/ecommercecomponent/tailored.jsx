import React from "react";
import { Link } from "react-router-dom";

const Tailored = () => {
  return (
     <section className="w-full py-16">
     <div className="w-full px-[100px] py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div className="max-w-xl">
    <h1 className="text-3xl font-bold py-2">Tailored for your model</h1>
    <p className="text-gray-500 font-medium py-2 text-sm"> One size does not fit all. We architect solutions based on your specific business <br /> requirements.</p>
  </div>

  <div className="mt-4 md:mt-0">
    <a href="#" className="text-blue-600 font-semibold hover:underline"> Learn More →</a>
  </div>
</div>
   <hr  className="text-gray-100 px-[100px]"/>

  

  <div className="w-full px-[100px] py-16">
    <div className="grid grid-cols-3 grid-flex gap-5">
      <div className="w-[380px] h-[330px] group bg-white shadow hover:shadow-xl p-8 border-[1px] border-gray-100">
          <h3 className="text-sm font-bold text-gray-400">Direct to Consumer</h3>
          <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600">D2C Brand Stores</h1>
          <p className="text-2sm text-gray-500">Immersive storytelling meets hard-hitting conversion tactics. Perfect for lifestyle brands scaling on Shopify Plus or WooCommerce.</p>

        <div class="inline-flex items-center gap-2  py-2 mt-8 rounded-full ">
         <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
         <span class="text-sm text-gray-500">Subscription Modeling</span>
        </div> <br />
        
        <div class="inline-flex items-center gap-2    rounded-full ">
         <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
         <span class="text-sm text-gray-500">Bundle Builders</span>
        </div>
      </div>


      <div className="w-[380px] h-[330px] group bg-white shadow hover:shadow-xl p-8 border-[1px] border-gray-100">
          <h3 className="text-sm font-bold text-gray-400">Business to Business</h3>
          <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600">B2B Portals</h1>
          <p className="text-2sm text-gray-500">Complex bulk ordering made simple. Wholesale pricing, net-payment terms, and customer-specific catalogs.</p>

        <div class="inline-flex items-center gap-2  py-2 mt-14 rounded-full ">
         <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
         <span class="text-sm text-gray-500">Tiered Pricing</span>
        </div> <br />
        
        <div class="inline-flex items-center gap-2    rounded-full ">
         <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
         <span class="text-sm text-gray-500">Quick Order Forms</span>
        </div>
      </div>




      <div className="w-[380px] h-[330px] group bg-white shadow hover:shadow-xl p-8 border-[1px] border-gray-100">
          <h3 className="text-sm font-bold text-gray-400">Multi-Vendor</h3>
          <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600">Marketplaces</h1>
          <p className="text-2sm text-gray-500">Build the next Amazon or Etsy. Scalable architecture that allows multiple vendors to list products while you control the commission.</p>

        <div class="inline-flex items-center gap-2  py-2 mt-8 rounded-full ">
         <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
         <span class="text-sm text-gray-500">Vendor Dashboards</span>
        </div> <br />
        
        <div class="inline-flex items-center gap-2    rounded-full ">
         <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
         <span class="text-sm text-gray-500">Commission Splitting</span>
        </div>
      </div>
    </div>
</div>





  <div className="bg-gray-50 text-center py-14 mt-7 px[100px]">
  <h4 className="text-sm font-bold text-gray-400">We are certified partners with</h4>
  <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-gray-500 font-bold text-2xl py-5">
    <h4>Shopify</h4>
    <h4>Magento</h4>
    <h4>BigCommerce</h4>
    <h4>WooCommerce</h4>
    <h4>Salesforce</h4>
   </div>
  </div>


     </section>


  )}

  export default Tailored