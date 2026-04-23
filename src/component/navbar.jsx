import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaShoppingCart, FaGlobe, FaPenFancy, FaServer } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const servicesDropdown = [
    { title: "Custom Software Development", icon: <FaLaptopCode />, path: "/services/custom" },
    { title: "E-Commerce", icon: <FaShoppingCart />, path: "/services/ecommerce" },
    { title: "Web Development", icon: <FaGlobe />, path: "/services/web-developer" },
    { title: "UI/UX Design", icon: <FaPenFancy />, path: "/services/Ux-design" },
    { title: "Hosting & Domain", icon: <FaServer />, path: "/services/hosting" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8"> 
        <div className="flex items-center justify-between h-20">

          {/* LOGO - Scaled for better fit on all screens */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src="/logo.jpg" alt="Logo" className="rounded-full h-12 w-12 md:h-14 md:w-14" />
            <p className="text-lg md:text-xl font-bold">Axoraweb Solutions</p>
          </div>

          {/* DESKTOP MENU - Visible on Laptop & PC (xl screens) */}
          {/* gap-4 for small laptops, gap-8 for large PC screens */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-gray-600 font-medium">
            <li className="hover:text-blue-500 text-sm whitespace-nowrap">
              <Link to="/">Home</Link>
            </li>

            {/* Services Mega Menu */}
            <li className="relative group text-sm hover:text-blue-500 py-7">
              <span className="cursor-pointer">Services</span>

              {/* DROPDOWN - Responsive width logic for PC vs Laptop */}
              <div
                className="
                  absolute top-[70px] left-1/2 -translate-x-1/2
                  w-[90vw] max-w-[800px]
                  bg-white rounded-2xl shadow-2xl border border-gray-100
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 z-50
                "
              >
                {/* 1 column on tablet, 2 on laptop/PC */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-600">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">{service.title}</h4>
                        <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                          Comprehensive solutions for your business.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="hover:text-blue-500 text-sm whitespace-nowrap"><Link to="/portfolio">Portfolio</Link></li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap"><Link to="/article">Articles</Link></li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap"><Link to="/about">About Us</Link></li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap"><Link to="/contact">Contact</Link></li>
          </ul>

          {/* CTA BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:block">
              <button className="bg-blue-500 text-white px-4 xl:px-6 py-2 rounded-2xl hover:bg-blue-600 transition text-sm font-medium">
                Get Free Quote
              </button>
            </Link>

            <button
              className="lg:hidden text-3xl p-1"
              onClick={() => setOpen(!open)}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET MENU */}
        {open && (
          <div className="lg:hidden absolute left-4 right-4 bg-white shadow-xl rounded-2xl p-5 border border-gray-100 top-20">
            <ul className="flex flex-col gap-3 text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setOpen(false)} className="block py-1">Home</Link></li>
              <li>
                <p className="font-bold text-blue-600">Services</p>
                <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                  {servicesDropdown.map((service, index) => (
                    <li key={index}>
                      <Link to={service.path} onClick={() => setOpen(false)} className="text-sm hover:text-blue-500">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <hr className="my-1 border-gray-50" />
              <li><Link to="/portfolio" onClick={() => setOpen(false)} className="block py-1">Portfolio</Link></li>
              <li><Link to="/article" onClick={() => setOpen(false)} className="block py-1">Articles</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)} className="block py-1">About Us</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)} className="block py-1">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;