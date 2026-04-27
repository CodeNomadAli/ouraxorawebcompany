import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion"; // Added motion

const PricingCards = () => {
  const plans = [
    {
      name: "Basic ",
      priceUSD: "18 - 36",
      pricePKR: "5k - 10k",
      desc: "Perfect for personal blogs or small portfolios.",
      features: ["Single Page Design", "Responsive Layout", "Contact Form", "Social Icons", "Basic SEO", "1 Month Support"],
      isFeatured: false,
    },
    {
      name: "Standard ",
      priceUSD: "72 - 180",
      pricePKR: "20k - 50k",
      desc: "Ideal for growing businesses and startups.",
      features: ["Up to 5 Pages", "Custom UI/UX", "Dynamic Components", "Speed Optimization", "Animations", "3 Months Support"],
      isFeatured: true,
    },
    {
      name: "Premium ",
      priceUSD: "180+",
      pricePKR: "50k+",
      desc: "Full-scale enterprise & e-commerce solutions.",
      features: ["Unlimited Pages", "E-commerce", "Admin Dashboard", "Custom API", "Premium Security", "Lifetime Support"],
      isFeatured: false,
    }
  ];

  // --- Premium Transition Settings ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: premiumTransition 
    },
  };

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={premiumTransition}
          className="text-3xl md:text-4xl font-bold py-10"
        >
          Choose Your Plan
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Subtle hover lift
              className={`flex flex-col p-6 md:p-8 rounded-[2rem] transition-all duration-300 shadow-lg border w-full
                ${plan.isFeatured
                  ? "bg-gray-900 border-blue-600 lg:scale-105 z-10 relative"
                  : "bg-white border-gray-100 hover:border-blue-400"
                } 
                ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""} 
              `}
            >
              {plan.isFeatured && (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-md"
                >
                  Most Popular
                </motion.span>
              )}

              <div className="flex-grow">
                <h3 className={`font-bold text-xl md:text-2xl text-center w-full ${plan.isFeatured ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>

                <p className={`text-xs md:text-sm mt-2 leading-relaxed ${plan.isFeatured ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <h2 className={`text-3xl md:text-4xl font-bold ${plan.isFeatured ? "text-white" : "text-gray-900"}`}>
                    ${plan.priceUSD}
                  </h2>
                  <span className={`text-[10px] md:text-xs font-bold uppercase px-1.5 py-0.5 rounded bg-opacity-10 ${plan.isFeatured ? "text-blue-400 bg-blue-400" : "text-blue-600 bg-blue-600"
                    }`}>
                    ({plan.pricePKR})
                  </span>
                </div>

                <hr className={`my-6 ${plan.isFeatured ? "border-gray-800" : "border-gray-100"}`} />

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <FaCheck className={`w-3 h-3 shrink-0 ${plan.isFeatured ? "text-blue-500" : "text-green-500"}`} />
                      <p className={`text-xs md:text-sm font-medium ${plan.isFeatured ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-8 py-3.5 rounded-xl font-bold text-base transition-all ${plan.isFeatured
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100"
                }`}>
                Select {plan.name.split(" ")[0]}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;