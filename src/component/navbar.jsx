import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const servicesDropdown = [
    { title: "Custom Software Development", icon: "</>", path: "/services/custom" },
    { title: "E-Commerce", icon: "</>", path: "/services/ecommerce" },
    { title: "Web Development", icon: "</>", path: "/services/web-developer" },
    { title: "UI/UX Design", icon: "</>", path: "/services/Ux-design" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 flex gap-3">
            <img src="/logo.jpg" alt="Logo" className="rounded-full h-16 w-16" />
            <p className="text-2xl font-bold py-4">Axoraweb Solutions</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
            <li className="hover:text-blue-500 text-sm">
              <Link to="/">Home</Link>
            </li>

            {/* Services dropdown */}
            <li className="relative group hover:text-blue-500 text-sm">
              <span>Services</span>
              <div className="absolute  top-[40px] mt-3 w-[800px] bg-white shadow-2xl rounded-2xl opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                <div className="p-8 grid grid-cols-2 gap-6">
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-slate-800">{service.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">Comprehensive solutions for your business.</p>
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

          {/* Get Quote button */}
          <Link to="/contact"><button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600">Get Free Quote</button></Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl font-bold"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            <ul className="flex flex-col gap-3 p-5 text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
              <li>Pricing & Investment Calculations</li>
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
