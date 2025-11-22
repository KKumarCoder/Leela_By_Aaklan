import { Grid3X3, Radio, Power, Zap, RotateCw, Wifi } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const features = [
  {
    id: 1,
    title: "8×8 LED Matrix",
    description: "Vibrant full-color displays for visual feedback",
    icon: <Grid3X3 className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Ultrasonic + I2C",
    description: "Advanced sensor integration for robotics",
    icon: <Radio className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "USB Type-C",
    description: "Fast charging and data transfer",
    icon: <Power className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "5 Touch Sensors",
    description: "Interactive control interface",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "On-board Motor Driver",
    description: "Direct motor control without external modules",
    icon: <RotateCw className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "4 Motor Ports + Battery",
    description: "Complete power and motor connectivity",
    icon: <Wifi className="w-8 h-8" />,
  },
];

const featureImages = [
  "/Matrix_8_8.png",
  "https://mcuoneclipse.com/wp-content/uploads/2013/05/tracked-robot-with-ultrasonic-sensor.png?w=640",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRhYTVmxB8FdjIddK60KzHBeOWfAtpviOBA&s",
  "/Five_touch_senser.png",
  "/LEELA_BACK_IPHONE-removebg-preview.png",
  "https://m.media-amazon.com/images/I/713Zx6X8VqL._AC_UF350,350_QL80_.jpg",
];

export default function FeaturesSection() {
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

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2348] mb-4">
            Product Features
          </h2>
          <p className="text-lg text-[#0F2348]/70 max-w-2xl mx-auto">
            Everything you need for advanced robotics learning, all integrated
            into one powerful board.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative rounded-xl p-8 sm:p-10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 hover:scale-105 backdrop-blur-lg bg-white/60 border border-white/40 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                backgroundImage: `url(${featureImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#E98F0B] to-[#E22213] text-white flex items-center justify-center shadow-xl">
                  {feature.icon}
                </div>
              </div>

              <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white drop-shadow-lg mb-2">
                {feature.title}
              </h3>

              <p className="relative z-10 text-white/90 text-base drop-shadow">
                {feature.description}
              </p>

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
