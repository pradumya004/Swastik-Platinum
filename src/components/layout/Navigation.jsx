import React, { useState, useRef } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const navigationRef = useRef(null);

  const navItems = [
    { id: "overview", label: "OVERVIEW" },
    { id: "location", label: "LOCATION" },
    { id: "configurations", label: "CONFIGURATIONS" },
    { id: "amenities", label: "AMENITIES" },
    { id: "gallery", label: "GALLERY" },
    { id: "siteProgress", label: "SITE PROGRESS" },
    { id: "contact", label: "CONTACT US" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the fixed elements' heights dynamically
      const headerHeight = 48; // top-12 = 3rem = 48px
      const navigationHeight = navigationRef.current
        ? navigationRef.current.offsetHeight
        : 56;
      const totalOffset = headerHeight + navigationHeight; // Added 20px extra padding

      // Calculate the position to scroll to
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - totalOffset;

      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={navigationRef}
        className="bg-[#f5e6d8] border-t border-b border-gray-300 sticky top-10 sm:top-12 z-40"
      >
        <div className="container px-3 sm:px-4 mx-auto overflow-x-auto">
          <div className="flex justify-start sm:justify-between space-x-2 sm:space-x-4 py-1 min-w-max">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#c8a97e] border-b-2 border-[#c8a97e]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
