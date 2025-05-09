import React, { useState, useEffect } from "react";
import gallery from "../../assets/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../animations/variants";

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="gallery"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-800 text-slate-100"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4 text-orange-300 tracking-tight"
        >
          Gallery
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Cherished moments captured in memory of Jean-Carol
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"
        ></motion.div>
      </div>

      {/* Uniform Grid Gallery */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {getCurrentImages().map((image, index) => (
              <motion.div
                key={`${currentSection}-${index}`} // Unique key for each image per section
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index} // Pass index for staggered animation
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1} of Jean-Carol`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 popup-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
            <motion.img
              src={selectedImage}
              alt="Full-screen memory of Jean-Carol"
              className="max-w-[calc(100%-1rem)] max-h-[calc(100%-1rem)] sm:max-w-[90%] sm:max-h-[90%] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              loading="eager"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
