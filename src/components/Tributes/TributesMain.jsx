import React, { useRef } from "react";
import SingleTribute from "./SingleTribute.jsx";
import tributes from "../../assets/tributes.js";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const TributesMain = () => {
  const carouselRef = useRef(null);

  const scrollToNext = () => {
    if (carouselRef.current) {
      const cardWidth = 384;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollToPrevious = () => {
    if (carouselRef.current) {
      const cardWidth = 384;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-800 text-slate-100 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-orange-300 tracking-tight">
          Tributes
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Heartfelt memories from those who loved Jean-Carol
        </p>
        <div className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4"
        >
          {tributes.map((tribute) => (
            <div
              key={tribute.id}
              className="snap-start flex-shrink-0 w-80 sm:w-96"
            >
              <SingleTribute {...tribute} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-800/70 p-3 rounded-full text-orange-300 hover:bg-slate-700/70 transition-colors"
          aria-label="Previous tribute"
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          onClick={scrollToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-800/70 p-3 rounded-full text-orange-300 hover:bg-slate-700/70 transition-colors"
          aria-label="Next tribute"
        >
          <MdOutlineNavigateNext size={24} />
        </button>
      </div>
    </section>
  );
};

export default TributesMain;
