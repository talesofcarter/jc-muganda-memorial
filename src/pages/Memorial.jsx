import { useState } from "react";
import { motion } from "framer-motion";
import { DominoContainer } from "../animations/Animate.jsx";
import { fadeIn } from "../animations/variants";
import message from "../assets/message.js";
import MemorialEntry from "../components/MemorialEntry.jsx";

const Memorial = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const maxPaginationDisplay = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = message.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(message.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / maxPaginationDisplay) *
      maxPaginationDisplay;
    return new Array(Math.min(maxPaginationDisplay, totalPages - start))
      .fill()
      .map((_, idx) => start + idx + 1);
  };

  return (
    <div className="bg-slate-900 pt-16 min-h-screen pt-navbar">
      <header className="pt-16 pb-12 px-4 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-3 md:text-left md:flex md:items-center md:justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-300 tracking-tight">
                Memorial Wall
              </h1>
              <div className="w-16 h-1 bg-orange-300 mt-3 mb-4 rounded-full md:mb-0 mx-auto md:mx-0"></div>
            </div>
            <p className="text-base text-center md:text-lg text-slate-300 max-w-xl mt-4 md:mt-0">
              A place to share messages of love, remembrance, and condolences
            </p>
          </div>
        </div>
      </header>

      {/* Content Section - Adjusted spacing for improved page flow */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <DominoContainer>
          <div className="max-w-5xl mx-auto">
            {currentItems.map((item) => (
              <MemorialEntry key={item.id} {...item} />
            ))}
          </div>
        </DominoContainer>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12 space-x-2">
          {/* Previous button */}
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer
              ${
                currentPage === 1
                  ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
          >
            Previous
          </button>

          {getPaginationGroup().map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                currentPage === number
                  ? "bg-orange-300 text-slate-900"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {number}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer
              ${
                currentPage === totalPages
                  ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
          >
            Next
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-800 text-slate-400 text-center text-sm">
        <p>In Loving Memory of Jean-Carol Muganda.</p>
      </footer>
    </div>
  );
};

export default Memorial;
