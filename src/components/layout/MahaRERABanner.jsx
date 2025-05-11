// src/components/layout/MahaRERABanner.jsx
import React from "react";
import qrCode from "../../assets/images/qr-code.png";

const MahaRERABanner = () => {
  return (
    <div className="absolute top-[-8pt] right-0 z-20 p-2 sm:p-3 md:p-4 lg:p-5 overflow-hidden">
      <div className="bg-white/30 backdrop-blur-md border border-[#d4af37]/90 shadow-lg rounded-none overflow-hidden p-1 sm:p-2 md:p-4 pr-2 sm:pr-5 md:pr-6 pl-2 sm:pl-5 md:pl-6 transition-all duration-500 hover:bg-white/40 mt-2">
        <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-3 md:gap-5">
          {/* Left: Text Info */}
          <div className="flex flex-col gap-0.5 sm:gap-1 text-center sm:text-left">
            <div className="font-medium text-gray-800 text-[10px] sm:text-xs md:text-sm">
              MahaRERA Registration No:{" "}
              <span className="font-semibold text-[#d4af37]/90 block sm:inline">
                P51899945216
              </span>
            </div>
            <a
              href="https://maharera.mahaonline.gov.in"
              className="text-gray-700 hover:text-[#d4af37] hover:underline text-[9px] sm:text-xs md:text-sm transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit MahaRERA official website"
            >
              https://maharera.mahaonline.gov.in
            </a>
          </div>

          {/* Right: QR Code */}
          <div className="flex flex-col items-center">
            <div className="rounded-none shadow-lg">
              <img
                src={qrCode}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/64?text=QR";
                }}
                alt="MahaRERA QR Code"
                className="h-10 w-8 sm:h-12 sm:w-10 md:h-14 md:w-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Premium corner accents */}
        <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-[#d4af37]"></div>
        <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-[#d4af37]"></div>
      </div>
    </div>
  );
};

export default MahaRERABanner;
