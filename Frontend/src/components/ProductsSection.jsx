import { useEffect, useState, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Leela Starter",
    tagline: "Powering ideas, one project at a time",
    description:
      "Perfect for beginners and hobbyists. Everything you need to start your robotics journey with Leela.",
    buttonText: "BUY NOW",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200",
    image: "https://images.pexels.com/photos/6755146/pexels-photo-6755146.jpeg",
    price: "€24,90",
    rating: 4,
    slug: "leela-starter",
    features: [
      "Beginner-friendly",
      "Comprehensive docs",
      "Active community",
      "Arduino compatible",
    ],
  },
  {
    id: 2,
    name: "Leela Pro",
    tagline: "Small in size, big on possibilities",
    description:
      "Advanced features for makers and educators. Enhanced sensors and expanded capabilities for complex projects.",
    buttonText: "BUY NOW",
    bgColor: "bg-gradient-to-br from-[#0F2348] to-[#1a3f5a] text-white",
    image: "https://images.pexels.com/photos/4705623/pexels-photo-4705623.jpeg",
    price: "€39,90",
    rating: 5,
    slug: "leela-pro",
    features: [
      "Wireless connectivity",
      "Enhanced processing",
      "Industrial grade",
      "Advanced sensors",
    ],
  },
  {
    id: 3,
    name: "Leela Cloud",
    tagline: "Bring your IoT projects to life quickly",
    description:
      "Enterprise-grade solution with cloud integration. Perfect for schools, research institutions, and advanced development.",
    buttonText: "BUY NOW",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    image: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg",
    price: "€59,90",
    rating: 4,
    slug: "leela-cloud",
    features: [
      "Cloud integration",
      "Enterprise security",
      "Cellular options",
      "Remote management",
    ],
  },
];

export default function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleProductClick = (slug) => {
    window.location.href = `/products/${slug}`;
  };

  const handleBuyNow = (product, event) => {
    event.stopPropagation();
    console.log(`Buy now: ${product.name}`);
    handleProductClick(product.slug);
  };

  const handleCompareClick = () => {
    window.location.href = "/compare";
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
      </div>
    );
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2348] mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#0F2348]/70 max-w-2xl mx-auto">
            Choose the perfect Leela board for your robotics journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-105 cursor-pointer ${
                product.bgColor
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              onClick={() => handleProductClick(product.slug)}
            >
              {/* Product Image Section */}
              <div
                className={`h-48 sm:h-56 flex items-center justify-center p-6 sm:p-8 overflow-hidden relative ${
                  product.id === 2
                    ? "bg-gradient-to-b from-[#0F2348] to-[#1a3f5a]"
                    : "bg-gradient-to-br from-transparent to-[#0F2348]/10"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Price Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    product.id === 2
                      ? "bg-white text-[#0F2348]"
                      : "bg-[#0F2348] text-white"
                  }`}
                >
                  {product.price}
                </div>
              </div>

              {/* Product Info Section */}
              <div
                className={`p-6 sm:p-8 ${
                  product.id === 2 ? "text-white" : "text-[#0F2348]"
                }`}
              >
                {/* Rating */}
                {renderStars(product.rating)}

                {/* Product Name */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 hover:text-[#E98F0B] transition-colors">
                  {product.name}
                </h3>

                {/* Tagline */}
                <p
                  className={`text-sm sm:text-base mb-3 ${
                    product.id === 2 ? "text-white/70" : "text-[#0F2348]/70"
                  }`}
                >
                  {product.tagline}
                </p>

                {/* Description */}
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    product.id === 2 ? "text-white/80" : "text-[#0F2348]/75"
                  }`}
                >
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="text-xs space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-2 ${
                            product.id === 2 ? "bg-white" : "bg-[#0F2348]"
                          }`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={(e) => handleBuyNow(product, e)}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border-2 ${
                    product.id === 2
                      ? "border-white text-white hover:bg-white hover:text-[#0F2348]"
                      : "border-[#0F2348] text-[#0F2348] hover:bg-[#0F2348] hover:text-white"
                  }`}
                >
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#0F2348]/5 to-[#E98F0B]/5 rounded-xl p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F2348] mb-8 text-center">
            Compare Features
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b-2 border-[#0F2348]/20">
                  <th className="text-left py-4 px-4 font-semibold text-[#0F2348]">
                    Features
                  </th>
                  {products.map((product) => (
                    <th
                      key={product.id}
                      className="text-center py-4 px-4 font-semibold text-[#0F2348]"
                    >
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#0F2348]/10">
                  <td className="py-3 px-4 font-medium text-[#0F2348]">
                    Price
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="text-center py-3 px-4 font-semibold text-[#0F2348]"
                    >
                      {product.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#0F2348]/10">
                  <td className="py-3 px-4 font-medium text-[#0F2348]">
                    Rating
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="text-center py-3 px-4">
                      {renderStars(product.rating)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#0F2348]/10">
                  <td className="py-3 px-4 font-medium text-[#0F2348]">
                    Best For
                  </td>
                  <td className="text-center py-3 px-4 text-[#0F2348]">
                    Beginners
                  </td>
                  <td className="text-center py-3 px-4 text-[#0F2348]">
                    Makers & Educators
                  </td>
                  <td className="text-center py-3 px-4 text-[#0F2348]">
                    Enterprise
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F2348] mb-4">
            Not sure which board to choose?
          </h3>
          <p className="text-[#0F2348]/70 max-w-2xl mx-auto mb-6">
            Our product comparison guide helps you find the perfect Leela board
            for your needs.
          </p>
          <button
            onClick={handleCompareClick}
            className="px-8 py-3 sm:px-10 sm:py-4 bg-[#E98F0B] text-[#0F2348] font-semibold rounded-lg hover:bg-[#E22213] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            COMPARE PRODUCTS
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#0F2348]">10K+</div>
            <div className="text-sm text-[#0F2348]/70">Developers</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#0F2348]">500+</div>
            <div className="text-sm text-[#0F2348]/70">Projects</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#0F2348]">24/7</div>
            <div className="text-sm text-[#0F2348]/70">Support</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-[#0F2348]">99%</div>
            <div className="text-sm text-[#0F2348]/70">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
