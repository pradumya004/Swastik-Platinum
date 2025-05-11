const Divider = () => (
  <div className="flex items-center justify-center my-4">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent flex-1"></div>
    <div className="mx-3">
      <svg
        className="w-6 h-6 text-[#d4af37] transform rotate-45"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1L14 8L21 10L14 12L12 19L10 12L3 10L10 8L12 1Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent flex-1"></div>
  </div>
);

export default Divider;
