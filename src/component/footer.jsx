import React from "react";
import { Link } from "react-router-dom";
import {FaFacebook, FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="w-full bg-gray-900 text-white pt-24 pb-5 font-sans">
      {/* Container - Balanced for 768px (md) and 1700px screens */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-6 md:px-12 lg:px-8">

        {/* Main Footer Content - Original Gap restored */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Part: Logo & Description */}
          <div className="lg:w-1/3">
            <div className="flex gap-3 items-center">
              <img src="/axoralogo.png" alt="Axoraweb Logo" className=" h-14 w-14 " />
            </div>
            {/* Original py-6 spacing restored for text gap */}
            <p className="text-sm text-gray-400 py-6 leading-relaxed">
              Building scalable digital solutions for forward-thinking companies. We turn complex problems into elegant code.
            </p>


            <div className="flex gap-5">
              {/* Facebook */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61558541441930"
                className="group"
              >
                <FaFacebook className="text-2xl text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/axorawebsolutionsdotcom/"
                className="group"
              >
                <FaLinkedin className="text-2xl text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* GitHub */}
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/your-username"
                className="group"
              >
                <FaGithub className="text-2xl text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a> */}

              {/* Email */}
              <a href="mailto:axoraweb@gmail.com" className="group">
                <FaEnvelope className="text-2xl text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Part: 4 Columns Grid - Optimized for 768px (md) */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Col 1: Solutions */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Solutions</h3>
              {/* Original py-1 spacing for link gap */}
              <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Web Development</p>
              <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Mobile Apps</p>
              <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">UI/UX Design</p>
              <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Cloud DevOps</p>
            </div>

            {/* Col 2: Contact */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact</h3>
              <Link to="/contact">
                <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Contact</p>
              </Link>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923245237429?text=Hello%20Axoraweb%20Solutions">
                <p className="text-gray-400 py-1 text-[13px] hover:text-blue-500 cursor-pointer transition">+92 324 5237429</p>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923245237429?text=Hello%20Axoraweb%20Solutions">
                <p className="text-gray-400 py-1 text-[13px] hover:text-blue-500 cursor-pointer transition">+92 3091419331</p>
              </a>
              <a href="mailto:axoraweb@gmail.com">
                <p className="text-gray-400 py-1 text-[13px] hover:text-blue-500 cursor-pointer transition">axoraweb@gmail.com</p>
              </a>
            </div>

            {/* Col 3: Company */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h3>
              <Link to="/about"><p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">About Us</p></Link>
              <Link to="/article"><p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Articles</p></Link>
              <Link to="/portfolio"><p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Portfolio</p></Link>
            </div>

            {/* Col 4: Legal */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Legal</h3>
              <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Privacy Policy</p>
              <p className="text-gray-400 py-1 text-sm hover:text-blue-500 cursor-pointer transition">Terms & Conditions</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <hr className="mt-16 border-gray-800" />
        <p className="text-sm text-gray-500 text-center py-8">
          © 2026 AxoraWeb Solutions. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;