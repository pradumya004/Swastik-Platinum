import React, { useState, useEffect } from "react";
import MahaRERABanner from "../layout/MahaRERABanner";
import building1 from "../../assets/images/building1.png";
import building2 from "../../assets/images/building2.png";
import entrance from "../../assets/images/entrance.png";
import PropertyDetails from "./../layout/PropertyDetails";

const LuxuryHeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [building1, building2, entrance];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        {/* Background image with slideshow */}
        <div className="w-full h-full bg-gray-300 bg-center bg-no-repeat absolute">
          <img
            src={slides[currentSlide]}
            alt="Swastik Platinum Exterior"
            className="w-full h-full object-cover transition-all duration-2000 scale-[1.05]"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
        </div>

        {/* Content container */}
        <div
          className={`relative z-10 pt-16 sm:pt-20 h-full flex items-center justify-center md:justify-end transition-all duration-1500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Right side - Main content */}
          <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right max-w-full md:max-w-1/2 md:ml-auto mt-[-10pt] md:mt-[-40pt]">
              {/* MahaRERA Banner - Top right position */}
              <div className="z-30 w-full md:w-1/2 lg:w-1/2 mb-4">
                <MahaRERABanner />
              </div>
              {/* Decorative elements */}
              <div className="flex flex-col items-center md:items-end mb-3">
                <div className="w-24 sm:w-32 h-px bg-[#d4af37]"></div>
                <div className="w-12 sm:w-16 h-px bg-[#d4af37] mt-1"></div>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-tight mb-8 tracking-wide">
                LIVE WITH
                <br />
                <span className="text-[#d4af37]">THE LEGENDS</span>
              </h1>

              <PropertyInfoBox />
            </div>
          </div>
        </div>

        {/* Vertical gold accent line */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[5px] bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/50 to-[#d4af37]/0"></div>
      </div>

      {/* PropertyDetails as overlay - positioned between HeroBanner and OverviewSection */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-center md:justify-end">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2">
              <PropertyDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHeroBanner;

const PropertyInfoBox = () => (
  <div className="bg-white/50 border border-[#d4af37] p-2 sm:p-3 md:p-4 shadow-2xl backdrop-blur-lg rounded-none text-gray-900 overflow-hidden relative w-[85vw] max-w-[320px] sm:max-w-md md:max-w-3/5 h-auto min-h-[30vh] sm:min-h-[50vh] md:h-[60vh] flex items-center justify-center mt-[-10px] sm:mt-[-20px]">
    {/* Gold corner accents */}
    <div className="absolute top-0 right-0 w-6 sm:w-10 md:w-16 h-6 sm:h-10 md:h-16 border-t-2 border-r-2 sm:border-t-3 sm:border-r-3 md:border-t-4 md:border-r-4 border-[#d4af37]"></div>
    <div className="absolute bottom-0 left-0 w-6 sm:w-10 md:w-16 h-6 sm:h-10 md:h-16 border-b-2 border-l-2 sm:border-b-3 sm:border-l-3 md:border-b-4 md:border-l-4 border-[#d4af37]"></div>
    <div className="absolute top-0 left-0 w-6 sm:w-10 md:w-16 h-6 sm:h-10 md:h-16 border-t-2 border-l-2 sm:border-t-3 sm:border-l-3 md:border-t-4 md:border-l-4 border-[#d4af37]"></div>
    <div className="absolute bottom-0 right-0 w-6 sm:w-10 md:w-16 h-6 sm:h-10 md:h-16 border-b-2 border-r-2 sm:border-b-3 sm:border-r-3 md:border-b-4 md:border-r-4 border-[#d4af37]"></div>

    <div className="relative z-10 w-full px-3 py-4 sm:px-4 sm:py-6">
      <p className="text-center uppercase tracking-widest text-gray-800 mb-1 sm:mb-2 text-[9px] sm:text-xs font-['Playfair_Display']">
        Introducing
      </p>

      <h2 className="text-center text-lg sm:text-2xl md:text-4xl text-gray-900 font-serif uppercase tracking-[0.1em] mb-1 sm:mb-2 leading-tight">
        Platinum
      </h2>

      <p className="text-center text-[9px] sm:text-xs text-gray-800 italic mb-2 sm:mb-4 tracking-wide font-['Playfair_Display']">
        The True Gem for a Lifetime
      </p>

      <DecorativeDivider />

      <p className="text-center text-[9px] sm:text-xs text-gray-800 font-light tracking-wider mb-2 sm:mb-4 leading-relaxed uppercase font-['Playfair_Display']">
        This is the place which will propel your grandeur
      </p>

      <DecorativeDivider />

      <p className="text-center text-[9px] sm:text-xs text-gray-800 mb-1 sm:mb-2 tracking-wide uppercase font-['Playfair_Display']">
        Where you will be the one to live
      </p>
      <p className="text-center text-gray-800 mb-3 sm:mb-6 tracking-wide text-[9px] sm:text-xs uppercase font-['Playfair_Display']">
        Amongst the privileged league
      </p>

      <DecorativeDivider />

      <p className="text-center text-[9px] sm:text-xs text-gray-800 uppercase font-semibold tracking-widest mb-1">
        Swastik <span className="text-[#d4af37]">Platinum</span>
      </p>
      <p className="text-center text-[9px] sm:text-xs text-gray-600 tracking-wider uppercase">
        — Vikhroli, Mumbai —
      </p>
    </div>
  </div>
);

const DecorativeDivider = () => (
  <div className="flex items-center justify-center my-1">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-12 sm:w-16 md:w-24"></div>
    <div className="mx-1.5 sm:mx-2 md:mx-3">
      <svg
        className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 text-[#d4af37] transform rotate-45"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1L14 8L21 10L14 12L12 19L10 12L3 10L10 8L12 1Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-12 sm:w-16 md:w-24"></div>
  </div>
);