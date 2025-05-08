import React, { useState, useRef, useEffect } from "react";

const HeroRight = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Auto-play failed:", error);
            setIsPlaying(false);
          });
      }
    };

    attemptPlay();
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

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
      <div className="flex flex-col text-left mt-6 gap-2 text-base">
        <p>Sunrise: Sunday, June 3, 1979</p>
        <p>Sunset: Sunday, May 4, 2025</p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-sm md:text-base">
          Now playing: "It Is Well With My Soul" by Audrey Assad
        </p>
        <button
          onClick={toggleAudio}
          className="px-4 py-2 bg-orange-300 text-gray-900 rounded-md hover:bg-orange-400 transition-colors text-sm md:text-base cursor-pointer"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <audio
          ref={audioRef}
          src="/audio/it-is-well-with-my-soul.mp3"
          autoPlay
          loop
        />
      </div>
    </section>
  );
};

export default HeroRight;
