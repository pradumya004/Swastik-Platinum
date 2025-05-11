import React, { useState, useEffect } from "react";
import Divider from "../common/Divider";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaFilm,
  FaGamepad,
  FaCouch,
  FaWifi,
  FaRunning,
  FaSpa,
  FaBasketballBall,
  FaFutbol,
  FaGlassCheers,
  FaBed,
  FaTree,
  FaInfinity,
  FaHotTub,
  FaMountain,
} from "react-icons/fa";

import balcony from "../../assets/images/balcony.png";
import natureView from "../../assets/images/nature-view.jpeg";
import terraceAmenity1 from "../../assets/images/amenities/photo1.png";
import terraceAmenity2 from "../../assets/images/amenities/photo2.png";
import terraceAmenity3 from "../../assets/images/amenities/photo3.png";
import terraceAmenity4 from "../../assets/images/amenities/photo4.png";
import terraceAmenity5 from "../../assets/images/amenities/photo5.png";
import terraceAmenity6 from "../../assets/images/amenities/photo6.png";
import terraceAmenity7 from "../../assets/images/amenities/photo7.png";

// Map of amenity names to their icons
const amenityIcons = {
  "Grand Entrance Lobby": FaGlassCheers,
  "Lounge Area": FaCouch,
  "Children's Play Area": FaChild,
  "Toddlers Play Area": FaChild,
  "Kids Pool": FaSwimmingPool,
  "Work Station": FaWifi,
  "Elders Lounge": FaCouch,
  "Guest Room": FaBed,
  "Banquet Hall": FaGlassCheers,
  "Infinity Swimming Pool": FaInfinity,
  Jacuzzi: FaHotTub,
  "Mini Theatre": FaFilm,
  "Indoor Gaming Zone": FaGamepad,
  "Cricket Turf": FaBasketballBall,
  "Football Turf": FaFutbol,
  "Jogging Track": FaRunning,
  "Premier Gymnasium": FaDumbbell,
  "Yoga Pavilion": FaSpa,
  "Swing Area": FaTree,
  "Covered Sit Out Area": FaMountain,
};

const PremiumAmenityCard = ({ title, icon: Icon, delay = 0 }) => {
  return (
    <div
      className="relative group bg-white p-3 sm:p-4 md:p-6 hover:bg-[#1a2355] transition-all duration-500 shadow-lg hover:shadow-2xl border border-[#f5e6d8] hover:border-[#d4af37]/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 sm:border-t-3 sm:border-r-3 border-[#d4af37]/0 group-hover:border-[#d4af37] transition-all duration-500"></div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-3 sm:mb-4 relative">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1a2355] group-hover:bg-[#d4af37] rounded-full flex items-center justify-center transition-all duration-500">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#d4af37]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <p className="text-xs sm:text-sm font-medium text-[#1a2355] group-hover:text-white transition-colors duration-500 tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );
};

const AutoScrollGallery = ({ images, interval = 3000, height = "450px" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      <div className={`relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]`}>
        {/* Gold corner accents */}
        <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-r-2 sm:border-t-3 sm:border-r-3 md:border-t-4 md:border-r-4 border-[#d4af37] z-10"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-l-2 sm:border-b-3 sm:border-l-3 md:border-b-4 md:border-l-4 border-[#d4af37] z-10"></div>
        <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-l-2 sm:border-t-3 sm:border-l-3 md:border-t-4 md:border-l-4 border-[#d4af37] z-10"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-r-2 sm:border-b-3 sm:border-r-3 md:border-b-4 md:border-r-4 border-[#d4af37] z-10"></div>

        {/* Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transition: "opacity 1s ease-in-out",
            }}
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x600/f5e6d8/1a2355?text=Luxury+Amenities";
            }}
          />
        ))}
      </div>
    </>
  );
};

const AmenitiesSection = () => {
  const amenities = [
    "Grand Entrance Lobby",
    "Lounge Area",
    "Children's Play Area",
    "Toddlers Play Area",
    "Kids Pool",
    "Work Station",
    "Elders Lounge",
    "Guest Room",
    "Banquet Hall",
    "Infinity Swimming Pool",
    "Jacuzzi",
    "Mini Theatre",
    "Indoor Gaming Zone",
    "Cricket Turf",
    "Football Turf",
    "Jogging Track",
    "Premier Gymnasium",
    "Yoga Pavilion",
    "Swing Area",
    "Covered Sit Out Area",
  ];

  const amenitiesList = [
    "Premier Gymnasium",
    "Children's Play Area",
    "Play school / Day Care",
    "Indoor Games",
    "Mini Theatre",
    "Work Station / Reading Area",
    "Gaming Zones / Multipurpose Covered Turf",
    "Elder's Lounge",
    "Kids Pool",
    "Pantry",
    "Banquet Hall",
    "Guest Rooms",
  ];

  const terraceAmenities = [
    "Stepped seating / Sit out",
    "Open Gymnasium",
    "Basketball Court / Multipurpose Court / Cricket Turf",
    "Yoga Deck",
    "Football Turf",
    "Deck Area",
    "Infinity Swimming Pool",
    "Jacuzzi",
    "Kids Play Area",
    "Swing Area",
    "Jogging Track",
  ];

  return (
    <section
      id="amenities"
      className="bg-gradient-to-b from-[#f8f2ea] to-[#f5e6d8] relative overflow-hidden"
    >
      {/* Main Amenities Grid */}
      <div className="py-10 sm:py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-[#1a2355] mb-3 sm:mb-4">
              AMENITIES
            </h2>

            <Divider />

            <p className="text-base sm:text-lg md:text-xl text-[#1a2355]/80 tracking-wide px-4">
              WHERE LUXURY LIFE REIGNS SUPREME
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {amenities.map((amenity, index) => (
              <PremiumAmenityCard
                key={index}
                title={amenity}
                icon={amenityIcons[amenity] || FaMountain}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Symphony of Luxury Section */}
      <div className="py-10 sm:py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Gallery Column */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 border-2 border-[#d4af37]/30 hidden lg:block"></div>
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <AutoScrollGallery
                  images={[
                    terraceAmenity1,
                    terraceAmenity2,
                    terraceAmenity3,
                    terraceAmenity4,
                    terraceAmenity5,
                    terraceAmenity6,
                    terraceAmenity7,
                  ]}
                  interval={3000}
                />
                <p className="absolute bottom-2 right-2 text-white/70 text-[10px] sm:text-xs bg-black/50 px-2 py-1">
                  *Luxury amenities
                </p>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] text-[#1a2355] leading-tight mb-4 sm:mb-6">
                  A PERFECT SYMPHONY HARMONIZED WITH EXOTICNESS AND LUXURY
                </h2>

                <div className="w-24 sm:w-32 md:w-40 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30 mb-6 sm:mb-8"></div>

                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#1a2355] mb-4 sm:mb-6 tracking-wider">
                  LIST OF AMENITIES
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {amenitiesList.map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] font-medium mr-2 sm:mr-3 group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-300 flex-shrink-0 text-xs sm:text-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-[#1a2355]/80 group-hover:text-[#1a2355] transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nature's Embrace Section */}
      <div className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#f8f2ea] to-[#f5e6d8] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#1a2355] text-white p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#d4af37]/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] mb-4 sm:mb-6 leading-tight">
                  IT'S TIME TO BE SURROUNDED BY THE LUSH EMERALDS OF NATURE
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30 mb-6 sm:mb-8"></div>

                <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed">
                  Experience the perfect blend of nature and luxury in every
                  corner of your new home.
                </p>

                {/* Small decorative image */}
                <div className="mt-8 sm:mt-12">
                  <img
                    src={natureView}
                    alt="Nature view"
                    className="w-full h-32 sm:h-40 md:h-48 object-cover shadow-xl"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/400x300/1a2355/d4af37?text=Nature+View";
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-auto">
              <div className="absolute -top-4 -right-4 left-4 bottom-4 border-2 border-[#d4af37]/30 hidden lg:block"></div>
              <div className="relative z-10 h-full">
                <img
                  src={balcony}
                  alt="Luxury Balcony View"
                  className="w-full h-full object-cover shadow-2xl"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/800x600/f5e6d8/1a2355?text=Luxury+Balcony";
                  }}
                />
                <p className="absolute bottom-2 right-2 text-white/70 text-[10px] sm:text-xs bg-black/50 px-2 py-1">
                  *All furniture and fixtures shown are for representation
                  purpose only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terrace Amenities Section */}
      <div className="py-10 sm:py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Gallery Column */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 border-2 border-[#d4af37]/30 hidden lg:block"></div>
              <div className="relative z-10 overflow-hidden shadow-2xl border border-[#d4af37] sm:border-2">
                <AutoScrollGallery
                  images={[
                    terraceAmenity1,
                    terraceAmenity2,
                    terraceAmenity3,
                    terraceAmenity4,
                    terraceAmenity5,
                    terraceAmenity6,
                    terraceAmenity7,
                  ]}
                  interval={2500}
                />
                <p className="absolute bottom-2 right-2 text-white/70 text-[10px] sm:text-xs bg-black/50 px-2 py-1">
                  *Terrace amenities
                </p>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] text-[#1a2355] leading-tight mb-4 sm:mb-6">
                  ENJOY PANORAMIC VIEWS OF THE CITY FROM THE HIGHEST ROOFTOP
                </h2>
                <div className="w-24 sm:w-32 md:w-40 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30 mb-6 sm:mb-8"></div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#1a2355] mb-4 sm:mb-6 tracking-wider">
                  TERRACE AMENITIES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {terraceAmenities.map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] font-medium mr-2 sm:mr-3 mt-0.5 group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-300 flex-shrink-0 text-xs sm:text-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-[#1a2355]/80 group-hover:text-[#1a2355] transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;