import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaShoppingCart, FaGlobe, FaPenFancy } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const servicesDropdown = [
    { title: "Custom Software Development", icon: <FaLaptopCode />, path: "/services/custom" },
    { title: "E-Commerce", icon: <FaShoppingCart />, path: "/services/ecommerce" },
    { title: "Web Development", icon: <FaGlobe />, path: "/services/web-developer" },
    { title: "UI/UX Design", icon: <FaPenFancy />, path: "/services/Ux-design" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="rounded-full h-14 w-14" />
            <p className="text-xl font-bold">Axoraweb Solutions</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
            <li className="hover:text-blue-500 text-sm">
              <Link to="/">Home</Link>
            </li>

            {/* Services Mega Menu */}
            <li className="relative group text-sm hover:text-blue-500">
              <span className="cursor-pointer">Services</span>

              {/* DROPDOWN */}
              <div
                className="
                  absolute top-[40px] left-1/2
                  -translate-x-1/2
                  w-[800px]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  border border-gray-100
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300
                  z-50
                "
              >
                <div className="p-8 grid grid-cols-2 gap-6">
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-blue-600">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">
                          {service.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          Comprehensive solutions for your business.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="hover:text-blue-500 text-sm">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-blue-500 text-sm">
              <Link to="/article">Articles</Link>
            </li>
            <li className="hover:text-blue-500 text-sm">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-500 text-sm">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* CTA */}
          <Link to="/contact">
            <button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600">
              Get Free Quote
            </button>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu (UNCHANGED) */}
        {open && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-5">
            <ul className="flex flex-col gap-3 text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>

              <li>
                <p className="font-bold">Services</p>
                <ul className="ml-4 mt-2 space-y-2">
                  {servicesDropdown.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.path}
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-500"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
              <li><Link to="/article" onClick={() => setOpen(false)}>Articles</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
