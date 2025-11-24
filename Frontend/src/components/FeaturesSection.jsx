import React, { useRef, useState, useEffect } from "react";
import { Grid3X3, Radio, Power, Zap, RotateCw, Wifi } from "lucide-react";
import { motion } from "framer-motion";

// -----------------------------
// ULTRA-PREMIUM — NEXT LEVEL UI
// TailwindCSS + Framer Motion + 3D Tilt + Glass + Depth + Shadows
// -----------------------------

const FEATURES = [
  {
    id: 1,
    title: "8×8 LED Matrix",
    description: "Vibrant full-color displays for smooth visual feedback.",
    icon: Grid3X3,
    image: "/Matrix_8_8.png",
  },
  {
    id: 2,
    title: "Ultrasonic + I2C",
    description: "Advanced sensor fusion for accurate robotics control.",
    icon: Radio,
    image:
      "https://mcuoneclipse.com/wp-content/uploads/2013/05/tracked-robot-with-ultrasonic-sensor.png?w=640",
  },
  {
    id: 3,
    title: "USB Type-C",
    description: "Fast charging and stable high-speed data transfer.",
    icon: Power,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRhYTVmxB8FdjIddK60KzHBeOWfAtpviOBA&s",
  },
  {
    id: 4,
    title: "5 Touch Sensors",
    description: "Smooth and responsive touch-based control.",
    icon: Zap,
    image: "/Five_touch_senser.png",
  },
  {
    id: 5,
    title: "On-board Motor Driver",
    description: "Direct dual-motor control with no external modules.",
    icon: RotateCw,
    image: "/LEELA_BACK_IPHONE-removebg-preview.png",
  },
  {
    id: 6,
    title: "4 Motor Ports + Battery",
    description: "Plug-and-play connectivity with built-in power output.",
    icon: Wifi,
    image:
      "https://m.media-amazon.com/images/I/713Zx6X8VqL._AC_UF350,350_QL80_.jpg",
  },
];

// 3D Tilt Utility
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function useTilt(ref, { max = 15, scale = 1.06 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = (x / rect.width - 0.5) * 2;
      const py = (y / rect.height - 0.5) * 2;

      const rotateY = clamp(px * max, -max, max);
      const rotateX = clamp(-py * max, -max, max);

      el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    }

    function handleLeave() {
      el.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, max, scale]);
}

export default function FeaturesSectionUltraPremium() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-[#EEF2FF]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-black text-[#0F2348] mb-6 tracking-tight"
        >
          Next‑Level Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-xl text-[#0F2348]/70 max-w-3xl mx-auto mb-20"
        >
          Ultra-premium design with glass surfaces, depth shadows, 3D motion,
          and immersive reveal animation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.id} feature={f} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, visible }) {
  const ref = useRef(null);
  useTilt(ref);
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition-all duration-500 cursor-pointer group h-96 flex flex-col"
    >
      <div className="absolute inset-0">
        <img
          src={feature.image}
          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent mix-blend-overlay" />
      </div>

      <div className="relative z-10 p-6 mt-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#E98F0B] to-[#E22213] text-white shadow-xl">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-white drop-shadow-md">
            {feature.title}
          </h3>
        </div>

        <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          {feature.description}
        </p>

        <div className="flex items-center gap-4 mt-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <button className="px-4 py-2 text-sm rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition">
            Learn More
          </button>
          <button className="px-4 py-2 text-sm rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 hover:bg-black/40 transition">
            Docs
          </button>
        </div>
      </div>
    </motion.div>
  );
}
