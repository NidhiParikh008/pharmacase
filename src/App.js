import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteNavbar from "./components/SiteNavbar";
import Footer from "./components/Footer";
import HomeIndia from "./pages/HomeIndia";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceDetail from "./pages/ServiceDetail";
import IndustriesIndex from "./pages/IndustriesIndex";
import IndustryDetail from "./pages/IndustryDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
import WhatsAppButton from "./components/WhatsAppButton"; // ✅ Import

// ✅ Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* ✅ Always scroll to top when route changes */}
      <ScrollToTop />

      <SiteNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomeIndia />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<IndustriesIndex />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />

      {/* ✅ Floating WhatsApp Button (visible on all pages) */}
      <WhatsAppButton />
    </div>
  );
}
