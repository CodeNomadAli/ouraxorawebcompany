import React, { useState } from "react";
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
      imageSrc: "/card5.jpg",
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

  return (
    <section className="w-full bg-gray-50">
      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 py-4 px-4 md:px-28">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-black rounded-2xl text-sm px-3 sm:px-4 py-2 border-2 font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full sm:w-80 px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder-gray-500"
        />
      </div>

      {/* Hero */}
      <div className="py-4 px-4 md:px-[100px]">
        <div className="relative w-full h-64 sm:h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: 'url(/bg.jpg)', filter: 'brightness(0.4)' }}
          />
          <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-10 pb-8 sm:pb-16">
            <button className="text-white bg-blue-600 text-sm px-4 sm:px-5 py-1 sm:py-2 rounded-full mb-2 sm:mb-4 w-fit">
              Software Solutions
            </button>
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight group-hover:underline group-hover:decoration-blue-400 transition-colors">
              What Is Customer Database <br /> Software?
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg mt-2 sm:mt-4 max-w-full sm:max-w-3xl">
              Discover everything you need to know about customer database software – from free tools to custom solutions. Learn how to organize customer data and streamline workflows.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4">{articles[0].date}</p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="w-full px-4 md:px-[100px] py-10">
        {filteredArticles.length === 0 ? (
          <div className="col-span-3 text-center py-20">
            <p className="text-xl text-gray-500">
              No articles found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => openModal(article)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.imageSrc}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:underline group-hover:decoration-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-3">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subscription */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-12 sm:py-16 text-center px-4 sm:px-6 md:px-6 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Get Engineering Insights Weekly
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10">
            Join 5,000+ developers receiving our weekly tech deep dives.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your work email..."
              required
              className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-gray-900 rounded-full text-base focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg placeholder-gray-500 transition-all"
            />
            <button
              type="submit"
              className="px-8 sm:px-10 py-2 sm:py-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm sm:text-base text-blue-200 mt-6">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

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
