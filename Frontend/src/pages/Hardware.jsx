import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hardware = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Hardware products data
  const hardwareProducts = [
    {
      id: 1,
      name: "Leela 500",
      description:
        "A fast, powerful computer built into a high-quality keyboard, for the ultimate compact PC experience.",
      price: "Available from $100",
      features: [
        "Quad-core processor",
        "4GB RAM",
        "Built-in cooling",
        "Multiple USB ports",
      ],
      image:
        "https://assets.raspberrypi.com/static/00d9d2ed445cf0573137a787bcbbd425/f2559/af3923c1-f1b1-40fd-8866-1baaf64086f9_Active%2BCooler.webp",
    },
    {
      id: 2,
      name: "Leela 500 Desktop Kit",
      description:
        "Your complete home computer setup with everything you need to get started.",
      price: "Complete kit from $150",
      features: [
        "Includes monitor",
        "Keyboard & mouse",
        "Pre-installed software",
        "1-year warranty",
      ],
      image:
        "https://assets.raspberrypi.com/static/6516c9e86d97b043185a585c5a896a05/f2559/40c275e3-f38a-4e17-b545-b3fb3bbc1acc_DEBUG_HERO_NO_CASE.webp",
    },
    {
      id: 3,
      name: "Leela Zero 2 W",
      description:
        "Your tiny, tiny $15 computer with impressive performance for embedded projects.",
      price: "Starting at $15",
      features: [
        "Compact size",
        "WiFi & Bluetooth",
        "Low power consumption",
        "GPIO pins",
      ],
      image:
        "https://assets.raspberrypi.com/static/b3009e19603fe466a482b23e497c59ed/f2559/f2445333-779b-4c59-889a-58cfa0d32b56_DAC%2BPro.webp",
    },
    {
      id: 4,
      name: "Leela 400 Personal Computer Kit",
      description:
        "A complete personal computer, built into a compact keyboard.",
      price: "Kit from $120",
      features: [
        "All-in-one design",
        "4GB RAM",
        "Fast processor",
        "Multiple connectivity options",
      ],
      image:
        "https://assets.raspberrypi.com/static/ef7796421bf0ef512c50ba89079906de/f2559/b13db57d-59e5-48bb-a92f-7a2e7b023633_ALL%2BVARIANTS.webp",
    },
    {
      id: 5,
      name: "Leela Pico Series",
      description:
        "A range of powerful, flexible microcontroller boards for all your projects.",
      price: "Starting at $4",
      features: [
        "RP2040 chip",
        "Programmable I/O",
        "Low cost",
        "Versatile applications",
      ],
      image:
        "https://assets.raspberrypi.com/static/692d80437e77df1ce6cc3ee34cdffe1c/9ff6b/f9f6f1a2077642df08aaf872277c84c959d0867d_cm303.webp",
    },
    {
      id: 6,
      name: "Leela 500",
      description:
        "A fast, powerful computer built into a high-quality keyboard, for the ultimate compact PC experience.",
      price: "Available from $100",
      features: [
        "Quad-core processor",
        "4GB RAM",
        "Built-in cooling",
        "Multiple USB ports",
      ],
      image:
        "https://assets.raspberrypi.com/static/00d9d2ed445cf0573137a787bcbbd425/f2559/af3923c1-f1b1-40fd-8866-1baaf64086f9_Active%2BCooler.webp",
    },
    {
      id: 7,
      name: "Leela 500 Desktop Kit",
      description:
        "Your complete home computer setup with everything you need to get started.",
      price: "Complete kit from $150",
      features: [
        "Includes monitor",
        "Keyboard & mouse",
        "Pre-installed software",
        "1-year warranty",
      ],
      image:
        "https://assets.raspberrypi.com/static/6516c9e86d97b043185a585c5a896a05/f2559/40c275e3-f38a-4e17-b545-b3fb3bbc1acc_DEBUG_HERO_NO_CASE.webp",
    },
    {
      id: 8,
      name: "Leela Zero 2 W",
      description:
        "Your tiny, tiny $15 computer with impressive performance for embedded projects.",
      price: "Starting at $15",
      features: [
        "Compact size",
        "WiFi & Bluetooth",
        "Low power consumption",
        "GPIO pins",
      ],
      image:
        "https://assets.raspberrypi.com/static/b3009e19603fe466a482b23e497c59ed/f2559/f2445333-779b-4c59-889a-58cfa0d32b56_DAC%2BPro.webp",
    },
    {
      id: 9,
      name: "Leela 400 Personal Computer Kit",
      description:
        "A complete personal computer, built into a compact keyboard.",
      price: "Kit from $120",
      features: [
        "All-in-one design",
        "4GB RAM",
        "Fast processor",
        "Multiple connectivity options",
      ],
      image:
        "https://assets.raspberrypi.com/static/ef7796421bf0ef512c50ba89079906de/f2559/b13db57d-59e5-48bb-a92f-7a2e7b023633_ALL%2BVARIANTS.webp",
    },
    {
      id: 10,
      name: "Leela Pico Series",
      description:
        "A range of powerful, flexible microcontroller boards for all your projects.",
      price: "Starting at $4",
      features: [
        "RP2040 chip",
        "Programmable I/O",
        "Low cost",
        "Versatile applications",
      ],
      image:
        "https://assets.raspberrypi.com/static/692d80437e77df1ce6cc3ee34cdffe1c/9ff6b/f9f6f1a2077642df08aaf872277c84c959d0867d_cm303.webp",
    },
  ];

  // Additional sections data
  const additionalSections = [
    {
      id: 1,
      title: "Why Choose Leela Hardware?",
      content:
        "Our hardware is designed with performance, reliability, and affordability in mind. Whether you're a student, developer, or hobbyist, we have the perfect solution for your needs.",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Community & Support",
      content:
        "Join our vibrant community of makers and developers. Get help, share projects, and collaborate with like-minded individuals from around the world.",
      icon: "👥",
    },
    {
      id: 3,
      title: "Educational Resources",
      content:
        "Access our extensive library of tutorials, project guides, and documentation to help you get the most out of your Leela hardware.",
      icon: "📚",
    },
    {
      id: 4,
      title: "Innovation & Research",
      content:
        "We're constantly pushing the boundaries of what's possible with compact computing. Our R&D team works tirelessly to bring you cutting-edge technology.",
      icon: "🔬",
    },
  ];

  // Auto-scroll effect for sections
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % additionalSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [additionalSections.length]);

  return (
    <div className="mt-16 bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Leela By Aaklan
          </motion.h1>
          <motion.p
            className="text-xl text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Innovative Hardware Solutions
          </motion.p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Power in Your Hands
          </motion.h2>
          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our range of high-performance, affordable computing
            solutions designed for creators, developers, and innovators.
          </motion.p>
          <motion.button
            className="bg-white text-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Hardware Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-lg overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600">
                      {product.features.map((feature, i) => (
                        <li key={i} className="mb-1">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">
                      {product.price}
                    </span>
                    <motion.button
                      className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-4 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            More About Leela
          </h2>

          <div className="relative h-64 md:h-80 bg-white rounded-xl shadow-lg overflow-hidden">
            {additionalSections.map((section, index) => (
              <motion.div
                key={section.id}
                className={`absolute inset-0 p-8 flex flex-col justify-center ${
                  index === activeSection ? "block" : "hidden"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeSection ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-lg">{section.content}</p>
              </motion.div>
            ))}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {additionalSections.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeSection ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSection(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Leela Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                High Performance
              </h3>
              <p className="text-gray-600">
                Our hardware delivers exceptional performance for all your
                computing needs.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-orange-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Affordable
              </h3>
              <p className="text-gray-600">
                Get premium quality hardware at prices that won't break the
                bank.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Global Community
              </h3>
              <p className="text-gray-600">
                Join millions of users worldwide who trust Leela for their
                projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join the Leela community today and unlock the potential of
            innovative hardware solutions.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Hardware;
