import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingCards = () => {
  const plans = [
    {
      name: "Basic Website",
      priceUSD: "18 - 36",
      pricePKR: "5k - 10k",
      desc: "Perfect for personal blogs or small portfolios.",
      features: ["Single Page Design", "Responsive Layout", "Contact Form", "Social Icons", "Basic SEO", "1 Month Support"],
      isFeatured: false,
    },
    {
      name: "Standard Web",
      priceUSD: "72 - 180",
      pricePKR: "20k - 50k",
      desc: "Ideal for growing businesses and startups.",
      features: ["Up to 5 Pages", "Custom UI/UX", "Dynamic Components", "Speed Optimization", "Animations", "3 Months Support"],
      isFeatured: true, 
    },
    {
      name: "Premium Web",
      priceUSD: "180+",
      pricePKR: "50k+",
      desc: "Full-scale enterprise & e-commerce solutions.",
      features: ["Unlimited Pages", "E-commerce", "Admin Dashboard", "Custom API", "Premium Security", "Lifetime Support"],
      isFeatured: false,
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`flex flex-col p-6 md:p-8 rounded-[2rem] transition-all duration-300 shadow-lg border w-full
                ${plan.isFeatured 
                  ? "bg-gray-900 border-blue-600 lg:scale-105 z-10 relative" 
                  : "bg-white border-gray-100 hover:border-blue-400"
                } 
                ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""} 
              `}
            >
              {plan.isFeatured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </span>
              )}

              <div className="flex-grow">
                {/* Font size reduced to match your other cards */}
                <h3 className={`font-bold text-xl md:text-2xl ${plan.isFeatured ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                
                <p className={`text-xs md:text-sm mt-2 leading-relaxed ${plan.isFeatured ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
                
                <div className="mt-6 flex items-baseline gap-2">
                  <h2 className={`text-3xl md:text-4xl font-bold ${plan.isFeatured ? "text-white" : "text-gray-900"}`}>
                    ${plan.priceUSD}
                  </h2>
                  <span className={`text-[10px] md:text-xs font-bold uppercase px-1.5 py-0.5 rounded bg-opacity-10 ${
                    plan.isFeatured ? "text-blue-400 bg-blue-400" : "text-blue-600 bg-blue-600"
                  }`}>
                    ({plan.pricePKR})
                  </span>
                </div>

                <hr className={`my-6 ${plan.isFeatured ? "border-gray-800" : "border-gray-100"}`} />

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheck className={`w-3 h-3 shrink-0 ${plan.isFeatured ? "text-blue-500" : "text-green-500"}`} />
                      <p className={`text-xs md:text-sm font-medium ${plan.isFeatured ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full mt-8 py-3.5 rounded-xl font-bold text-base transition-all active:scale-95 ${
                plan.isFeatured 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100"
              }`}>
                Select {plan.name.split(" ")[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;