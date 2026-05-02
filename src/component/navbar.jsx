import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaShoppingCart, FaGlobe, FaPenFancy, FaServer ,FaPhoneAlt} from "react-icons/fa";

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 lg:px-8"> 
        <div className="flex items-center justify-between h-20 relative">

          {/* LOGO - Left aligned */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/axoralogo.png" alt="Logo" className="rounded-full h-12 w-12 md:h-20 md:w-20" />
          </Link>

          {/* DESKTOP MENU - Perfectly Centered */}
          <ul className="hidden lg:flex absolute left-[45%] -translate-x-1/2 items-center gap-6 xl:gap-10 text-gray-600 font-medium">
            <li className="hover:text-blue-500 text-sm whitespace-nowrap transition-colors"><Link to="/">Home</Link></li>
            
            <li className="relative group text-sm hover:text-blue-500 py-7 transition-colors">
              <span className="cursor-pointer">Services</span>
              <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {servicesDropdown.map((service, index) => (
                    <Link key={index} to={service.path} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-600 font-bold">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">{service.title}</h4>
                        <p className="text-[10px] md:text-xs text-gray-400 mt-1">Comprehensive solutions for your business.</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="hover:text-blue-500 text-sm whitespace-nowrap transition-colors">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap transition-colors"><Link to="/portfolio">Portfolio</Link></li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap transition-colors"><Link to="/article">Articles</Link></li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap transition-colors"><Link to="/about">About Us</Link></li>
            <li className="hover:text-blue-500 text-sm whitespace-nowrap transition-colors"><Link to="/contact">Contact</Link></li>
          </ul>

          {/* RIGHT SIDE BUTTON - Updated Height & Styling */}
          {/* RIGHT SIDE BUTTON - Updated */}
<div className="flex items-center gap-4">

  {/* Phone Number */}
  <a
  href="tel:+923242537429"
  className="hidden lg:flex items-center gap-2 text-sm font-semibold  hover:text-blue-600 transition"
>
  <FaPhoneAlt className="text-blue-600 text-xl" />
  +92 324 5237429
</a>
  <Link to="/contact" className="hidden lg:block">
    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl hover:bg-blue-700 hover:shadow-lg transition-all text-sm font-semibold tracking-wide h-11 flex items-center justify-center">
      Get Free Quote
    </button>
  </Link>

  <button
    className="lg:hidden text-3xl p-1 text-gray-700"
    onClick={() => setOpen(!open)}
  >
    {open ? "✖" : "☰"}
  </button>
</div>
        </div>

        {/* MOBILE & TABLET MENU */}
        {open && (
          <div className="lg:hidden absolute left-4 right-4 bg-white shadow-xl rounded-2xl p-5 border border-gray-100 top-20 z-50 animate-in fade-in zoom-in duration-200">
            <ul className="flex flex-col gap-3 text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setOpen(false)} className="block py-1">Home</Link></li>
              
              <li>
                <p className="font-bold text-blue-600">Services</p>
                <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                  {servicesDropdown.map((service, index) => (
                    <li key={index}><Link to={service.path} onClick={() => setOpen(false)} className="text-sm">{service.title}</Link></li>
                  ))}
                </ul>
              </li>

              <hr className="my-1 border-gray-100" />

              <li><Link to="/pricing" onClick={() => setOpen(false)} className="block py-1">Pricing</Link></li>
              <li><Link to="/portfolio" onClick={() => setOpen(false)} className="block py-1">Portfolio</Link></li>
              <li><Link to="/article" onClick={() => setOpen(false)} className="block py-1">Articles</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)} className="block py-1">Contact</Link></li>
              
              <li className="mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold shadow-md active:scale-95 transition-transform">
                    Get Free Quote
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;