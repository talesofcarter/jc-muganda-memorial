import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-white/10 py-2 shadow-lg"
          : "bg-gray-900/80 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-xl font-bold text-white flex items-center gap-2">
          Jean-Carol Muganda
        </div>

        <div className="hidden md:flex space-x-6">
          <a
            href="#obituary"
            className="text-white/80 hover:text-white transition"
          >
            Obituary
          </a>

          <a
            href="#tributes"
            className="text-white/80 hover:text-white transition"
          >
            Tributes
          </a>

          <a
            href="#gallery"
            className="text-white/80 hover:text-white transition"
          >
            Gallery
          </a>

          <a
            href="#memory"
            className="text-white/80 hover:text-white transition"
          >
            Memory Wall
          </a>

          <a
            href="#timeline"
            className="text-white/80 hover:text-white transition"
          >
            Timeline
          </a>
        </div>

        <button
          className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
