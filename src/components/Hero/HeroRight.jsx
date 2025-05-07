import React from "react";

const HeroRight = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 md:p-12 text-center bg-gray-900 text-white">
      <h3 className="intro-text text-xl md:text-2xl lg:text-3xl font-light animate-fade-in-up">
        In Loving Memory of
      </h3>
      <h1 className="font-serif uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-orange-300 mt-4 animate-fade-in-up">
        Jean-Carol Muganda
      </h1>
      <p className="text-2xl md:text-3xl lg:text-4xl font-light mt-6 animate-fade-in-up">
        "Our brightest soul, our forever chef, our style queen."
      </p>
      <p className="text-lg md:text-xl lg:text-2xl mt-4 animate-fade-in-up">
        ~ Dr. Roselyne Okello
      </p>
    </section>
  );
};

export default HeroRight;
