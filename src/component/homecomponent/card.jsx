import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaCode,
  FaMobile,
  FaPencilRuler,
  FaCog,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-5 h-5 text-gray-700" />,
    title: "Custom Software",
    description:
      "Accelerate your pipeline with automated deployment, CI/CD, and scalable infrastructure.",
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring & Alerts"],
  },
  {
    icon: <FaPencilRuler className="w-5 h-5 text-gray-700" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging user interfaces that ensure seamless digital experiences.",
    features: [
      "Wireframes & Prototypes",
      "Design Systems",
      "Mobile-First Design",
    ],
  },
  {
    icon: <FaMobile className="w-5 h-5 text-gray-700" />,
    title: "Mobile App Dev",
    description:
      "Fast, responsive, and feature-rich mobile applications for iOS and Android.",
    features: ["iOS & Android Apps", "Flutter & React Native", "Offline Functionality"],
  },
  {
    icon: <FaCog className="w-5 h-5 text-gray-700" />,
    title: "DevOps & Automation",
    description:
      "Accelerate your pipeline with automated deployment, CI/CD, and scalable infrastructure.",
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring & Alerts"],
  },
  {
    icon: <FaRobot className="w-5 h-5 text-gray-700" />,
    title: "Artificial Intelligence",
    description:
      "Implement intelligent solutions like machine learning and computer vision to unlock insights.",
    features: ["ML Model Development", "AI-Powered Chatbots", "Predictive Analytics"],
  },
  {
    icon: <FaLaptopCode className="w-5 h-5 text-gray-700" />,
    title: "Website Development",
    description:
      "Fast, responsive, and scalable websites optimized for performance and SEO.",
    features: ["Responsive Web Design", "CMS Integration", "E-commerce Solutions"],
  },
];

const Card = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border px-5 py-6 rounded-3xl w-full max-w-[380px] group transform transition-transform duration-300 hover:-translate-y-3 hover:border-red-200 hover:bg-gray-50"
          >
            <div className="w-14 h-14 bg-slate-50 px-4 py-4 m-6 rounded-xl flex items-center justify-center group-hover:shadow-2xl group-hover:bg-blue-400 group-hover:text-white">
              {service.icon}
            </div>
            <div className="px-5">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-2 font-serif text-sm">{service.description}</p>
            </div>
            <hr className="border-t-2 border-dotted border-gray-200 mx-5 mt-7" />
            <div className="mt-7 space-y-2">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start px-5">
                  <FaCheck className="w-4 h-7 text-blue-600 mt-1" />
                  <p className="text-sm text-gray-400 px-5 mt-1 font-bold">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex mt-5 px-5 items-center">
              <button className="text-blue-500 font-bold">Learn more</button>
              <span className="text-blue-600 w-6 font-bold px-3">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Services Button */}
      <div className="w-full justify-center py-10">
        <Link to="/services/webdevelop">
          <button className="flex items-center mx-auto text-white bg-blue-600 rounded-xl text-xl px-6 py-3 hover:bg-blue-800 transition-colors duration-300">
            View All Services
            <span className="ml-3 font-bold">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Card;
