import React, { useState } from "react";
import { FaCheckCircle, FaMagento, FaMailBulk } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const Mainsection = () => {
  const [count, setCount] = useState(0);
  const [secondCard, setSecondCard] = useState(false);
  const changecard = () => {
    setSecondCard(true);
  };

  return (
    <section className="w-full mt-24">
      {/* Search Bar */}
      <div className="bg-gray-50 w-full flex flex-col md:flex-row px-4 md:px-[100px] py-5 gap-2">
        <input
          type="search"
          name="search"
          className="w-full py-3 border-gray-300 border-[1px] px-3 rounded-md"
          placeholder="Search for hosting and domain services..."
        />
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-3 rounded-md md:rounded-r-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Heading */}
      <div className="px-4 md:px-[100px] mt-7">
        <h1 className="text-xl md:text-3xl font-bold py-2">Your Cart</h1>
        <p className="text-sm md:text-base">
          GoDaddy is a trusted growth partner to millions of everyday entrepreneurs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-14 px-4 md:px-[100px] py-10">
        {/* col 1 */}
        <div className="md:col-span-7 w-full">
          <div className="w-full border border-gray-300 rounded">
            {/* Domain */}
            <div className="flex flex-col md:flex-row gap-5 p-4 border rounded-lg items-start">
              <div className="bg-blue-600 w-20 h-20 md:w-28 md:h-28 rounded text-center text-white py-5 md:py-8 font-bold text-2xl md:text-3xl flex items-center justify-center">
                www
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h1 className="text-lg md:text-xl font-bold py-1">axorawebsolutions.online</h1>
                  <p className="text-gray-700 text-[10px] md:text-[10px] font-bold bg-gray-100 w-full md:w-[410px] uppercase px-3">
                    The more domain names you own, the more protected your brand is
                  </p>
                  <p className="text-sm text-gray-400 py-1">.ONLINE Domain Registration</p>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 gap-2 md:gap-4">
                    <div>
                      <select
                        id="service"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 w-full md:w-auto"
                      >
                        <option value="">Select Years</option>
                        <option value="1-year">1 Year</option>
                        <option value="2-year">2 Years</option>
                        <option value="3-year">3 Years</option>
                        <option value="4-year">4 Years</option>
                        <option value="5-year">5 Years</option>
                        <option value="10-year">10 Years</option>
                      </select>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <h1 className="text-blue-600 font-bold text-lg">Rs278</h1>
                      <h2 className="line-through text-sm text-gray-500">₨15,447</h2>
                      <p className="text-blue-600 text-sm">98% off</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 py-2 mt-4">
                  <p className="text-sm">Renews January 2027 for ₨15,447</p>
                  <FaTrash className="text-xl cursor-pointer hover:text-blue-600 mt-2 md:mt-0"/>
                </div>
              </div>
            </div>

            <hr className="w-full border-gray-300 border-[1px]"/>
            <div className="bg-blue-50 px-4 py-1">Configure Your Domain</div>
            <hr className="w-full border-gray-300 border-[1px]"/>

            {/* Hosting */}
            <div className="max-w-full md:max-w-3xl p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-7 bg-blue-700 rounded-full flex items-center px-1">
                    <div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 flex-wrap">
                      <h2 className="text-lg md:text-xl font-bold tracking-tight">
                        Full Domain Protection at Rs167/mo
                      </h2>
                      <span className="bg-[#bcffff] text-[#007b7d] text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        Recommended
                      </span>
                    </div>

                    <div className="mt-1 bg-gray-100 text-gray-500 text-[10px] font-bold px-1.5 py-0.5 inline-block uppercase tracking-tight">
                      Chosen by over 225,000 customers each month
                    </div>

                    <ul className="mt-3 space-y-1 text-[14px] md:text-[15px] leading-snug">
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-lg leading-none">•</span>
                        <span className="text-sm">Prevents hackers from stealing your domain or making any other unauthorized changes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-lg leading-none">•</span>
                        <span className="text-sm">Requires your approval via 2-factor verification for vital changes like deleting or transferring a domain.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-right flex-shrink-0 ml-0 md:ml-4 mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-400">Rs1,999</div>
                  <div className="text-sm text-gray-400 line-through">Rs3,299</div>
                  <div className="text-sm font-bold text-blue-400">39% off</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-500 font-medium">
                Renews January 2027 for Rs3,299
              </div>
            </div>

            <hr className="w-full border-gray-300 border-[1px]"/>

            {/* First Card */}
            {!secondCard ? (
              <div className="max-w-full md:max-w-2xl p-4 md:p-8 bg-white border border-gray-100 rounded shadow font-sans mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex gap-4 items-start">
                    <FaMailBulk className="text-xl text-blue-400"/>
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                        Professional Email Pro Light
                      </h2>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-blue-400 font-bold text-lg md:text-xl">Rs219/mo</span>
                        <span className="text-gray-400 line-through text-sm">Rs349</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-gray-700 text-[14px] md:text-[15px]">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="font-bold">•</span>
                          10 GB per mailbox (approx. 50,000 emails)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="font-bold">•</span>
                          AI-features to supercharge your email experience
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="font-bold">•</span>
                          Includes Calendar, Contacts & mobile app
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 border-2 border-black text-black font-bold text-sm rounded hover:bg-black hover:text-white mt-4 md:mt-0"
                    onClick={changecard}
                  >
                    Get It
                  </button>
                </div>
              </div>
            ) : (
           <div className="p-4 rounded-lg mt-6 w-full">
  {/* Second Card */}
  <div className="flex flex-col md:flex-row gap-4 w-full">
    <div className="bg-gray-50 w-full md:w-24 h-20 px-3 rounded-lg flex items-center justify-center">
      <FaMailBulk className="text-4xl text-blue-700" />
    </div>

    <div className="flex-1 flex flex-col gap-3">
      <h1 className="text-lg md:text-xl font-medium">Professional Email Pro Light</h1>

      {/* Mailboxes */}
      <div className="py-3">
        <h3 className="text-lg md:text-xl font-medium mb-2">Mailboxes</h3>
        <div className="flex items-center justify-between md:justify-start gap-3 border-gray-300 border-2 w-full md:w-32 rounded-lg">
          <button
            className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            -
          </button>
          <div className="w-12 text-center text-lg font-medium">{count}</div>
          <button
            className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>

    {/* Price Section */}
    <div className="flex flex-col justify-center items-end md:ml-4 mt-4 md:mt-0">
      <div className="text-2xl font-bold text-blue-400">₨15,768</div>
      <div className="text-sm text-gray-400 line-through">₨25,128</div>
      <div className="text-sm font-bold text-blue-400">37% off</div>
    </div>
  </div>

  {/* Bottom Text + Trash Icon */}
  <div className="flex justify-between items-center text-gray-500 py-1 mt-4">
    <p className="text-sm md:text-base">Renews January 2027 for ₨29,316</p>
    <FaTrash className="text-xl cursor-pointer hover:text-blue-600" />
  </div>
</div>

            )}
          </div>
        </div>

        {/* col 2 */}
        <div className="md:col-span-5 w-full flex flex-col items-center gap-6">
          <div className="bg-gray-50 w-full md:w-[400px] p-5 rounded-lg">
            <h1 className="text-xl md:text-2xl font-bold">Order Summary</h1>
            <h3 className="py-4 mt-2 text-sm md:text-base">0 items</h3>
            <hr className="w-full border-gray-200 border-[1px]" />
            <div className="flex justify-between py-2">
              <h1 className="text-lg md:text-xl font-bold">
                Subtotal <span className="text-xs">(PKR)</span>
              </h1>
              <h3 className="text-lg md:text-xl font-bold text-blue-500">₨4,905</h3>
            </div>
            <p className="text-xs md:text-sm text-center py-2">Subtotal does not include applicable taxes</p>
            <p className="text-sm md:text-base text-center font-semibold underline">Have a promo code?</p>
            <h2 className="font-medium text-center py-3 mt-2 text-sm md:text-base">
              Nice! You saved ₨24,149 on your order.
            </h2>
            <button
              type="submit"
              className="w-full bg-blue-500 mb-5 mt-2 text-white font-bold py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Ready for Checkout
            </button>
          </div>

          <div className="flex flex-col items-center text-center text-sm md:text-base w-full md:w-[400px] py-6">
            <div className="flex items-center gap-2 justify-center">
              <FaCheckCircle className="text-xl text-blue-400" />
              <h1 className="font-medium">Quality You Can Trust</h1>
            </div>
            <p className="mt-1">
              Your GoDaddy Guides are available 24/7/365 to answer your questions and help you better understand your purchase.
            </p>
          </div>

          <div className="bg-[#EEF2FF] p-6 rounded-xl w-full md:w-[400px] text-center">
            <span className="inline-block bg-[#D8CCFF] text-xs md:text-sm font-semibold text-gray-700 px-3 py-1 rounded-md mb-4">
              PLUS
            </span>
            <h2 className="text-sm md:text-lg font-semibold text-gray-900 mb-3">
              Get the power of AI with your domain.
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Included with every domain, GoDaddy Airo™ is our AI-fueled, customizable experience.
              In a flash, it generates a Coming Soon website, logo, and more* — no tech skills needed.
              <span className="inline-block align-middle ml-1 cursor-pointer">ⓘ</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainsection;
