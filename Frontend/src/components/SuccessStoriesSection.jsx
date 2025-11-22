import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stories = [
  {
    id: 1,
    headline: "How Schools Transformed STEM With Leela",
    subtext:
      "Real stories from classrooms adopting our robotics learning system.",
    caseStudy:
      "A leading school in Delhi increased student engagement by 85% after integrating Leela boards into their curriculum.",
    bgGradient: "from-[#E98F0B]/10 to-[#E22213]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1741354706-23c6592450ef71869726c2743d757f4f.png",
  },
  {
    id: 2,
    headline: "Industry Innovation Through Robotics",
    subtext: "How companies are leveraging Leela for advanced R&D projects.",
    caseStudy:
      "A robotics startup accelerated their prototyping timeline by 60% using Leela's integrated platform.",
    bgGradient: "from-[#0F2348]/10 to-[#E98F0B]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1741354743-d482bd26c8bb05e9582a1b4927fd956c.jpeg",
  },
  {
    id: 3,
    headline: "Community Makers Building Together",
    subtext: "Creators around the world share their Leela projects.",
    caseStudy:
      "An open community has created over 500+ innovative projects ranging from automated systems to robotic art installations.",
    bgGradient: "from-[#E22213]/10 to-[#0F2348]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742547498-548aa5d5935bd5928845e1c3bd13f46a.jpeg",
  },
  {
    id: 4,
    headline: "Next-Gen Robotics in Classrooms",
    subtext: "Empowering students to learn by doing.",
    caseStudy:
      "Schools integrating Leela saw a 40% improvement in STEM exam scores.",
    bgGradient: "from-[#0F2348]/10 to-[#E22213]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742551590-image.png",
  },
  {
    id: 5,
    headline: "Global Robotics Competitions",
    subtext: "Students building and competing worldwide.",
    caseStudy:
      "Teams using Leela won multiple awards at international robotics contests.",
    bgGradient: "from-[#E98F0B]/10 to-[#0F2348]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742547772-43588221d8e652f925e71b5b347790ab.jpeg",
  },
  {
    id: 6,
    headline: "Corporate Robotics Labs",
    subtext: "Companies accelerating innovation with Leela boards.",
    caseStudy:
      "R&D teams reduced prototyping time by 50% with Leela's integrated solutions.",
    bgGradient: "from-[#E22213]/10 to-[#E98F0B]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742547971-cd7a4c4170727bda365ee13b563802f8.jpeg",
  },
  {
    id: 7,
    headline: "Maker Communities Thrive",
    subtext: "Creators collaborate to innovate new solutions.",
    caseStudy:
      "Over 500+ projects developed globally, from robotic art to automated tools.",
    bgGradient: "from-[#0F2348]/10 to-[#E98F0B]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742548029-feb56abe7e18e49ad192b6468f5c0ded.png",
  },
  {
    id: 8,
    headline: "Innovative Learning Platforms",
    subtext: "Bringing AI and robotics together for better education.",
    caseStudy:
      "Students built AI-driven robots that improved learning engagement.",
    bgGradient: "from-[#E98F0B]/10 to-[#E22213]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742551693-image-2.png",
  },
  {
    id: 9,
    headline: "STEM Outreach Programs",
    subtext: "Expanding STEM education beyond classrooms.",
    caseStudy:
      "Leela programs reached over 2,000 students across rural and urban areas.",
    bgGradient: "from-[#E22213]/10 to-[#0F2348]/10",
    image:
      "https://www.arduino.cc/cdn-cgi/image/width=640,quality=60,format=auto/https://www.datocms-assets.com/150482/1742548154-0ab822dbcb1335e692968bd08564a972.jpeg",
  },
];

export default function SuccessStoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Intersection Observer for section visibility
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

  // Duplicate first 3 and last 3 items for infinite loop
  const loopStories = [
    ...stories.slice(-3),
    ...stories,
    ...stories.slice(0, 3),
  ];

  // Initialize scroll position and auto-play
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Scroll to first original item
    const firstOriginal = carousel.children[3];
    if (firstOriginal) {
      carousel.scrollLeft = firstOriginal.offsetLeft;
    }

    // Auto-play function
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: 2, behavior: "smooth" });
      }, 16);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstChild = carousel.children[0];
    if (!firstChild) return;

    const itemWidth = firstChild.offsetWidth + 24; // gap-6

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft = itemWidth * stories.length;
    } else if (carousel.scrollLeft >= itemWidth * (stories.length + 3)) {
      carousel.scrollLeft = itemWidth * 3;
    }
  };

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Restart autoplay
    if (!autoPlayRef.current) {
      autoPlayRef.current = setInterval(() => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: 2, behavior: "smooth" });
      }, 16);
    }
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2348] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-[#0F2348]/70 max-w-2xl mx-auto">
            See how organizations and communities are transforming education and
            innovation with Leela
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button
            onClick={scrollLeft}
            className="p-2 bg-white/70 backdrop-blur-md rounded-full shadow hover:bg-white transition"
          >
            <ChevronLeft className="w-6 h-6 text-[#0F2348]" />
          </button>
        </div>
        <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button
            onClick={scrollRight}
            className="p-2 bg-white/70 backdrop-blur-md rounded-full shadow hover:bg-white transition"
          >
            <ChevronRight className="w-6 h-6 text-[#0F2348]" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#E98F0B]/40 scrollbar-track-gray-100 snap-x snap-mandatory scroll-smooth"
        >
          {loopStories.map((story, index) => (
            <div
              key={`${story.id}-${index}`}
              className={`flex-none w-72 sm:w-80 md:w-96 bg-gradient-to-br ${
                story.bgGradient
              } border border-[#0F2348]/10 rounded-xl p-6 sm:p-8 hover:border-[#E98F0B] hover:shadow-lg transition-all duration-700 snap-start ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="w-full h-48 sm:h-56 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={story.image}
                  alt={story.headline}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F2348] mb-2">
                {story.headline}
              </h3>
              <p className="text-[#0F2348]/60 text-sm mb-4">{story.subtext}</p>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg mb-4 border-l-4 border-[#E98F0B]">
                <p className="text-[#0F2348] text-sm font-medium">
                  {story.caseStudy}
                </p>
              </div>

              <button className="flex items-center gap-2 text-[#E22213] font-semibold hover:text-[#0F2348] transition-colors duration-300 group">
                Read Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
