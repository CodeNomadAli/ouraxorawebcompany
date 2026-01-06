import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full bg-gray-900 px-4 sm:px-10 lg:px-24 pt-24 pb-5 text-white">
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* Col 1: Logo & About */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex gap-3 items-center">
            <img src="/logo.jpg" alt="Axoraweb Logo" className="rounded-full h-12 w-12" />
            <p className="text-2xl font-bold">Axoraweb</p>
          </div>
          <p className="text-sm text-gray-400 py-5">
            Building scalable digital solutions for forward-thinking companies. We turn complex problems into elegant code.
          </p>
          <div className="flex gap-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=61558541441930"
            >
              <FaFacebook className="text-2xl text-blue-400 hover:text-gray-200" />
            </a>
            <a href="mailto:axoraweb@gmail.com">
              <FaEnvelope className="text-2xl text-blue-400 hover:text-gray-200" />
            </a>
          </div>
        </div>

        {/* Col 2: Solutions */}
        <div className="py-4 px-5">
          <h3 className="text-sm font-bold mb-3">Solutions</h3>
          <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Web Development</p>
          <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Mobile Apps</p>
          <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">UI/UX Design</p>
          <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Cloud DevOps</p>
        </div>

        {/* Col 3: Contact */}
        <div className="py-4">
          <h3 className="text-sm font-bold mb-3">Contact</h3>
          <Link to="/contact">
            <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Contact</p>
          </Link>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923245237429?text=Hello%20Axoraweb%20Solutions">
            <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Phone: +92 324 5237429</p>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923091419331?text=Hello%20Axoraweb%20Solutions">
            <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Phone: +92 3091419331</p>
          </a>
          <a href="mailto:axoraweb@gmail.com">
            <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Email: axoraweb@gmail.com</p>
          </a>
        </div>

        {/* Col 4: Company */}
        <div className="py-4">
          <h3 className="text-sm font-bold mb-3">Company</h3>
          <Link to="/about"><p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">About</p></Link>
          <Link to="/article"><p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Articles</p></Link>
          <Link to="/portfolio"><p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Portfolio</p></Link>
        </div>

        {/* Col 5: Legal */}
        <div className="py-4">
          <h3 className="text-sm font-bold mb-3">Legal</h3>
          <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Privacy Policy</p>
          <p className="text-gray-400 py-2 text-sm hover:text-blue-400 cursor-pointer">Terms & Conditions</p>
        </div>
      </div>

      <hr className="mt-12 border-gray-500" />
      <p className="text-sm text-gray-400 text-center py-5">
        © 2026 AxoraWeb Solutions. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
