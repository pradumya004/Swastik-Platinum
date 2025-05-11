// src/components/sections/SiteProgressSection.jsx
import React, { useState } from "react";
import wingA from "../../assets/images/wing-a.png";
import wingB from "../../assets/images/wing-b.png";
import Divider from "../common/Divider";

const SiteProgressSection = () => {
  const [modalImage, setModalImage] = useState(null);

  const progressUpdates = [
    {
      month: "APRIL 2025",
      wing: "B WING",
      progress: "31st Slab work in progress.",
      image: wingB,
    },
    {
      month: "MARCH 2025",
      wing: "A WING",
      progress: "25th Slab work in progress.",
      image: wingA,
    },
    {
      month: "MARCH 2025",
      wing: "B WING",
      progress: "29th Slab work in progress.",
      image: wingB,
    },
  ];

  return (
    <section
      id="siteProgress"
      className="py-12 sm:py-16 lg:py-20 bg-[#1a2355] text-white relative overflow-hidden"
    >
      {/* Gold accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/50 to-[#d4af37]/0"></div>
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/50 to-[#d4af37]/0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium section header */}
        <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] mb-4">
            SITE PROGRESS
          </h2>

          <Divider />

          <p className="text-base sm:text-lg md:text-xl text-white/80 tracking-wide uppercase px-4">
            Constructing Your Dreams One Brick at a Time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {progressUpdates.map((update, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-[#d4af37]/20 overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300"
            >
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-['Playfair_Display'] text-[#d4af37] mb-2">
                  {update.month}
                </h3>
                <p className="text-white/90 font-medium mb-1 text-sm sm:text-base">
                  {update.wing}
                </p>
                <p className="text-white/70 text-xs sm:text-sm">
                  {update.progress}
                </p>
              </div>

              {/* Placeholder for construction image */}
              <div
                className="relative cursor-pointer aspect-video overflow-hidden group-hover:opacity-90 transition-opacity"
                onClick={() => setModalImage(update.image)}
              >
                <img
                  src={update.image}
                  alt={`${update.wing} progress`}
                  className="w-full h-full object-cover object-center transition-transform group-hover:scale-105 duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#1a2355";
                  }}
                />
              </div>

              {/* Decorative index number */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 border border-[#d4af37]/30 flex items-center justify-center">
                <span className="text-[#d4af37] font-['Playfair_Display'] text-base sm:text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-7xl w-full">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl sm:text-4xl font-bold hover:text-[#d4af37] transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Enlarged Image"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SiteProgressSection;
