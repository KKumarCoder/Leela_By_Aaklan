// import Footer from "./components/Footer.jsx";
// import NavigationBar from "./components/NavigationBar.jsx";
// import HeroSection from "./components/HeroSection.jsx";
// import FeaturesSection from "./components/FeaturesSection.jsx";
// import ShowcaseSection from "./components/ShowcaseSection.jsx";
// import ProductsSection from "./components/ProductsSection.jsx";
// import LatestNewsSection from "./components/LatestNewsSection.jsx";
// import SuccessStoriesSection from "./components/SuccessStoriesSection.jsx";
// import DownloadPDFSection from "./components/DownloadPDFSection.jsx";
// import TechSpecsSection from "./components/TechSpecsSection.jsx";
// import WhatIsLeelaSection from "./components/WhatIsLeelaSection.jsx";

// export default function App() {
//   return (
//     <>
//       <NavigationBar />
//       <HeroSection />
//       <ShowcaseSection />
//       <FeaturesSection />
//       <TechSpecsSection />
//       <ProductsSection />
//       <WhatIsLeelaSection />
//       <LatestNewsSection />
//       <SuccessStoriesSection />
//       <DownloadPDFSection />
//       <Footer />
//     </>
//   );
// }

// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home.jsx";
import Hardware from "./pages/Hardware.jsx";
import Software from "./pages/Software.jsx";
import Documentation from "./pages/Documentation.jsx";
import News from "./pages/News.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import DocumentationDetails from "./pages/Documentation_details.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:id" element={<DocumentationDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}
