// src/App.jsx
import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import MahaRERABanner from "./components/layout/MahaRERABanner";
import HeroBanner from "./components/sections/HeroBanner";
import OverviewSection from "./components/sections/OverviewSection";
import LocationSection from "./components/sections/LocationSection";
import ConfigurationsSection from "./components/sections/ConfigurationsSection";
import AmenitiesSection from "./components/sections/AmenitiesSection";
import GallerySection from "./components/sections/GallerySection";
import SiteProgressSection from "./components/sections/SiteProgressSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />

      <main className="flex-grow">
        <HeroBanner />
        <OverviewSection />
        <LocationSection />
        <ConfigurationsSection />
        <AmenitiesSection />
        <GallerySection />
        <SiteProgressSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
