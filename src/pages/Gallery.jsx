import { useState, useEffect } from "react";
import gallery from "../assets/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations/variants";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 12;
  const maxPaginationDisplay = 4;
  const totalPages = Math.ceil(gallery.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = gallery.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / maxPaginationDisplay) *
      maxPaginationDisplay;
    const group = new Array(Math.min(maxPaginationDisplay, totalPages - start))
      .fill()
      .map((_, idx) => start + idx + 1);
    if (totalPages > maxPaginationDisplay && currentPage < totalPages - 1) {
      return [...group, "..."];
    }
    return group;
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

  if (!gallery.length) {
    return (
      <div className="bg-slate-900 min-h-screen pt-16 flex items-center justify-center">
        <p className="text-slate-200 text-lg font-sans">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen pt-16">
      {/* Header Section */}
      <header className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-300 tracking-tight">
              Gallery
            </h1>
            <div className="w-16 h-1 bg-orange-300 mt-3 mb-4 rounded-full mx-auto"></div>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-7">
              Cherished moments captured in memory of Jean-Carol
            </p>
          </div>

          <nav className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="/memorial"
              className="text-orange-300 hover:text-orange-100 font-medium transition-colors focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Memorial Wall
            </a>
            <a
              href="/tributes"
              className="text-orange-300 hover:text-orange-100 font-medium transition-colors focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Tributes
            </a>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-slate-800/40 p-8 rounded-lg mb-8 shadow-lg border border-slate-700 text-center">
          <h2 className="text-2xl text-orange-300 mb-3">Photo Gallery</h2>
          <p className="text-slate-200 leading-7">
            A collection of cherished memories honoring Jean-Carol.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {currentImages.map((image, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-slate-700 transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1} of Jean-Carol`}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2 flex-wrap">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 min-w-[2.5rem] rounded-md text-sm font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                currentPage === 1
                  ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
              aria-label="Previous page"
            >
              Previous
            </button>

            {getPaginationGroup().map((item, idx) =>
              item === "..." ? (
                <span key={idx} className="px-3 py-1 text-slate-200">
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  onClick={() => handlePageChange(item)}
                  className={`px-3 py-1 min-w-[2.5rem] rounded-md text-sm font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    currentPage === item
                      ? "bg-orange-300 text-slate-900"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                  aria-label={`Page ${item}`}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-3 py-1 min-w-[2.5rem] rounded-md text-sm font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                currentPage === totalPages
                  ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Image Popup */}
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
              className="absolute top-4 right-4 p-2 bg-slate-800/70 text-orange-200 rounded-md hover:bg-slate-700/70 transition-colors focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-black"
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
              className="max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] sm:max-w-[90%] sm:max-h-[90%] object-contain"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              loading="eager"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 text-slate-200 text-center text-sm border-t border-slate-700">
        <p>In Loving Memory of Jean-Carol Muganda.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="/privacy"
            className="text-orange-200 hover:text-orange-100 font-medium transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="text-orange-200 hover:text-orange-100 font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
