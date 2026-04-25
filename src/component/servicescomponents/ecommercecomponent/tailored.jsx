import React from "react";

const Tailored = () => {
  return (
    <section className="w-full py-16 overflow-hidden">
      {/* Master Width Container - Alignment with other sections */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Original Font Sizes */}
        <div className="w-full py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold py-2">Tailored for your model</h1>
            <p className="text-gray-500 font-medium py-2 text-sm">
              One size does not fit all. We architect solutions based on your specific business <br className="hidden md:block" />
              requirements.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a href="/" className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </a>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Cards - Responsive Grid */}
        <div className="w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="w-full group bg-white shadow hover:shadow-xl p-8 border border-gray-100 rounded-xl transition-all">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Direct to Consumer</h3>
              <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600 transition-colors">D2C Brand Stores</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Immersive storytelling meets hard-hitting conversion tactics. Perfect for lifestyle brands scaling on Shopify Plus or WooCommerce.
              </p>

              <div className="flex flex-col gap-2 mt-8">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Subscription Modeling</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Bundle Builders</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full group bg-white shadow hover:shadow-xl p-8 border border-gray-100 rounded-xl transition-all">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Business to Business</h3>
              <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600 transition-colors">B2B Portals</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Complex bulk ordering made simple. Wholesale pricing, net-payment terms, and customer-specific catalogs.
              </p>

              <div className="flex flex-col gap-2 mt-8">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Tiered Pricing</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Quick Order Forms</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full group bg-white shadow hover:shadow-xl p-8 border border-gray-100 rounded-xl transition-all">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Multi-Vendor</h3>
              <h1 className="text-2xl font-bold py-3 group-hover:text-blue-600 transition-colors">Marketplaces</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Build the next Amazon or Etsy. Scalable architecture that allows multiple vendors to list products while you control the commission.
              </p>

              <div className="flex flex-col gap-2 mt-8">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Vendor Dashboards</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Commission Splitting</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Partners - Full Width Background Section */}
      <div className="bg-gray-50 text-center py-14 mt-7 w-full border-t border-gray-100">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">We are certified partners with</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400 font-bold text-2xl">
            <h4 className="hover:text-blue-600 cursor-default transition-colors">Shopify</h4>
            <h4 className="hover:text-blue-600 cursor-default transition-colors">Magento</h4>
            <h4 className="hover:text-blue-600 cursor-default transition-colors">BigCommerce</h4>
            <h4 className="hover:text-blue-600 cursor-default transition-colors">WooCommerce</h4>
            <h4 className="hover:text-blue-600 cursor-default transition-colors">Salesforce</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tailored;