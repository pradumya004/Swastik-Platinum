// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5; // Reduced scroll threshold
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-beige-50" // Reduced shadow
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center py-1 sm:py-1.5">
        {" "}
        {/* Reduced padding */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Swastik Group Logo"
            className="h-8 sm:h-10 object-contain" // Reduced logo size
          />
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop navigation - made more compact */}
        <nav className="hidden md:flex space-x-2 lg:space-x-4 text-xs lg:text-xs font-medium">
          {" "}
          {/* Reduced spacing and font size */}
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            ABOUT US
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            PROJECTS
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            NRI CORNER
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            LOYALTY PROGRAMS
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            CHANNEL PARTNER
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            BLOG
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            CAREERS
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-1">
            CONTACT US
          </a>
        </nav>
        <button className="hidden md:block ml-2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm">
          {" "}
          {/* Reduced shadow */}
          <nav className="flex flex-col py-1 text-xs">
            {" "}
            {/* Reduced padding */}
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              PROJECTS
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              NRI CORNER
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              LOYALTY PROGRAMS
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              CHANNEL PARTNER
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              BLOG
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              CAREERS
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-gray-700 hover:text-gray-900"
            >
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
