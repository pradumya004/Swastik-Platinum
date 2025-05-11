// src/components/layout/Footer.jsx
import React from "react";
import logo from "../../assets/images/logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6"; // Or `fa` if using older FontAwesome

const SocialLinks = () => (
  <div className="flex space-x-4">
    <a
      href="#"
      aria-label="Instagram"
      className="text-gray-500 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
    >
      <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
    <a
      href="#"
      aria-label="Facebook"
      className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
    >
      <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
    <a
      href="#"
      aria-label="YouTube"
      className="text-gray-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
    >
      <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
    <a
      href="#"
      aria-label="Twitter/X"
      className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
    >
      <FaXTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
  </div>
);

// Reusable components
const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-[#d4af37] font-['Playfair_Display'] text-lg sm:text-xl mb-4 sm:mb-5">
      {title}
    </h3>
    <ul className="space-y-2 sm:space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-white/80 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // Footer data
  const footerSections = {
    projects: {
      title: "PROJECTS",
      links: [
        { text: "Residential", href: "#" },
        { text: "Commercial", href: "#" },
        { text: "Completed Projects", href: "#" },
        { text: "Swastik Sarvam", href: "#" },
        { text: "Swastik Highscape City", href: "#" },
        { text: "Swastik Treesourus", href: "#" },
        { text: "Platinum", href: "#" },
      ],
    },
    about: {
      title: "ABOUT US",
      links: [
        { text: "Overview", href: "#" },
        { text: "Leadership", href: "#" },
        { text: "CSR", href: "#" },
        { text: "Honors and Awards", href: "#" },
        { text: "Experience With Swastik", href: "#" },
        { text: "Referral", href: "#" },
      ],
    },
    locations: {
      title: "LOCATIONS",
      links: [
        { text: "Chembur East", href: "#" },
        { text: "Andheri East", href: "#" },
        { text: "Andheri West", href: "#" },
        { text: "Vile Parle West", href: "#" },
        { text: "Malad West", href: "#" },
        { text: "Vikhroli East", href: "#" },
        { text: "Goregaon West", href: "#" },
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        { text: "NRI CORNER", href: "#" },
        { text: "CURRENCY CONVERTER", href: "#" },
        { text: "EMI CALCULATOR", href: "#" },
        { text: "SITEMAP", href: "#" },
        { text: "PRIVACY POLICY", href: "#" },
        { text: "TERMS & CONDITIONS", href: "#" },
        { text: "DISCLAIMER", href: "#" },
      ],
    },
    contact: {
      title: "CONTACT US",
      links: [
        { text: "CAREERS", href: "#" },
        { text: "BLOG", href: "#" },
        { text: "NEWSLETTER", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-[#1a2355] text-white py-8 sm:py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo and Company Info */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-white/90 border border-[#d4af37] p-3 sm:p-4 shadow-2xl backdrop-blur-lg rounded-none text-gray-900 overflow-hidden relative inline-flex items-center">
            {/* Gold corner accents */}
            <div className="absolute top-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-[#d4af37]"></div>
            <div className="absolute bottom-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 sm:border-b-3 md:border-b-4 border-l-2 sm:border-l-3 md:border-l-4 border-[#d4af37]"></div>
            <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 sm:border-t-3 md:border-t-4 border-l-2 sm:border-l-3 md:border-l-4 border-[#d4af37]"></div>
            <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 sm:border-b-3 md:border-b-4 border-r-2 sm:border-r-3 md:border-r-4 border-[#d4af37]"></div>

            {/* Logo + Text */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <img
                src={logo}
                alt="Swastik Group Logo"
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 object-contain"
              />
              <div className="mx-3 text-gray-900 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-bold mb-1 uppercase tracking-wide">
                  SWASTIK GROUP
                </h2>
                <p className="text-gray-800 text-xs sm:text-sm md:text-base">
                  BUILDERS & DEVELOPERS
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base italic">
                  A Legacy of Trust
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between mb-12 sm:mb-16 gap-8">
          <FooterSection {...footerSections.projects} />
          <FooterSection {...footerSections.about} />
          <FooterSection {...footerSections.locations} />
          <FooterSection {...footerSections.resources} />

          {/* Contact Column with Social Icons */}
          <div>
            <h3 className="text-[#d4af37] font-['Playfair_Display'] text-lg sm:text-xl mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {footerSections.contact.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d4af37] transition-colors duration-500 text-sm sm:text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white/70 mb-3 sm:mb-4 text-xs sm:text-sm">
              FOLLOW US ON
            </h4>
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-[#d4af37] text-center sm:text-left">
              © 2025 Swastik Group. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Developed by</span>
              <span className="text-[#d4af37] font-['Playfair_Display']">
                PRADUMYA
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
