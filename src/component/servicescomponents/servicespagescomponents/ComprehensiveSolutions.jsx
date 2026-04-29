"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Layout, Database, Smartphone, Globe, Cloud, 
  Cpu, PenTool, BarChart3, ShieldCheck, ShoppingCart, 
  Megaphone, Briefcase, Users, FileText, Settings, 
  Search, Terminal 
} from "lucide-react";

const ComprehensiveSolutions = () => {
  const solutions = [
    { title: "Custom Software Development", desc: "Tailored software solutions built from scratch to address your specific business challenges.", icon: <Code2 /> },
    { title: "Content Management System", desc: "Robust CMS solutions allowing you to manage, create, and modify digital content easily.", icon: <Settings /> },
    { title: "Client Relation Mgmt (CRM)", desc: "Systems to manage interactions with current and potential customers effectively.", icon: <Users /> },
    { title: "Web Development", desc: "High-performance, responsive websites and web applications using modern frameworks.", icon: <Globe /> },
    { title: "Wordpress & Shopify", desc: "Custom themes and plugin development for the world's leading e-commerce platforms.", icon: <Layout /> },
    { title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS/Android that offer seamless experiences.", icon: <Smartphone /> },
    { title: "Cloud Services", desc: "Scalable cloud architecture, migration, and management on AWS, Azure, or Google Cloud.", icon: <Cloud /> },
    { title: "AI & Machine Learning", desc: "Intelligent algorithms, predictive analytics, and LLM integrations to automate decisions.", icon: <Cpu /> },
    { title: "UI/UX Design", desc: "User-centric design that combines aesthetics with functionality to drive engagement.", icon: <PenTool /> },
    { title: "IT Consulting", desc: "Strategic technology advice to help you digitize operations and optimize infrastructure.", icon: <Terminal /> },
    { title: "Data Analytics", desc: "Transforming raw data into actionable insights through visualization and processing.", icon: <BarChart3 /> },
    { title: "DevOps & Automation", desc: "Streamlining development pipelines (CI/CD) and automating server management.", icon: <Search /> },
    { title: "Cybersecurity", desc: "Comprehensive security audits, penetration testing, and protection protocols.", icon: <ShieldCheck /> },
    { title: "E-commerce Solutions", desc: "Full-featured online store setup, payment gateway integration, and inventory systems.", icon: <ShoppingCart /> },
    { title: "Digital Marketing", desc: "SEO, SEM, and social media strategies to increase brand visibility and traffic.", icon: <Megaphone /> },
    { title: "Business Mgmt System", desc: "Integrated tools to manage business processes, finances, and operations.", icon: <Briefcase /> },
    { title: "HR Management System", desc: "Automated payroll, attendance tracking, and employee portal solutions.", icon: <Users /> },
    { title: "File Management System", desc: "Secure cloud storage and document organization with rule-based access.", icon: <FileText /> },
  ];

  // --- Animation Settings ---
  const premiumTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: premiumTransition },
  };

  return (
    <section className="w-full py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-10 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Comprehensive Solutions
          </motion.h2>
        </div>

        {/* Solutions Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
              className="group p-8 rounded-[1.5rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col items-start gap-4"
            >
              {/* Icon with Blue background instead of Red */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(item.icon, { size: 24, strokeWidth: 2 })}
              </div>

              <div className="mt-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;