"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArticleModal from "./ArticleModal";

const Customer = () => {
  const articles = [
    {
      id: 1,
      title: "What Is Customer Database Software?",
      date: "2025-12-26",
      description:
        "Discover everything you need to know about customer database software – from free tools to custom solutions. Learn how to organize customer...",
      imageSrc: "/card1.png",
      fullContent:
        "Full details: Customer database software is a tool that helps businesses store, manage, and analyze customer information efficiently. It includes features like data encryption, integration with CRM systems, automated workflows, and reporting. Free options like Google Sheets or open-source tools are available, but custom solutions offer scalability for enterprises. Benefits include improved customer service, targeted marketing, and compliance with data privacy laws like GDPR.",
      category: "Software Solutions",
    },
    {
      id: 2,
      title: "Custom Software – The Complete Guide for Your Business Success",
      date: "2025-12-24",
      description:
        "Discover the power of custom software for your business. From development steps to real-world examples, learn how tailored solutions drive growth...",
      imageSrc: "/card2.png",
      fullContent:
        "Full details: Custom software is built specifically for a business's unique needs, unlike off-the-shelf products. The development process includes requirement gathering, design, coding, testing, and deployment. Examples include custom ERP systems for manufacturing or e-commerce platforms. It drives success by enhancing efficiency, reducing costs long-term, and providing a competitive edge through innovation.",
      category: "Software Solutions",
    },
    {
      id: 3,
      title: "Smartphone Hacks You Probably Didn’t Know",
      date: "2025-12-26",
      description:
        "Unlock the full potential of your smartphone! Learn lesser-known tips, hidden features, and clever hacks that will save you time and enhance your mobile...",
      imageSrc: "/card3.png",
      fullContent:
        "Full details: Smartphone hacks include using airplane mode for faster charging, enabling developer options for advanced tweaks, or using apps like Tasker for automation. Hidden features might involve gesture controls, battery optimization tricks, or secret codes for diagnostics. These hacks can improve productivity, security, and user experience without needing additional hardware.",
      category: "Tech Tips",
    },
    {
      id: 4,
      title: "Top 5 AI Tools That Can Boost Your Productivity in 2026",
      date: "2025-12-26",
      description:
        "Discover the top 5 AI tools that can significantly boost your productivity in 2026. Learn how artificial intelligence can help you work smarter, save time, and automate everyday tasks...",
      imageSrc: "/card4.png",
      fullContent:
        "Full details: The top AI tools for 2026 include ChatGPT for content generation, Notion AI for organization, Grammarly for writing enhancement, Zapier for automation, and Midjourney for creative visuals. They boost productivity by automating repetitive tasks, providing insights through data analysis, and enabling faster decision-making in various professional fields.",
      category: "Artificial Intelligence",
    },
    {
      id: 5,
      title:
        "CMS Software Solutions: Powering Scalable, Secure & SEO-Driven Digital Experiences",
      date: "2025-12-26",
      description:
        "A powerful CMS software solution enables businesses to manage, scale, and optimize digital content effortlessly. Discover how modern content...",
      imageSrc: "/card5.png",
      fullContent:
        "Full details: CMS (Content Management System) solutions like WordPress, Drupal, or custom-built ones provide scalable platforms for websites. They ensure security through regular updates and plugins, SEO optimization via meta tags and sitemaps, and user-friendly interfaces for content creation. Ideal for e-commerce, blogs, and corporate sites, they drive digital experiences by supporting multimedia and integrations.",
      category: "Software Solutions",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", "Artificial Intelligence", "Software Solutions", "Tech Tips"];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  // --- Premium Animation Settings (Standard Across Your Project) ---
  const premiumTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: premiumTransition,
    },
  };

  return (
    <section className="w-full bg-gray-50 font-sans overflow-hidden">
      {/* Filter + Search */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={premiumTransition}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full text-xs sm:text-sm px-4 py-2 border transition-all duration-200 font-medium ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
          <div className="relative group">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full lg:w-80 px-6 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all shadow-sm"
            />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={premiumTransition}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 mb-12"
      >
        <div 
          onClick={() => openModal(articles[0])}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url(/bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md mb-4"
            >
              Featured Post
            </motion.span>
            <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl group-hover:underline decoration-blue-500 underline-offset-8 transition-all">
              {articles[0].title}
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-2xl line-clamp-2 md:line-clamp-none">
              {articles[0].description}
            </p>
            <p className="text-gray-400 text-xs mt-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gray-600"></span> {articles[0].date}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Articles Grid */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {filteredArticles.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300"
            >
              <p className="text-xl text-gray-400 font-medium">
                No articles found matching your criteria.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key={selectedCategory + searchQuery} // Unique key for filtering animation
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => openModal(article)}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative overflow-hidden h-52 sm:h-60">
                    <img
                      src={article.imageSrc}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 group-hover:underline decoration-blue-400 underline-offset-4 transition-all leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subscription Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={premiumTransition}
        className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-16"
      >
        <div className="w-full bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">
                  Stay Ahead of the <span className="text-blue-500">Tech Curve</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                  Join 5,000+ industry professionals getting our weekly deep dives into engineering and AI.
                </p>
                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="your@workemail.com"
                        required
                        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/20"
                    >
                        Subscribe
                    </motion.button>
                </form>
                <p className="text-xs text-gray-500 mt-6 italic">No spam. Only high-quality engineering insights.</p>
            </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedArticle && (
        <ArticleModal
          isOpen={isModalOpen}
          onClose={closeModal}
          article={selectedArticle}
        />
      )}
    </section>
  );
};

export default Customer;