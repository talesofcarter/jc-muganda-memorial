import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBook, FaHeart, FaImages, FaMonument } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
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
            <Link
              to="obituary"
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="text-white/80 hover:text-white transition cursor-pointer"
            >
              Obituary
            </Link>
            <Link
              to="tributes"
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="text-white/80 hover:text-white transition cursor-pointer"
            >
              Tributes
            </Link>
            <Link
              to="gallery"
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="text-white/80 hover:text-white transition cursor-pointer"
            >
              Gallery
            </Link>
            <Link
              to="memorial"
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="text-white/80 hover:text-white transition cursor-pointer"
            >
              Memory Wall
            </Link>
          </div>

          <button
            className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition"
            aria-label="Toggle menu"
            onClick={toggleSidebar}
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

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900/98 backdrop-blur-xl border-l border-white/20 z-50 transform transition-transform duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex justify-end p-5">
          <button
            className="text-white/90 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close menu"
            onClick={toggleSidebar}
          >
            <FaTimes className="w-7 h-7" />
          </button>
        </div>
        <div className="flex flex-col space-y-3 px-6 pt-4">
          <Link
            to="obituary"
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="flex items-center gap-3 text-white/90 hover:text-orange-300 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaBook className="w-5 h-5" />
            Obituary
          </Link>
          <Link
            to="tributes"
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="flex items-center gap-3 text-white/90 hover:text-orange-300 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaHeart className="w-5 h-5" />
            Tributes
          </Link>
          <Link
            to="gallery"
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="flex items-center gap-3 text-white/90 hover:text-orange-300 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaImages className="w-5 h-5" />
            Gallery
          </Link>
          <Link
            to="memorial"
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="flex items-center gap-3 text-white/90 hover:text-orange-300 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaMonument className="w-5 h-5" />
            Memory Wall
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
