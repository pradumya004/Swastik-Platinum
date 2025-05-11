// src/components/sections/ConfigurationsSection.jsx
import React, { useState } from "react";
import { FaDownload, FaHome, FaExpand, FaBed } from "react-icons/fa";
import Divider from "../common/Divider";
import wingA from "../../assets/images/wing-a.png";
import wingB from "../../assets/images/wing-b.png";
import wingC from "../../assets/images/wing-c.png";

const ConfigurationsSection = () => {
  const [activeWing, setActiveWing] = useState("A");
  const [modalImage, setModalImage] = useState(null);

  const floorPlans = {
    A: {
      title: "WING - A",
      subtitle: "(12TH TO 14TH AND 16TH TO 20TH)",
      image: wingA,
      highlights: [
        "8 Premium Units",
        "579-911 Sq.ft. Homes",
        "Corner 2.5 BHK Available",
      ],
      units: [
        { number: "A-101", type: "2 BHK", area: "579 SQ.FT." },
        { number: "A-102", type: "2.5 BHK", area: "811 SQ.FT." },
        { number: "A-103", type: "2 BHK", area: "579 SQ.FT." },
        { number: "A-104", type: "1 BHK", area: "418 SQ.FT." },
        { number: "A-105", type: "2 BHK", area: "579 SQ.FT." },
        { number: "A-106", type: "2.5 BHK", area: "911 SQ.FT." },
        { number: "A-107", type: "2 BHK", area: "579 SQ.FT." },
        { number: "A-108", type: "1 BHK", area: "418 SQ.FT." },
      ],
    },
    B: {
      title: "WING - B",
      subtitle: "(12TH TO 14TH AND 16TH TO 20TH)",
      image: wingB,
      highlights: [
        "8 Exclusive Units",
        "418-791 Sq.ft. Options",
        "Premium Corner Units",
      ],
      units: [
        { number: "B-101", type: "2 BHK", area: "579 SQ.FT." },
        { number: "B-102", type: "2.5 BHK", area: "781 SQ.FT." },
        { number: "B-103", type: "2 BHK", area: "579 SQ.FT." },
        { number: "B-104", type: "1 BHK", area: "418 SQ.FT." },
        { number: "B-105", type: "2 BHK", area: "579 SQ.FT." },
        { number: "B-106", type: "2.5 BHK", area: "791 SQ.FT." },
        { number: "B-107", type: "2 BHK", area: "579 SQ.FT." },
        { number: "B-108", type: "1 BHK", area: "418 SQ.FT." },
      ],
    },
    C: {
      title: "WING - C",
      subtitle: "(12TH TO 14TH AND 16TH TO 20TH)",
      image: wingC,
      highlights: [
        "8 Select Residences",
        "424-585 Sq.ft. Homes",
        "Efficient Layouts",
      ],
      units: [
        { number: "C-101", type: "2 BHK", area: "579 SQ.FT." },
        { number: "C-102", type: "1 BHK", area: "428 SQ.FT." },
        { number: "C-103", type: "1 BHK", area: "428 SQ.FT." },
        { number: "C-104", type: "2 BHK", area: "579 SQ.FT." },
        { number: "C-105", type: "2 BHK", area: "585 SQ.FT." },
        { number: "C-106", type: "1 BHK", area: "424 SQ.FT." },
        { number: "C-107", type: "1 BHK", area: "424 SQ.FT." },
        { number: "C-108", type: "2 BHK", area: "579 SQ.FT." },
      ],
    },
  };

  return (
    <section
      id="configurations"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8f2ea] to-[#f5e6d8] relative overflow-hidden"
    >
      {/* Subtle Gold Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-[#d4af37] font-medium mb-2 tracking-wider text-sm sm:text-base">
            EXCLUSIVE RESIDENCES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-[#1a2355] mb-4">
            CONFIGURATIONS
          </h2>

          <Divider />

          <p className="text-base sm:text-lg text-[#1a2355]/70 italic">
            Where elegance finds its home
          </p>
        </div>

        {/* Luxury Wing Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex bg-white/70 backdrop-blur-sm p-1 sm:p-1.5 gap-1 sm:gap-2 rounded-xl shadow-lg">
            {Object.keys(floorPlans).map((wing) => (
              <button
                key={wing}
                className={`px-6 sm:px-8 lg:px-10 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium rounded-lg transition-all duration-500 ${
                  activeWing === wing
                    ? "bg-[#1a2355] text-white shadow-inner"
                    : "text-[#1a2355]/70 hover:text-[#1a2355]"
                }`}
                onClick={() => setActiveWing(wing)}
              >
                WING {wing}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Content Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Floor Plan Image with Overlay */}
              <div
                className="md:w-2/3 relative cursor-pointer overflow-hidden group aspect-video md:aspect-auto"
                onClick={() => setModalImage(floorPlans[activeWing].image)}
              >
                <img
                  src={floorPlans[activeWing].image}
                  alt={`Floor Plan ${activeWing}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/800x600/f5e6d8/1a2355?text=Wing+${activeWing}`;
                  }}
                />
              </div>

              {/* Premium Info Panel */}
              <div className="md:w-1/3 bg-[#1a2355] text-white">
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-['Playfair_Display'] mb-2">
                    {floorPlans[activeWing].title}
                  </h3>
                  <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                    {floorPlans[activeWing].subtitle}
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-[#d4af37]">
                      Wing Highlights
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {floorPlans[activeWing].highlights.map(
                        (highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center text-white/90 text-sm sm:text-base"
                          >
                            <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3"></span>
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-medium mb-3 text-[#d4af37]">
                      Building Overview
                    </h4>
                    <div className="space-y-2 text-white/80 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span>Total Floors</span>
                        <span className="text-white font-medium">
                          22 Storeys
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Units per floor</span>
                        <span className="text-white font-medium">
                          8 Residences
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium Floors</span>
                        <span className="text-white font-medium">12-20</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#d4af37] hover:bg-[#b8961f] text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base">
                    <FaDownload />
                    Download Floor Plans
                  </button>
                </div>
              </div>
            </div>

            {/* Unit Availability Section */}
            <div className="border-t border-[#d4af37]/20 bg-white py-4 sm:py-6 px-4 rounded-b-xl shadow-md">
              <div className="text-center mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-medium text-[#1a2355] mb-2 tracking-wider">
                  AVAILABLE UNITS
                </h4>
                <div className="w-16 h-px bg-[#d4af37] mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {floorPlans[activeWing].units.slice(0, 4).map((unit, index) => (
                  <div
                    key={index}
                    className="bg-[#f8f2ea] border border-[#f5e6d8] rounded-lg p-3 sm:p-4 text-center hover:border-[#d4af37] transition-colors duration-300"
                  >
                    <p className="text-xs sm:text-sm text-[#1a2355]/70 mb-1">
                      {unit.number}
                    </p>
                    <p className="text-base sm:text-lg font-medium text-[#1a2355] mb-1">
                      {unit.type}
                    </p>
                    <p className="text-xs sm:text-sm text-[#d4af37] font-medium">
                      {unit.area}
                    </p>
                  </div>
                ))}
              </div>

              {floorPlans[activeWing].units.length > 4 && (
                <p className="text-xs text-[#1a2355]/70 mt-4 text-center italic">
                  +{floorPlans[activeWing].units.length - 4} more units
                  available
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Luxury Configuration Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[#d4af37]/10 rounded-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 group-hover:scale-110 transition-transform"></div>
            <FaBed className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-4" />
            <h4 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#1a2355] mb-2">
              1 BHK
            </h4>
            <p className="text-[#1a2355]/70 mb-1 text-sm sm:text-base">418-428 Sq.ft.</p>
            <p className="text-xs sm:text-sm text-[#d4af37]">Compact Luxury</p>
          </div>

          <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[#d4af37]/10 rounded-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 group-hover:scale-110 transition-transform"></div>
            <FaHome className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-4" />
            <h4 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#1a2355] mb-2">
              2 BHK
            </h4>
            <p className="text-[#1a2355]/70 mb-1 text-sm sm:text-base">579-585 Sq.ft.</p>
            <p className="text-xs sm:text-sm text-[#d4af37]">Spacious Living</p>
          </div>

          <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[#d4af37]/10 rounded-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 group-hover:scale-110 transition-transform"></div>
            <FaExpand className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-4" />
            <h4 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#1a2355] mb-2">
              2.5 BHK
            </h4>
            <p className="text-[#1a2355]/70 mb-1 text-sm sm:text-base">781-911 Sq.ft.</p>
            <p className="text-xs sm:text-sm text-[#d4af37]">Premium Residences</p>
          </div>
        </div>
      </div>

      {/* Modal for image preview */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl sm:text-5xl lg:text-6xl font-bold hover:text-[#d4af37] transition-colors"
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

export default ConfigurationsSection;