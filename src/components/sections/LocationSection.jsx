// src/components/sections/LocationSection.jsx
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTrain,
  FaCar,
  FaHospital,
  FaGraduationCap,
  FaBriefcase,
  FaClock,
  FaShoppingBag,
  FaSubway,
  FaUniversity,
  FaPlane,
} from "react-icons/fa";
import locationMap from "../../assets/images/map.png";
import Divider from "../common/Divider";

const LocationSection = () => {
  const [activeTab, setActiveTab] = useState("accessibility");

  const locationFeatures = [
    {
      icon: <FaCar className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
      title: "Eastern Express Highway",
      description: "Direct connectivity",
    },
    {
      icon: <FaTrain className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
      title: "Vikhroli Station",
      description: "2 minutes away",
    },
    {
      icon: <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
      title: "Powai",
      description: "10 minutes drive",
    },
  ];

  const tabs = [
    {
      id: "accessibility",
      label: "Accessibility",
      icon: <FaCar />,
      content: [
        { icon: <FaSubway />, name: "Vikhroli Metro Station", time: "5 min" },
        { icon: <FaTrain />, name: "Vikhroli Railway Station", time: "3 min" },
        { icon: <FaPlane />, name: "Domestic Airport", time: "25 min" },
      ],
    },
    {
      id: "hospitals",
      label: "Hospitals",
      icon: <FaHospital />,
      content: [
        { icon: <FaHospital />, name: "Fortis Hospital", time: "8 min" },
        { icon: <FaHospital />, name: "Hiranandani Hospital", time: "10 min" },
      ],
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: <FaBriefcase />,
      content: [
        { icon: <FaBriefcase />, name: "Godrej One", time: "3 min" },
        { icon: <FaShoppingBag />, name: "R City Mall", time: "12 min" },
      ],
    },
    {
      id: "education",
      label: "Education",
      icon: <FaGraduationCap />,
      content: [
        { icon: <FaUniversity />, name: "IIT Bombay", time: "15 min" },
        { icon: <FaGraduationCap />, name: "SOMAIYA College", time: "20 min" },
      ],
    },
  ];

  return (
    <section
      id="location"
      className="py-12 sm:py-20 bg-gradient-to-b from-[#f8f2ea] to-[#f5e6d8] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a2355] mb-4">
            PRIME LOCATION
          </h2>

          <Divider />

          <p className="text-lg sm:text-xl text-[#1a2355]/80 tracking-wide">
            WHERE THE WORLD IS AT YOUR FINGERTIPS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#1a2355]/80 text-base sm:text-lg leading-relaxed mb-4">
              Located at Eastern Express Highway Vikhroli, the project offers
              seamless connectivity to key areas. This project truly bridges the
              gap between convenience, views, and luxury living with rapidly
              developing infrastructure, highways, malls, hospitals,
              entertainment avenues, and corporate hubs.
            </p>

            {/* Location Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {locationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center border-l-2 border-[#d4af37] bg-white/50 p-3 sm:p-4"
                >
                  <div className="mr-2">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium text-[#1a2355] text-sm sm:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-[#1a2355]/70 text-xs sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Vertical Tabs System */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
              {/* Left Column - Elegant Vertical Tabs */}
              <div className="flex flex-row overflow-x-auto lg:overflow-visible lg:flex-col gap-1 w-full lg:w-[220px] pb-2 lg:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 text-left transition-all duration-300 border-l-4 flex-shrink-0 lg:flex-shrink lg:w-full ${
                      activeTab === tab.id
                        ? "border-[#d4af37] bg-white text-[#1a2355] shadow-lg"
                        : "border-transparent bg-white/60 text-[#1a2355]/80 hover:bg-white/80"
                    }`}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-full ${
                        activeTab === tab.id
                          ? "bg-[#d4af37] text-white"
                          : "bg-[#1a2355]/10 text-[#1a2355]"
                      }`}
                    >
                      {React.cloneElement(tab.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                    </div>
                    <span className="text-xs sm:text-sm font-medium tracking-wider uppercase whitespace-nowrap">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Middle Column - Luxury Content Panel */}
              <div className="flex-1">
                <div className="bg-white p-4 sm:p-6 h-full shadow-xl border border-[#f0f0f0]">
                  <h3 className="text-lg sm:text-xl font-serif text-[#1a2355] mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#d4af37]/20">
                    {tabs.find((tab) => tab.id === activeTab)?.label} Amenities
                  </h3>

                  <ul className="grid grid-cols-1 gap-4 sm:gap-6">
                    {tabs
                      .find((tab) => tab.id === activeTab)
                      ?.content.map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mr-3 sm:mr-4 text-[#d4af37] transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-white">
                              {React.cloneElement(item.icon, {
                                className: "w-4 h-4 sm:w-5 sm:h-5",
                              })}
                            </div>
                          </div>
                          <div>
                            <p className="text-base sm:text-lg font-medium text-[#1a2355] mb-1">
                              {item.name}
                            </p>
                            <div className="flex items-center text-[#1a2355]/70">
                              <FaClock className="w-3 h-3 mr-2 text-[#d4af37]/80" />
                              <span className="text-xs sm:text-sm">{item.time} away</span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -top-4 -left-4 right-4 bottom-4 border-4 border-[#d4af37]/30 hidden lg:block"></div>
            <div className="relative z-10 bg-white shadow-2xl p-2">
              <img
                src={locationMap}
                alt="Swastik Platinum Location Map"
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
                <a
                  href="https://www.google.com/maps/search/Swastik+Platinum+Vikhroli+Mumbai/@19.1075,72.9263,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1a2355] text-white px-4 sm:px-6 py-2 text-sm sm:text-base font-medium hover:bg-[#d4af37] transition-colors duration-300 shadow-xl"
                >
                  <FaMapMarkerAlt className="inline mr-2" />
                  VIEW ON GOOGLE MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;