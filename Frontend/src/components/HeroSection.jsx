import { useState, useEffect } from "react";
import { ArrowRight, Cpu, Zap, Code, Wifi, Play } from "lucide-react";

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const heroImages = [
    {
      src: "./Leela_Front_board.png",
      alt: "LEELA Front Board",
      title: "Front Board View",
      description: "Advanced circuit design with modular components",
      features: ["ARM Cortex", "20+ I/O", "USB-C"],
    },
    {
      src: "./new_aaklan.jpeg",
      alt: "LEELA Front Board",
      title: "Front Board View",
      description: "Advanced circuit design with modular components",
      features: ["ARM Cortex", "20+ I/O", "USB-C"],
    },
    {
      src: "./Leela_8_8Matrix.png",
      alt: "LEELA 8x8 Matrix",
      title: "8x8 LED Matrix",
      description: "MOTOR L • MOTOR R • BETA - Precision motor control",
      features: ["Dual Motors", "LED Display", "Real-time"],
    },
    {
      src: "leela_Board_direction.png",
      alt: "LEELA Board Direction",
      title: "Board Direction Guide",
      description: "Easy navigation and component placement",
      features: ["Plug & Play", "Beginner", "Guided"],
    },
    {
      src: "./Leela_Ardino.png",
      alt: "LEELA Arduino Compatible",
      title: "Arduino Compatibility",
      description: "Seamless integration with Arduino ecosystem",
      features: ["Arduino IDE", "Libraries", "Community"],
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [heroImages.length, isHovered]);

  const features = [
    {
      icon: <Cpu className="w-5 h-5" />,
      text: "Advanced Processor",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Motor Control",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Arduino Compatible",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      text: "Wireless Connectivity",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-orange-50 py-4">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(45deg,transparent_49%,#3b82f6_49%,#3b82f6_51%,transparent_51%)] bg-[length:60px_60px]" />
        </div>

        {/* Binary Code Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="animate-marquee whitespace-nowrap text-2xl font-mono text-gray-800">
            01010101 01110011 01100101 01110010 00100000 01000101 01111000
            01110000 01100101 01110010 01101001 01100101 01101110 01100011
            01100101 00100000
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-200 rounded-full blur-2xl opacity-15 animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  LEELA ... By Aaklan
                </span>
                <br />
                <span className="text-gray-800">Revolutionary</span>
                <br />
                <span className="text-gray-600">Robotics Platform</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Experience the future of electronics with LEELA - a cutting-edge
              robotics platform designed for innovators, educators, and
              creators. Built with precision engineering and advanced
              technology.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl">
                Get LEELA Kit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Image Slider */}
          <div
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg">
              {/* Floating Tech Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-2xl rotate-12 border border-blue-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>

              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-100 rounded-2xl -rotate-12 border border-orange-300 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>

              {/* Image Container with Glass Effect */}
              <div className="relative  backdrop-blur-xl rounded-3xl p-6 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                  <img
                    key={activeImageIndex}
                    src={heroImages[activeImageIndex].src}
                    alt={heroImages[activeImageIndex].alt}
                    className="w-full h-64 object-contain transition-all duration-500 transform hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop";
                    }}
                  />

                  {/* Image Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-black/50 to-transparent p-6">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {heroImages[activeImageIndex].title}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">
                      {heroImages[activeImageIndex].description}
                    </p>
                    <div className="flex gap-2">
                      {heroImages[activeImageIndex].features.map(
                        (feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white border border-white/30"
                          >
                            {feature}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Live Indicator */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Rotating Tech Ring */}
              <div className="absolute inset-0 border-2 border-orange-300/40 rounded-3xl animate-spin-slow pointer-events-none" />
            </div>

            {/* Enhanced Image Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg rounded-full p-3 border border-gray-300 shadow-lg">
              <div className="flex gap-4">
                {heroImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                      index === activeImageIndex
                        ? "bg-orange-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index === activeImageIndex
                          ? "bg-white"
                          : "bg-orange-500"
                      }`}
                    />
                    <span className="text-sm font-medium">
                      {image.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              {activeImageIndex + 1} / {heroImages.length}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-16 sm:h-24 lg:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-blue-500"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-orange-500"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-red-500"
          ></path>
        </svg>
      </div>

      {/* Animated Floating Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full opacity-60 animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: "2s",
            }}
          ></div>
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
