import Footer from "./components/Footer.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import ShowcaseSection from "./components/ShowcaseSection.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import LatestNewsSection from "./components/LatestNewsSection.jsx";
import SuccessStoriesSection from "./components/SuccessStoriesSection.jsx";
import DownloadPDFSection from "./components/DownloadPDFSection.jsx";
import TechSpecsSection from "./components/TechSpecsSection.jsx";
import WhatIsLeelaSection from "./components/WhatIsLeelaSection.jsx";

export default function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <TechSpecsSection />
      <ProductsSection />
      <WhatIsLeelaSection />
      <LatestNewsSection />
      <SuccessStoriesSection />
      <DownloadPDFSection />
      <Footer />
    </>
  );
}
