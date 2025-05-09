import React, { useRef, useState, useEffect } from "react";
import SingleTribute from "./SingleTribute.jsx";
import tributes from "../../assets/tributes.js";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/variants";

const TributesMain = () => {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isMobile || touchStartX.current === null || touchEndX.current === null)
      return;

    const deltaX = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX < 0) {
        scrollToNext();
      } else {
        scrollToPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="tributes"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-800 text-slate-100 relative overflow-hidden"
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
          Tributes
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Heartfelt memories from those who loved Jean-Carol
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"
        ></motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {tributes.map((tribute) => (
            <motion.div
              variants={fadeIn("left", `0.${tribute.id}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              key={tribute.id}
              className="snap-start flex-shrink-0 w-80 sm:w-96"
            >
              <SingleTribute {...tribute} />
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-800/70 p-3 rounded-full text-orange-300 hover:bg-slate-700/70 transition-colors cursor-pointer"
          aria-label="Previous tribute"
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          onClick={scrollToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-800/70 p-3 rounded-full text-orange-300 hover:bg-slate-700/70 transition-colors cursor-pointer"
          aria-label="Next tribute"
        >
          <MdOutlineNavigateNext size={24} />
        </button>
      </div>
    </section>
  );
};

export default TributesMain;
