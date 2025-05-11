import React, { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-6 sm:bottom-8 sm:right-8 z-50">
      <div className="relative">
        {/* Hover text */}
        <div
          className={`absolute bottom-full right-0 mb-3 whitespace-nowrap transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-[#1a2355] text-[#d4af37] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-xl text-xs sm:text-sm font-['Playfair_Display'] tracking-wider">
            Chat With Our Experts
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-6 sm:border-l-8 border-l-transparent border-r-6 sm:border-r-8 border-r-transparent border-t-6 sm:border-t-8 border-t-[#1a2355]"></div>
            </div>
          </div>
        </div>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/919833108888`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Luxury background with animations */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2355] to-[#0f1633] rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-300" />

          {/* Gold accent ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-all duration-300" />

          {/* Inner glow effect */}
          <div className="absolute inset-2 rounded-full bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 transition-all duration-300" />

          {/* WhatsApp icon */}
          <div className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-7 sm:h-7 fill-[#d4af37] group-hover:fill-[#e8c866] transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 animate-ping" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
