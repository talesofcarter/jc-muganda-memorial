import HeroRight from "../components/HeroRight";
import HeroLeft from "../components/HeroLeft";

const HeroMain = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen w-full bg-black">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroMain;
