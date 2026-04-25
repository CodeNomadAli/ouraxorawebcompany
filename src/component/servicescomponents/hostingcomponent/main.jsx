import React, { useState } from "react";
import { FaCheckCircle, FaMailBulk } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const Mainsection = () => {
  const [count, setCount] = useState(0);
  const [secondCard, setSecondCard] = useState(false);

  const changecard = () => {
    setSecondCard(true);
  };

  return (
    <section className="w-full mt-24">
      {/* Search Bar Section - Full Width Background with Fixed Inner Width */}
      <div className="bg-gray-50 w-full border-b border-gray-100 py-6">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="search"
              name="search"
              className="w-full py-3 border-gray-300 border-[1px] px-3 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search for hosting and domain services..."
            />
            <button
              type="button"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-bold transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container - Consistent Width with Tailored Component */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Your Cart</h1>
          <p className="text-gray-500 mt-2">
            GoDaddy is a trusted growth partner to millions of everyday entrepreneurs.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Cart Items (8/12 of Grid) */}
          <div className="lg:col-span-8">
            <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              
              {/* Domain Registration Item */}
              <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="bg-blue-600 w-24 h-24 md:w-32 md:h-32 rounded-lg text-white font-bold text-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  www
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div>
                        <h1 className="text-xl font-bold text-slate-900">axorawebsolutions.online</h1>
                        <p className="text-gray-700 text-[10px] font-bold bg-gray-100 px-3 py-1 rounded inline-block mt-2 uppercase tracking-tight">
                          The more domain names you own, the more protected your brand is
                        </p>
                        <p className="text-sm text-gray-400 mt-2">.ONLINE Domain Registration</p>
                      </div>
                      
                      <div className="text-right mt-4 md:mt-0 w-full md:w-auto">
                        <h1 className="text-blue-600 font-bold text-2xl">Rs278</h1>
                        <h2 className="line-through text-sm text-gray-500">₨15,447</h2>
                        <p className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-0.5 rounded inline-block mt-1">98% off</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 py-2 mt-6 pt-4 border-t border-gray-50 gap-4">
                    <div className="w-full sm:w-auto">
                      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 w-full sm:w-auto text-sm cursor-pointer">
                        <option value="1-year">1 Year</option>
                        <option value="2-year">2 Years</option>
                        <option value="3-year">3 Years</option>
                        <option value="5-year">5 Years</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      <p className="text-xs">Renews January 2027 for ₨15,447</p>
                      <FaTrash className="text-xl cursor-pointer hover:text-red-500 transition-colors"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 px-6 py-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest border-y border-gray-100">
                Configure Your Domain
              </div>

              {/* Hosting/Protection Offer */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center px-1 shrink-0 mt-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                          Full Domain Protection at Rs167/mo
                        </h2>
                        <span className="bg-[#bcffff] text-[#007b7d] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                          Recommended
                        </span>
                      </div>
                      <div className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 inline-block uppercase tracking-tight mb-3">
                        Chosen by over 225,000 customers each month
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600 leading-snug">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          Prevents hackers from stealing your domain or making unauthorized changes.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          Requires 2-factor verification for vital changes like deleting or transferring.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-right shrink-0 w-full md:w-auto">
                    <div className="text-xl font-bold text-slate-900">Rs1,999</div>
                    <div className="text-sm text-gray-400 line-through">Rs3,299</div>
                    <div className="text-sm font-bold text-blue-500">39% off</div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100"/>

              {/* Email Integration Toggle Area */}
              <div className="p-6 bg-gray-50/30">
                {!secondCard ? (
                  <div className="p-6 border-2 border-dashed border-blue-200 bg-white rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
                    <div className="flex gap-4 items-center">
                      <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                        <FaMailBulk size={24}/>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900">Professional Email Pro Light</h2>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-blue-500 font-bold">Rs219/mo</span>
                          <span className="text-gray-400 line-through text-xs">Rs349</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-full md:w-auto px-10 py-2.5 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all text-sm uppercase"
                      onClick={changecard}
                    >
                      Get It
                    </button>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 shadow-lg mx-auto md:mx-0">
                        <FaMailBulk className="text-2xl text-white" />
                      </div>
                      <div className="flex-1 w-full">
                        <h1 className="text-lg font-bold text-slate-900">Professional Email Pro Light</h1>
                        <div className="mt-4">
                          <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Mailboxes</h3>
                          <div className="flex items-center gap-4 border border-gray-200 w-full sm:w-36 rounded-lg p-1 bg-gray-50">
                            <button className="w-10 h-8 flex items-center justify-center bg-white border rounded shadow-sm text-red-500 hover:bg-red-50" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                            <span className="flex-1 text-center font-bold text-slate-800">{count}</span>
                            <button className="w-10 h-8 flex items-center justify-center bg-white border rounded shadow-sm text-green-500 hover:bg-green-50" onClick={() => setCount(count + 1)}>+</button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right w-full md:w-auto">
                        <div className="text-2xl font-black text-blue-600">₨15,768</div>
                        <div className="text-sm text-gray-400 line-through">₨25,128</div>
                        <FaTrash className="inline-block mt-4 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary (4/12 of Grid) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Checkout Card */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h1>
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                  <h1 className="text-xl font-bold text-slate-900">Subtotal</h1>
                  <h3 className="text-3xl font-black text-blue-600">₨4,905</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-100 text-green-700 font-bold py-3 px-4 rounded-lg text-center text-sm">
                    🎉 Nice! You saved ₨24,149 on your order.
                  </div>
                  <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 text-lg uppercase tracking-wide">
                    Ready for Checkout
                  </button>
                  <p className="text-sm text-gray-500 text-center">Subtotal does not include applicable taxes</p>
                  <p className="text-sm font-bold text-blue-600 underline text-center cursor-pointer">Have a promo code?</p>
                </div>
              </div>

              {/* Quality/Support Badge */}
              <div className="bg-white border border-gray-100 p-5 rounded-xl flex items-center gap-4 shadow-sm">
                <FaCheckCircle className="text-blue-500 text-2xl flex-shrink-0" />
                <div>
                  <h1 className="font-bold text-slate-900 text-sm">Quality You Can Trust</h1>
                  <p className="text-xs text-gray-500">GoDaddy Guides are available 24/7/365 to help you.</p>
                </div>
              </div>

              {/* AI Promo Section */}
              <div className="bg-[#EEF2FF] p-6 rounded-2xl border border-blue-100">
                <span className="inline-block bg-[#D8CCFF] text-[10px] font-bold text-gray-700 px-3 py-1 rounded-md mb-4 uppercase">
                  PLUS
                </span>
                <h2 className="text-base font-bold text-gray-900 mb-2">
                  Get the power of AI with your domain.
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  GoDaddy Airo™ generates a Coming Soon website, logo, and more in a flash — no tech skills needed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mainsection;