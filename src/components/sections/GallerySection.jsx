import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";
import Divider from "../common/Divider";
import images from "../common/galleryImages";

// Import actual video files
import walkthroughVideo from "../../assets/images/videos/video-thumb-1.mp4";
import amenitiesVideo from "../../assets/images/videos/video-thumb-2.mp4";

const Thumbnail = ({
  galleryData,
  activeCategory,
  selectedImage,
  setSelectedImage,
  prevImage,
  nextImage,
  scrollRef,
}) => {
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
    // Scroll thumbnail into view
    const thumbnails = scrollRef.current;
    const thumbnail = thumbnails.children[index];
    thumbnail.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex items-center">
        {/* Left scroll button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevImage();
            // Scroll to the new selected thumbnail
            setTimeout(() => {
              const thumbnails = scrollRef.current;
              const selectedThumb = thumbnails.querySelector(".scale-105");
              selectedThumb?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }, 100);
          }}
          className="bg-black/40 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full shadow-md transition-all backdrop-blur-sm mr-1 sm:mr-2 z-10"
        >
          <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        {/* Scrollable thumbnails */}
        <div
          ref={scrollRef}
          className="flex-1 flex gap-2 sm:gap-4 overflow-x-auto pb-2 items-center snap-x snap-mandatory justify-center hide-scrollbar"
        >
          {galleryData[activeCategory].images.map((image, index) => (
            <div
              key={image.id}
              className={`flex-shrink-0 cursor-pointer transition-transform duration-300 relative snap-center ${
                selectedImage === index
                  ? "scale-105"
                  : "scale-100 opacity-80 hover:opacity-100 hover:scale-105"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="w-24 h-20 sm:w-36 sm:h-28 rounded-md overflow-hidden shadow-lg relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/192x128/1a2355/d4af37?text=${
                      index + 1
                    }`;
                  }}
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 border-2 border-[#d4af37] rounded-md pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextImage();
            // Scroll to the new selected thumbnail
            setTimeout(() => {
              const thumbnails = scrollRef.current;
              const selectedThumb = thumbnails.querySelector(".scale-105");
              selectedThumb?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }, 100);
          }}
          className="bg-black/40 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full shadow-md transition-all backdrop-blur-sm ml-1 sm:ml-2 z-10"
        >
          <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

const GallerySection = () => {
  // Add global styles to hide scrollbar
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [activeTab, setActiveTab] = useState("photos");
  const [activeCategory, setActiveCategory] = useState("external");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const galleryData = useMemo(
    () => ({
      external: {
        title: "Architectural Marvel",
        subtitle: "WHERE ELEGANCE MEETS INNOVATION",
        images: [
          {
            id: 1,
            src: images.external.entrance,
            alt: "Grand Entrance",
            caption: "Majestic Entrance",
          },
          {
            id: 2,
            src: images.external.building1,
            alt: "Drone View",
            caption: "Aerial Excellence",
          },
          {
            id: 3,
            src: images.external.building2,
            alt: "Windows",
            caption: "Panoramic Views",
          },
          {
            id: 4,
            src: images.external.building3,
            alt: "Random View",
            caption: "Architectural Brilliance",
          },
          {
            id: 5,
            src: images.external.building4,
            alt: "Landscape Design",
            caption: "Garden Paradise",
          },
        ],
      },
      internal: {
        title: "Exquisite Interiors",
        subtitle: "LUXURY REDEFINED IN EVERY DETAIL",
        images: [
          {
            id: 6,
            src: images.internal.interior1,
            alt: "Living Room - Side View",
            caption: "Elegant Living Spaces",
          },
          {
            id: 7,
            src: images.internal.interior2,
            alt: "Living Room - Side View",
            caption: "Comfort Meets Style",
          },
          {
            id: 8,
            src: images.internal.interior4,
            alt: "Kitchen Space",
            caption: "Gourmet Kitchen",
          },
          {
            id: 9,
            src: images.internal.interior3,
            alt: "Living Room - Wide View",
            caption: "Spacious Interiors",
          },
          {
            id: 10,
            src: images.internal.interior5,
            alt: "Bedroom",
            caption: "Serene Bedrooms",
          },
        ],
      },
      amenities: {
        title: "Premium Amenities",
        subtitle: "YOUR OASIS OF RECREATION",
        images: [
          {
            id: 11,
            src: images.amenities.photo3,
            alt: "Swimming Pool",
            caption: "Infinity Pool",
          },
          {
            id: 12,
            src: images.amenities.photo4,
            alt: "Sitting Area",
            caption: "Leisure Lounge",
          },
          {
            id: 13,
            src: images.amenities.photo5,
            alt: "Sitting Area",
            caption: "Community Space",
          },
          {
            id: 14,
            src: images.amenities.photo1,
            alt: "Kids Play Area",
            caption: "Children's Paradise",
          },
          {
            id: 15,
            src: images.amenities.photo2,
            alt: "Yoga Area",
            caption: "Wellness Zone",
          },
          {
            id: 16,
            src: images.amenities.photo6,
            alt: "Play Area",
            caption: "Recreation Area",
          },
          {
            id: 17,
            src: images.amenities.photo7,
            alt: "Exercise Area",
            caption: "Fitness Center",
          },
        ],
      },
      lifestyle: {
        title: "Lifestyle & Family",
        subtitle: "WHERE MEMORIES ARE MADE",
        images: [
          {
            id: 18,
            src: images.lifestyle.family1,
            alt: "Leisure Time",
            caption: "Quality Time",
          },
          {
            id: 19,
            src: images.lifestyle.family2,
            alt: "A Happy Family",
            caption: "Family Moments",
          },
          {
            id: 20,
            src: images.lifestyle.family3,
            alt: "Outdoor Activities",
            caption: "Active Living",
          },
          {
            id: 21,
            src: images.lifestyle.family4,
            alt: "Self Care",
            caption: "Personal Wellness",
          },
          {
            id: 22,
            src: images.lifestyle.family5,
            alt: "Kids Zone",
            caption: "Children's Haven",
          },
        ],
      },
    }),
    []
  );

  const videos = [
    {
      id: 1,
      src: walkthroughVideo,
      thumb: images.videos.thumb1,
      title: "Project Walkthrough",
      subtitle: "EXPERIENCE THE GRANDEUR",
    },
    {
      id: 2,
      src: amenitiesVideo,
      thumb: images.videos.thumb2,
      title: "Amenities Tour",
      subtitle: "LUXURY AT EVERY STEP",
    },
  ];

  const nextImage = useCallback(() => {
    const totalImages = galleryData[activeCategory].images.length;
    setSelectedImage((prev) => (prev + 1) % totalImages);
  }, [activeCategory, galleryData]);

  const prevImage = useCallback(() => {
    const totalImages = galleryData[activeCategory].images.length;
    setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);
  }, [activeCategory, galleryData]);

  // Auto scroll effect
  useEffect(() => {
    if (autoScroll && !isModalOpen) {
      autoScrollIntervalRef.current = setInterval(nextImage, 5000);
    }
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [autoScroll, isModalOpen, nextImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isModalOpen) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") setIsModalOpen(false);
      }
      if (isVideoModalOpen && e.key === "Escape") {
        setIsVideoModalOpen(false);
        setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, isVideoModalOpen, prevImage, nextImage]);

  const openModal = useCallback((index) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    setAutoScroll(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setAutoScroll(true);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setSelectedImage(0);
  }, []);

  const currentImage = galleryData[activeCategory].images[selectedImage];

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#1a2355] to-[#0f1630] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-white mb-4">
            GALLERY
          </h2>
          <Divider />
          <p className="text-base sm:text-lg md:text-xl text-white/80 tracking-wide uppercase">
            Where You Rediscover Life
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex bg-white/10 backdrop-blur-sm p-1.5 gap-2 rounded-sm shadow-lg">
            {["photos", "videos"].map((tab) => (
              <button
                key={tab}
                className={`px-6 sm:px-8 lg:px-10 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium rounded-xs transition-all duration-500 ${
                  activeTab === tab
                    ? "bg-[#1a2355] text-white shadow-inner"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "photos" ? (
          <div>
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-sm shadow-inner">
                {Object.keys(galleryData).map((category) => (
                  <button
                    key={category}
                    className={`relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-xs transition-all duration-500 ease-in-out capitalize ${
                      activeCategory === category
                        ? "bg-white/30 text-[#d4af37] shadow-lg border-2 border-[#d4af37]/60 scale-105"
                        : "text-white/80 border-none hover:text-white hover:bg-white/10 hover:border hover:border-[#d4af37]/60 hover:shadow-lg hover:scale-105"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl font-['Playfair_Display'] text-white mb-2">
                  {galleryData[activeCategory].title}
                </h3>
                <p className="text-white/70 text-base sm:text-lg">
                  {galleryData[activeCategory].subtitle}
                </p>
              </div>

              <div className="relative max-w-7xl mx-auto mb-8 sm:mb-12">
                <div
                  className="aspect-video overflow-hidden shadow-2xl cursor-pointer group"
                  onClick={() => openModal(selectedImage)}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/1600x1000/1a2355/d4af37?text=${currentImage.alt}`;
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-['Playfair_Display'] text-white mb-1 sm:mb-2">
                      {currentImage.caption}
                    </h4>
                    <p className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase">
                      {selectedImage + 1} of{" "}
                      {galleryData[activeCategory].images.length}
                    </p>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-[#d4af37]/50"
                >
                  <FaChevronLeft size={20} className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-[#d4af37]/50"
                >
                  <FaChevronRight size={20} className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white px-3 sm:px-4 py-1 sm:py-2 backdrop-blur-sm text-xs sm:text-sm uppercase tracking-wider">
                  {autoScroll ? "Auto Play" : "Manual"}
                </div>
              </div>

              <Thumbnail
                galleryData={galleryData}
                activeCategory={activeCategory}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                prevImage={prevImage}
                nextImage={nextImage}
                scrollRef={scrollRef}
              />
            </div>

            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm p-8 sm:p-12 border border-white/10 font-['Playfair_Display'] tracking-wide">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                At Swastik Platinum, discover a lifestyle of
                <span className="text-[#d4af37] font-semibold">
                  {" "}
                  unparalleled luxury{" "}
                </span>
                and sophistication. This is where dreams are lived and memories
                are created, making your every moment truly priceless. With
                naturally themed podium gardens & world-class amenities, this
                elegantly designed integrated township makes
                <span className="text-[#d4af37] font-semibold">
                  {" "}
                  luxury living{" "}
                </span>
                your everyday reality.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative group cursor-pointer overflow-hidden shadow-2xl"
                  onClick={() => {
                    setSelectedVideo(video);
                    setIsVideoModalOpen(true);
                  }}
                >
                  <div className="aspect-video relative">
                    {video.thumb ? (
                      <img
                        src={video.thumb}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/800x450/1a2355/d4af37?text=${video.title}`;
                        }}
                      />
                    ) : (
                      // If no thumbnail, show a video preview
                      <video
                        src={video.src}
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="bg-[#d4af37] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <FaPlay className="text-white ml-1" size={16} />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg sm:text-xl font-['Playfair_Display']">
                      {video.title}
                    </h3>
                    <p className="text-[#d4af37] text-xs sm:text-sm tracking-wider uppercase">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => {
              setIsVideoModalOpen(false);
              setSelectedVideo(null);
            }}
            className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white hover:text-[#d4af37] transition-colors duration-300 z-50"
          >
            <FaTimes size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="relative w-full max-w-6xl">
            <div className="aspect-video bg-black">
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center mt-4">
              <h4 className="text-xl sm:text-2xl font-['Playfair_Display'] text-white mb-2">
                {selectedVideo.title}
              </h4>
              <p className="text-[#d4af37] text-xs sm:text-sm tracking-wider uppercase">
                {selectedVideo.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white hover:text-[#d4af37] transition-colors duration-300 z-50"
          >
            <FaTimes size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src = `https://placehold.co/1920x1080/1a2355/d4af37?text=${currentImage.alt}`;
              }}
            />

            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 transition-all duration-300"
            >
              <FaChevronLeft size={20} className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 transition-all duration-300"
            >
              <FaChevronRight size={20} className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-['Playfair_Display'] text-white mb-1 sm:mb-2 text-center">
                {currentImage.caption}
              </h4>
              <p className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase text-center">
                {selectedImage + 1} of{" "}
                {galleryData[activeCategory].images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
