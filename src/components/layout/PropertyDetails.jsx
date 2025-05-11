import React from "react";

const PropertyDetails = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-[#1a2355]/95 backdrop-blur-md shadow-xl rounded-none text-white px-2 sm:px-3 py-1 sm:py-1.5 mx-auto border-[#d4af37] font-['Playfair_Display']">
        {/* Left: 2BHK */}
        <div className="text-center flex-1 pr-2 sm:pr-4 border-r border-[#d4af37]/40">
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white mb-0.5 font-serif">
            Residence Type
          </p>
          <p className="text-sm sm:text-xl font-['Playfair_Display'] text-[#d4af37]/90 font-bold tracking-wide">
            2BHK
          </p>
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-[#d4af37]/90 font-serif">
            Balcony Residences
          </p>
        </div>

        {/* Middle: Tower Info */}
        <div className="flex flex-col items-center justify-center flex-1 px-2 sm:px-4 border-r border-[#d4af37]/90">
          <p className="text-[8px] sm:text-xs uppercase text-[#d4af37] tracking-widest text-center mb-0.5 font-serif">
            Experience
          </p>
          <p className="text-[8px] sm:text-xs uppercase text-white/80 tracking-widest text-center leading-tight font-serif">
            Magnificent Tower of
            <span className="text-sm sm:text-lg font-['Playfair_Display'] text-white block">
              22 Storeys
            </span>
          </p>
        </div>

        {/* Right: Price */}
        <div className="text-center flex-1 pl-2 sm:pl-4">
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white mb-0.5 font-serif">
            Starting Price
          </p>
          <p className="text-sm sm:text-xl font-['Playfair_Display'] text-[#d4af37]/90 font-bold tracking-wide">
            ₹2.25 <span className="text-[10px] sm:text-sm text-[#d4af37]/90">Cr+</span>
          </p>
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-white font-serif">
            Onwards
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;