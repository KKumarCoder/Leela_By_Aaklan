// Home.jsx
import HeroSection from "../components/HeroSection.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import ProductsSection from "../components/ProductsSection.jsx";

import ShowcaseSection from "../components/ShowcaseSection.jsx";
import LatestNewsSection from "../components/LatestNewsSection.jsx";
import SuccessStoriesSection from "../components/SuccessStoriesSection.jsx";
import TechSpecsSection from "../components/TechSpecsSection.jsx";
import WhatIsLeelaSection from "../components/WhatIsLeelaSection.jsx";
import DownloadPDFSection from "../components/DownloadPDFSection.jsx";
import About_Leela_Details from "./About_Leela_Details.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCarousel />
      <FeaturesSection />
      <ProductsSection />

      <ShowcaseSection />
      <LatestNewsSection />
      <WhatIsLeelaSection />

      <TechSpecsSection />
      <SuccessStoriesSection />
      <DownloadPDFSection />
      <About_Leela_Details />
    </>
  );
}
