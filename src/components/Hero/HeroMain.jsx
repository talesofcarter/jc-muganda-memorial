import React from "react";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

const HeroMain = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen w-full bg-black">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroMain;
