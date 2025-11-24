import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Battery,
  Zap,
  Wifi,
  Camera,
  Gauge,
  Navigation,
  Cctv,
  Settings,
  Package,
  Filter,
  Search,
  ShoppingCart,
  Download,
  Star,
  ArrowRight,
  ChevronDown,
  Play,
  Pause,
  SlidersHorizontal,
  X,
  Tag,
  Euro,
  Clock,
  Truck,
  Shield,
  Check,
  Heart,
  Share2,
  Eye
} from "lucide-react";

export default function HardwareProducts() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Product categories
  const categories = [
    { id: "all", name: "All Products", icon: <Package className="w-5 h-5" />, count: 32 },
    { id: "boards", name: "Main Boards", icon: <CircuitBoard className="w-5 h-5" />, count: 8 },
    { id: "sensors", name: "Sensors", icon: <Gauge className="w-5 h-5" />, count: 12 },
    { id: "motors", name: "Motors & Drivers", icon: <Zap className="w-5 h-5" />, count: 7 },
    { id: "power", name: "Power & Battery", icon: <Battery className="w-5 h-5" />, count: 6 },
    { id: "kits", name: "Starter Kits", icon: <Settings className="w-5 h-5" />, count: 5 },
    { id: "accessories", name: "Accessories", icon: <Cctv className="w-5 h-5" />, count: 4 }
  ];

  // Filter features
  const featuresList = [
    "Wireless", "Arduino Compatible", "Industrial Grade", "Beginner Friendly",
    "Cloud Enabled", "High Precision", "Waterproof", "Low Power"
  ];

  // Sort options
  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "popular", name: "Most Popular" },
    { id: "newest", name: "Newest First" }
  ];

  // Enhanced products data
  const products = {
    boards: [
      {
        id: 1,
        name: "Leela Starter Board",
        description: "Perfect for beginners and hobbyists. Everything you need to start your robotics journey with Leela.",
        price: 24.90,
        originalPrice: 29.90,
        image: "https://images.pexels.com/photos/6755146/pexels-photo-6755146.jpeg",
        features: ["Beginner-friendly", "Comprehensive docs", "Active community", "Arduino compatible"],
        tags: ["beginner", "arduino", "education"],
        category: "boards",
        popular: false,
        featured: true,
        stock: 45,
        gradient: "from-blue-500 to-blue-600",
        specs: {
          processor: "ARM Cortex-M4, 120MHz",
          memory: "256KB Flash, 64KB RAM",
          iopins: "22 GPIO, I2C, SPI, UART",
          power: "USB-C, 3.3V/5V"
        },
        additionalFeatures: ["Wireless", "Arduino Compatible", "Beginner Friendly"]
      },
      {
        id: 2,
        name: "Leela Pro Board",
        description: "Advanced features for makers and educators. Enhanced sensors and expanded capabilities for complex projects.",
        price: 39.90,
        originalPrice: 49.90,
        image: "https://images.pexels.com/photos/4705623/pexels-photo-4705623.jpeg",
        features: ["Wireless connectivity", "Enhanced processing", "Industrial grade", "Advanced sensors"],
        tags: ["pro", "wireless", "industrial"],
        category: "boards",
        popular: true,
        featured: true,
        stock: 23,
        gradient: "from-orange-500 to-red-600",
        specs: {
          processor: "ARM Cortex-M7, 480MHz",
          memory: "1MB Flash, 256KB RAM",
          iopins: "48 GPIO, I2C, SPI, UART, CAN",
          power: "USB-C, Li-ion, 3.3V/5V/12V"
        },
        additionalFeatures: ["Wireless", "Industrial Grade", "Cloud Enabled", "High Precision"]
      },
      {
        id: 3,
        name: "Leela Cloud Module",
        description: "Enterprise-grade solution with cloud integration. Perfect for schools, research institutions, and advanced development.",
        price: 59.90,
        originalPrice: 69.90,
        image: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg",
        features: ["Cloud integration", "Enterprise security", "Cellular options", "Remote management"],
        tags: ["enterprise", "cloud", "industrial"],
        category: "boards",
        popular: false,
        featured: true,
        stock: 15,
        gradient: "from-blue-500 to-indigo-600",
        specs: {
          processor: "Dual-core ARM Cortex-A53",
          memory: "2GB RAM, 16GB eMMC",
          iopins: "64 GPIO, PCIe, Ethernet",
          power: "12V DC, PoE"
        },
        additionalFeatures: ["Cloud Enabled", "Industrial Grade", "Wireless"]
      }
    ],
    sensors: [
      {
        id: 4,
        name: "Ultrasonic Distance Sensor",
        description: "High-precision distance measurement for obstacle avoidance and navigation.",
        price: 8.90,
        originalPrice: 12.90,
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&q=80",
        features: ["2cm-400cm range", "2.5mm accuracy", "3.3V/5V compatible", "Easy mounting"],
        tags: ["sensor", "distance", "navigation"],
        category: "sensors",
        popular: true,
        featured: false,
        stock: 89,
        gradient: "from-blue-500 to-blue-600",
        additionalFeatures: ["High Precision", "Waterproof", "Low Power"]
      },
      {
        id: 5,
        name: "IMU Motion Sensor",
        description: "9-axis inertial measurement unit with gyroscope, accelerometer, and magnetometer.",
        price: 12.90,
        originalPrice: 16.90,
        image: "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
        features: ["9-axis fusion", "High precision", "Low power", "I2C/SPI interface"],
        tags: ["sensor", "motion", "imu"],
        category: "sensors",
        popular: false,
        featured: true,
        stock: 34,
        gradient: "from-orange-500 to-orange-600",
        additionalFeatures: ["High Precision", "Low Power"]
      },
      {
        id: 6,
        name: "Environmental Sensor Pack",
        description: "Complete environmental monitoring with temperature, humidity, pressure, and air quality.",
        price: 18.90,
        originalPrice: 24.90,
        image: "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
        features: ["Multi-parameter", "High accuracy", "Weatherproof", "Plug & play"],
        tags: ["sensor", "environment", "weather"],
        category: "sensors",
        popular: false,
        featured: false,
        stock: 27,
        gradient: "from-red-500 to-red-600",
        additionalFeatures: ["High Precision", "Waterproof"]
      }
    ],
    motors: [
      {
        id: 7,
        name: "DC Gear Motor Set",
        description: "High-torque DC gear motors perfect for robotic wheels and mechanical movements.",
        price: 14.90,
        originalPrice: 19.90,
        image: "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
        features: ["High torque", "Long lifespan", "Easy mounting", "Various RPM options"],
        tags: ["motor", "gear", "movement"],
        category: "motors",
        popular: true,
        featured: false,
        stock: 56,
        gradient: "from-blue-500 to-blue-600",
        additionalFeatures: ["Industrial Grade"]
      }
    ],
    power: [
      {
        id: 8,
        name: "Li-ion Battery Pack",
        description: "High-capacity lithium-ion battery pack with built-in protection circuit.",
        price: 22.90,
        originalPrice: 29.90,
        image: "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
        features: ["3000mAh capacity", "Overcharge protection", "LED indicator", "Multiple connectors"],
        tags: ["battery", "power", "li-ion"],
        category: "power",
        popular: true,
        featured: true,
        stock: 42,
        gradient: "from-red-500 to-red-600",
        additionalFeatures: ["Low Power"]
      }
    ],
    kits: [
      {
        id: 9,
        name: "Leela Starter Kit",
        description: "Complete robotics starter kit with board, sensors, motors, and comprehensive guide.",
        price: 79.90,
        originalPrice: 99.90,
        image: "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
        features: ["Everything included", "Step-by-step tutorials", "Active community", "Arduino compatible"],
        tags: ["kit", "starter", "education"],
        category: "kits",
        popular: true,
        featured: true,
        stock: 18,
        gradient: "from-blue-500 to-red-600",
        additionalFeatures: ["Beginner Friendly", "Arduino Compatible"]
      }
    ],
    accessories: [
      {
        id: 10,
        name: "Robotics Wheel Set",
        description: "High-quality rubber wheels with strong grip and smooth rotation.",
        price: 12.90,
        originalPrice: 16.90,
        image: "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
        features: ["65mm diameter", "Rubber tread", "Metal hub", "Easy installation"],
        tags: ["wheel", "accessory", "movement"],
        category: "accessories",
        popular: false,
        featured: false,
        stock: 73,
        gradient: "from-orange-500 to-orange-600",
        additionalFeatures: []
      }
    ]
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&q=80",
    "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=1200&q=80",
    "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=1200&q=80",
    "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=1200&q=80"
  ];

  // Get all products
  const allProducts = Object.values(products).flat();

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = activeCategory === "all" 
      ? allProducts
      : products[activeCategory] || [];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Features filter
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(product =>
        selectedFeatures.some(feature => 
          product.additionalFeatures.includes(feature)
        )
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - popular and featured first
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        });
    }

    return filtered;
  };

  const searchedProducts = getFilteredProducts();

  // Toggle feature filter
  const toggleFeature = (feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Auto-play gallery
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, galleryImages.length]);

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 shadow-sm mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Complete Robotics Ecosystem
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  LEELA Hardware
                </span>
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-red-500 mb-8 rounded-full"></div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover our complete range of robotics components - from powerful main boards to precision sensors, 
                motors, and everything you need to build amazing projects. 32+ products with premium quality.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Shop All Products
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Catalog
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Free Shipping Over €50</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={galleryImages[currentImage]}
                    alt={`Gallery ${currentImage + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-80 object-cover"
                  />
                </AnimatePresence>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                  <button
                    onClick={prevImage}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-700 rotate-180" />
                  </button>
                  
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-gray-700" /> : <Play className="w-4 h-4 text-gray-700" />}
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-1">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage ? 'bg-orange-500 scale-125' : 'bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Hidden on mobile, shown on desktop */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 sticky top-24">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Content */}
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 border border-orange-200'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeCategory === category.id ? 'bg-orange-500 text-white' : 'bg-gray-100'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Euro className="w-4 h-4" />
                    Price Range
                  </h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>€{priceRange[0]}</span>
                      <span>€{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Features
                  </h4>
                  <div className="space-y-2">
                    {featuresList.map((feature) => (
                      <label key={feature} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature)}
                          onChange={() => toggleFeature(feature)}
                          className="hidden"
                        />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          selectedFeatures.includes(feature)
                            ? 'bg-orange-500 border-orange-500'
                            : 'border-gray-300 group-hover:border-orange-300'
                        }`}>
                          {selectedFeatures.includes(feature) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {feature}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedFeatures.length > 0 || priceRange[1] < 100) && (
                  <button
                    onClick={() => {
                      setSelectedFeatures([]);
                      setPriceRange([0, 100]);
                    }}
                    className="w-full py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-6 text-white mt-6">
              <h4 className="font-bold text-lg mb-2">Special Offer!</h4>
              <p className="text-sm opacity-90 mb-3">
                Get 15% off on all starter kits this week. Limited time offer.
              </p>
              <button className="w-full py-2 bg-white text-blue-600 font-bold rounded-lg hover:scale-105 transition-transform">
                Shop Now
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar with Search and Sort */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products by name, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Results and Sort */}
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    {searchedProducts.length} of {allProducts.length} products
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>

                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden p-2 border border-gray-300 rounded-xl hover:bg-gray-50"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedFeatures.length > 0 || searchTerm) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {searchTerm && (
                    <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Search: "{searchTerm}"
                      <button onClick={() => setSearchTerm('')}>
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  {selectedFeatures.map(feature => (
                    <div key={feature} className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                      <button onClick={() => toggleFeature(feature)}>
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Products Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {searchedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
                >
                  {/* Product Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.popular && (
                      <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        POPULAR
                      </div>
                    )}
                    {product.featured && (
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
                        FEATURED
                      </div>
                    )}
                    {product.originalPrice > product.price && (
                      <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                        SAVE {Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600 hover:text-red-500'
                      }`} 
                    />
                  </button>

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Stock Indicator */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.stock > 20 
                          ? 'bg-green-100 text-green-700' 
                          : product.stock > 5
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.stock > 20 ? 'In Stock' : product.stock > 5 ? 'Low Stock' : 'Last Few'}
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 flex-1">
                        {product.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-xl font-black bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                          €{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            €{product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProduct(product)}
                          className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-1"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {searchedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 bg-white rounded-3xl shadow-lg border border-gray-200"
              >
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFeatures([]);
                    setPriceRange([0, 100]);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}

            {/* Load More */}
            {searchedProducts.length > 0 && (
              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Load More Products
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
            wishlist={wishlist}
            onWishlistToggle={toggleWishlist}
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

// Enhanced Product Modal Component
const ProductModal = ({ product, onClose, wishlist, onWishlistToggle }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80",
    "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&q=80",
    "https://images.unsplash.com/photo-1581092580497-e151a743d2c9?w=500&q=80"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product Images */}
          <div className="relative">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-96 lg:h-full object-cover"
            />
            
            {/* Image Thumbnails */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-orange-500' : 'border-white'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => onWishlistToggle(product.id)}
              className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <Heart 
                className={`w-6 h-6 ${
                  wishlist.includes(product.id) 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-gray-600 hover:text-red-500'
                }`} 
              />
            </button>
          </div>

          {/* Product Details */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.8</span>
                    <span className="text-gray-500">(128 reviews)</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.stock > 20 
                      ? 'bg-green-100 text-green-700' 
                      : product.stock > 5
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {product.stock} in stock
                  </div>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-all"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className={`text-4xl font-black bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                  €{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      €{product.originalPrice}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full">
                      Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-6">
              <h4 className="font-bold text-gray-900 text-lg">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            {product.specs && (
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Specifications:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-xl p-4">
                      <div className="text-gray-500 capitalize text-sm mb-1">{key}:</div>
                      <div className="font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Add to Cart - €{(product.price * quantity).toFixed(2)}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Download className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">2-year warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-gray-600">Delivery in 3-5 days</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};