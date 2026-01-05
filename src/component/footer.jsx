import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin,FaEnvelope   } from "react-icons/fa";

const Footer = () => {
  return (
<section className="w-full bg-gray-900 px-[100px] pt-24 pb-5">
  <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
    {/*col 1 */}
  <div className="sm:col-span-2 lg:col-span-1">
    <div className="flex gap-3">
    <div className="flex items-center justify-center">
    <img src="/logo.jpg" alt="" className="rounded-full h-12 w-12"/>
  </div>
  <div className="py-3 ">
    <p className="text-2xl font-bold text-white">Axoraweb</p>
  </div>
</div>
  <p className="text-sm text-gray-400 py-5">Building scalable digital solutions for forward-thinking  companies. We turn complex problems into elegant code.</p>
  <div className="flex gap-5">
    <a target="_blank" href="https://www.facebook.com/profile.php?id=61558541441930">
      <FaFacebook className="text-2xl text-blue-400 hover:text-gray-200" />
    </a>
    <a href="mailto:axoraweb@gmail.com">
      <FaEnvelope  className="text-2xl text-blue-400 hover:text-gray-200" />
    </a>
  </div>
  </div>

  {/*col 2 */}
  <div className="py-4 px-5">
    <h1 className="text-2sm font-bold text-white">Solutions</h1>
     <h1 className="text-gray-400 py-3 text-sm hover:text-blue-400">Web Development</h1>
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">Mobile Apps</h1>
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">UI/UX Design</h1>
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">Cloud DevOps</h1>
  </div>
    {/*col 3 */}
   <div className="py-4">
    <h1 className="text-2sm font-bold text-white">Contact</h1>
    <a href="/contact">
     <h1 className="text-gray-400 py-3 text-sm hover:text-blue-400">Contact</h1>
    </a>
    <a target="_blank" href="https://wa.me/923245237429?text=Hello%20Axoraweb%20Solutions">
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">phone : +92 324 5237429</h1>
    </a>
    <a target="_blank" href="https://wa.me/923091419331?text=Hello%20Axoraweb%20Solutions">
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">phone : +92 3091419331</h1>
      </a>
      <a href="mailto:axoraweb@gmail.com">
        <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">Email: axoraweb@gmail.com</h1>
      </a>
  </div>

    {/*col 4 */}
  <div className="py-4">
    <h1 className="text-2sm font-bold text-white">Company</h1>
    <a href="/about">
     <h1 className="text-gray-400 py-3 text-sm hover:text-blue-400">About</h1>
    </a>
    <a href="/article">
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">Articles</h1>
    </a>
     <a href="/portfolio">
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">Portfolio</h1>
    </a>
  </div>

    {/*col 5 */}
  <div className="py-4">
    <h1 className="text-2sm font-bold text-white">Legal</h1>
     <h1 className="text-gray-400 py-3 text-sm hover:text-blue-400">Privacy Policy</h1>
     <h1 className="text-gray-400 py-2 text-sm hover:text-blue-400">Terms & Condition</h1>
  </div>
  </div>
<hr className="mt-32 border-gray-500" />
 <p className="text-sm text-gray-400 text-center py-5">© 2026 AxoraWeb Solutions. All rights reserved.</p>
</section>

  )}

  export default Footer;