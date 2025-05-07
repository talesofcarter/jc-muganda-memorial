import React from "react";

const HeroLeft = () => {
  return (
    <section className="relative w-full md:w-1/2 h-[60vh] md:h-screen overflow-hidden">
      <img
        className="transition-transform duration-500 ease-in-out hover:scale-105"
        src="./images/jean-3.jpg"
        alt="Jean Carol Muganda"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default HeroLeft;
