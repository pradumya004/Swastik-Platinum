import React from "react";
import buildingFrontImage from "../../assets/images/entrance.png";
import amenitiesTopView from "../../assets/images/terrace-map.png";
import aerialView from "../../assets/images/top-view.png";
import brochurePDF from "../../assets/brochure.pdf"; // Import the PDF from assets
import Divider from "../common/Divider";

const terraceAmenities = {
  leisure: {
    title: "Leisure & Wellness",
    items: [
      "Infinity Swimming Pool",
      "Jacuzzi",
      "Stepped Seating / Sit Out",
      "Deck Area",
    ],
    description:
      "Immerse yourself in luxurious water features and relaxation zones for ultimate comfort.",
  },
  fitness: {
    title: "Fitness & Sports",
    items: [
      "Open Gymnasium",
      "Yoga Deck",
      "Jogging Track",
      "Basketball Court",
      "Cricket Turf",
      "Football Turf",
    ],
    description:
      "State-of-the-art fitness facilities and sports courts for an active lifestyle.",
  },
  family: {
    title: "Family & Community",
    items: ["Kids Play Area", "Swing Area", "Multipurpose Court"],
    description:
      "Thoughtfully designed spaces for families to create lasting memories and connect.",
  },
};

const AmenityCard = ({ title, description, items }) => (
  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-b-4 border-[#d4af37]">
    <h3 className="text-lg sm:text-xl font-['Playfair_Display'] text-[#1a2355] mb-3">
      {title}
    </h3>
    <p className="text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed">
      {description}
    </p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start text-xs sm:text-sm text-gray-700"
        >
          <span className="w-2 h-2 bg-[#d4af37] rounded-full mt-1 mr-3 flex-shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const AmenitiesSection = () => (
  <div className="py-12 sm:py-18 bg-gradient-to-r from-[#f8f2ea] to-[#f5e6d8]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a2355] mb-2">
          TERRACE AMENITIES
        </h2>

        <Divider />

        <p className="text-gray-700 italic text-sm sm:text-base md:text-lg">
          An exclusive world of luxury at your rooftop
        </p>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 sm:mb-14">
        <img
          src={amenitiesTopView}
          alt="Terrace Amenities Layout"
          className="w-full object-cover"
        />
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
        {Object.values(terraceAmenities).map((amenity, i) => (
          <AmenityCard key={i} {...amenity} />
        ))}
      </div>
    </div>
  </div>
);

const HighlightCards = ({ heading = "Heading", text = "Text" }) => (
  <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border-l-4 border-[#d4af37] shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group h-full">
    <div className="absolute top-0 right-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-t-2 border-r-2 border-[#d4af37]/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <h3 className="text-xs sm:text-sm uppercase tracking-wider text-[#1a2355]/70 mb-2">
      {heading}
    </h3>
    <p className="text-base sm:text-lg lg:text-xl font-serif text-[#1a2355]/90 group-hover:text-[#d4af37] transition-colors duration-300">
      {text}
    </p>
  </div>
);

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="text-center group">
    <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-white/5 border border-[#d4af37]/30 mb-4 sm:mb-6 group-hover:bg-[#d4af37]/10 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl sm:text-2xl font-['Playfair_Display'] mb-2 sm:mb-3 group-hover:text-[#d4af37] transition-colors">
      {title}
    </h3>
    <p className="text-white/70 text-xs sm:text-sm tracking-wide">{subtitle}</p>
  </div>
);

const OverviewSection = () => {
  // Function to handle brochure download
  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = brochurePDF;
    link.download = 'Swastik_Platinum_Brochure.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="overview" className="relative overflow-hidden">
      {/* Project Highlights - Premium Styling */}
      <div className="bg-gradient-to-r from-[#f8f2ea] to-[#f5e6d8] py-12 sm:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a2355] mb-4">
              LUXURY REDEFINED
            </h2>

            <Divider />

            <p className="text-gray-700 italic text-base sm:text-lg">
              The signature of elegance and sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <HighlightCards
              heading="Project Highlights"
              text="VIEWS OF NATIONAL PARK AND CITY"
            />
            <HighlightCards heading="Location" text="VIKHROLI, MUMBAI" />
            <HighlightCards
              heading="Configuration"
              text="1 & 2 BHK WITH JODI OPTIONS"
            />
            <HighlightCards heading="Possession Date" text="DECEMBER 2025" />
          </div>
        </div>
      </div>

      {/* Overview Description - Premium Layout */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left side - Building image with premium frame */}
            <div className="relative order-2 lg:order-1">
              <div className="hidden lg:block absolute -top-4 -left-4 right-4 bottom-4 border-2 border-[#d4af37]/30"></div>
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <img
                  src={buildingFrontImage}
                  alt="Swastik Platinum Facade"
                  className="w-full h-auto object-cover transition-transform duration-3000 hover:scale-105 lg:hover:scale-115"
                />
              </div>
            </div>

            {/* Right side - Luxury content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a2355] leading-tight mb-4 sm:mb-6">
                THIS IS THE PLACE WHICH WILL PROPEL YOUR GRANDEUR
              </h2>

              <div className="w-32 sm:w-40 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30 mb-6 sm:mb-8"></div>

              <h3 className="text-lg sm:text-xl md:text-2xl text-[#1a2355]/80 mb-4 sm:mb-6 font-light tracking-wide">
                WHERE YOU WILL BE THE ONE TO LIVE AMONGST THE PRIVILEGED LEAGUE
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                The minute you step in from the colossal gates, the massive
                living space will pause your senses. This Magnificent tower of
                22 storeys will ensure that you are treated to an experience
                that is tailored to your noble tastes. Walk from room to room
                amidst rich textures and gorgeous interiors. Your palatial abode
                has been curated with the finest amenities from the mines of
                excellence.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 sm:mt-10">
                <button 
                  onClick={handleBrochureDownload}
                  className="w-full sm:w-auto bg-[#1a2355] hover:bg-[#1a2355]/90 text-white py-3 px-6 sm:px-8 border border-[#d4af37] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="text-sm sm:text-base">
                    DOWNLOAD BROCHURE
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1a2355] py-3 px-6 sm:px-8 border border-[#d4af37] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                  <span className="text-sm sm:text-base">
                    DOWNLOAD FLOOR PLANS
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AmenitiesSection />

      {/* Building Features - Ultra Premium Dark Section */}
      <div className="bg-[#1a2355] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] mb-4">
              EVERY LEGEND HAS A STORY
            </h2>

            <Divider />

            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6 tracking-wide px-4">
              BE TREASURED WITH A BELOVED NEIGHBOURHOOD THAT ENSURES ALL GOOD
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-[#d4af37] mb-6 sm:mb-8">
              MAGNIFICENT TOWER OF 22 STOREYS
            </h3>
          </div>

          {/* Featured Image with Premium Treatment */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20 overflow-hidden shadow-2xl">
            <img
              src={aerialView}
              alt="Aerial View of Swastik Platinum"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2355] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white text-center">
              <p className="text-lg sm:text-xl font-light tracking-wide mb-2 sm:mb-4">
                A WORLD OF LUXURY AWAITS
              </p>
              <p className="text-xs sm:text-sm text-white/70">
                Experience the pinnacle of luxury living at Mumbai's most
                prestigious address
              </p>
            </div>
          </div>

          {/* Ultra Premium Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            <FeatureItem
              icon={
                <svg
                  className="w-8 sm:w-10 h-8 sm:h-10 text-[#d4af37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10h3m10-11l2 2m-2-2v11h-4m-6 0h6"
                  />
                </svg>
              }
              title="1 & 2 BHK"
              subtitle="WITH JODI OPTIONS"
            />
            <FeatureItem
              icon={
                <svg
                  className="w-8 sm:w-10 h-8 sm:h-10 text-[#d4af37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12l3-3 3 3 4-4M9 21l4-4 4 4M4 4h18M4 4h16v12h-14V4z"
                  />
                </svg>
              }
              title="BALCONY RESIDENCES"
              subtitle="FROM 12TH FLOOR & ABOVE"
            />
            <FeatureItem
              icon={
                <svg
                  className="w-8 sm:w-10 h-8 sm:h-10 text-[#d4af37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="CRICKET GROUND"
              subtitle="AND CITY VIEWS"
            />
            <FeatureItem
              icon={
                <svg
                  className="w-8 sm:w-10 h-8 sm:h-10 text-[#d4af37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              title="STRATEGICALLY LOCATED"
              subtitle="IN VIKHROLI, MUMBAI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;