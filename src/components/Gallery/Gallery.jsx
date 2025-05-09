import React, { useState, useEffect } from "react";
import gallery from "../../assets/gallery";

const Gallery = () => {
  const [currentSection, setCurrentSection] = useState("initial");
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesPerSection = 12;
  const totalSections = Math.ceil(
    (gallery.length - imagesPerSection) / imagesPerSection
  );

  const getCurrentImages = () => {
    if (currentSection === "initial") {
      return gallery.slice(0, imagesPerSection);
    }
    const sectionIndex = parseInt(currentSection.replace("section", ""));
    const start = imagesPerSection + (sectionIndex - 1) * imagesPerSection;
    return gallery.slice(start, start + imagesPerSection);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

  // Handle background click to close popup
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("popup-background")) {
      setSelectedImage(null);
    }
  };

  const handlePaginationClick = (section) => {
    setCurrentSection(section);
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      const offset = -80;
      const topPosition =
        gallerySection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="gallery"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-800 text-slate-100"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-orange-300 tracking-tight">
          Gallery
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Cherished moments captured in memory of Jean-Carol
        </p>
        <div className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Uniform Grid Gallery */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getCurrentImages().map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Memory ${index + 1} of Jean-Carol`}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Section Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button
            onClick={() => handlePaginationClick("initial")}
            className={`
              px-4 py-2 rounded-md font-semibold text-sm md:text-base cursor-pointer
              ${
                currentSection === "initial"
                  ? "bg-orange-300 text-gray-900"
                  : "bg-slate-700/50 text-orange-300 hover:bg-orange-300/20"
              }
              transition-colors duration-200
            `}
            aria-label="Show first 12 images"
          >
            1
          </button>
          {Array.from({ length: totalSections }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePaginationClick(`section${i + 1}`)}
              className={`
                px-4 py-2 rounded-md font-semibold text-sm md:text-base cursor-pointer
                ${
                  currentSection === `section${i + 1}`
                    ? "bg-orange-300 text-gray-900"
                    : "bg-slate-700/50 text-orange-300 hover:bg-orange-300/20"
                }
                transition-colors duration-200
              `}
              aria-label={`Show section ${i + 2} images`}
            >
              {i + 2}
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in popup-background"
          onClick={handleBackgroundClick}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-slate-800/70 text-orange-300 rounded-full hover:bg-slate-700/70 transition-colors sm:p-2"
            aria-label="Close image popup"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Full-screen memory of Jean-Carol"
            className="max-w-[calc(100%-1rem)] max-h-[calc(100%-1rem)] sm:max-w-[90%] sm:max-h-[90%] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            loading="eager"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
