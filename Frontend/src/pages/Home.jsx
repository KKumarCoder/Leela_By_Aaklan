// Home.jsx
import HeroSection from "../components/HeroSection.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import SolutionsSection from "../components/SolutionsSection.jsx";
import ShowcaseSection from "../components/ShowcaseSection.jsx";
import LatestNewsSection from "../components/LatestNewsSection.jsx";
import SuccessStoriesSection from "../components/SuccessStoriesSection.jsx";
import TechSpecsSection from "../components/TechSpecsSection.jsx";
import WhatIsLeelaSection from "../components/WhatIsLeelaSection.jsx";
import DownloadPDFSection from "../components/DownloadPDFSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCarousel />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <ShowcaseSection />
      <LatestNewsSection />
      <SuccessStoriesSection />
      <TechSpecsSection />
      <WhatIsLeelaSection />
      <DownloadPDFSection />
    </>
  );
}
