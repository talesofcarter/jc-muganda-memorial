import React, { useState, useEffect, useRef } from "react";
import image1 from "/images/jean-1.jpg";
import image2 from "/images/jean-2.jpg";
import image3 from "/images/jean-3.jpg";
import image4 from "/images/jean-4.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const HeroLeft = () => {
  const slideshow = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Matches Tailwind's lg breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideshow.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slideshow.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return; // Only handle touch on mobile/tablet
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile || touchStartX.current === null || touchEndX.current === null)
      return;

    const deltaX = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;
    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full md:w-1/2 h-[60vh] md:h-screen overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slideshow */}
      <div className="relative w-full h-full">
        {slideshow.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              src={slide}
              alt={`Jean Carol Muganda ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm cursor-pointer"
        aria-label="Previous image"
      >
        <GrFormPrevious className="text-2xl md:text-3xl" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm cursor-pointer"
        aria-label="Next image"
      >
        <MdOutlineNavigateNext className="text-2xl md:text-3xl" />
      </button>

      <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slideshow.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroLeft;
