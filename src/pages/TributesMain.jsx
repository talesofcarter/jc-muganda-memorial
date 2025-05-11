import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";
import tributes from "../assets/tributes.js";
import SingleTribute from "../components/SingleTribute";

const TributesMain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const maxPaginationDisplay = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tributes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tributes.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / maxPaginationDisplay) *
      maxPaginationDisplay;
    const group = new Array(Math.min(maxPaginationDisplay, totalPages - start))
      .fill()
      .map((_, idx) => start + idx + 1);
    if (totalPages > maxPaginationDisplay && currentPage < totalPages - 1) {
      return [...group, "..."];
    }
    return group;
  };

  if (!tributes.length) {
    return (
      <div className="bg-slate-900 min-h-screen pt-16 flex items-center justify-center">
        <p className="text-slate-200 text-lg font-sans">Loading tributes...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen pt-16">
      {/* Header Section */}
      <header className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-300 tracking-tight">
              Tributes
            </h1>
            <div className="w-16 h-1 bg-orange-300 mt-3 mb-4 rounded-full mx-auto"></div>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-7">
              Heartfelt memories from those who loved Jean-Carol
            </p>
          </div>

          <nav className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="/memorial"
              className="text-orange-300 hover:text-orange-100 font-medium transition-colors focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Memorial Wall
            </a>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((tribute) => (
            <div key={tribute.id}>
              <SingleTribute {...tribute} />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 min-w-[2.5rem] rounded-md text-sm font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                currentPage === 1
                  ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
              aria-label="Previous page"
            >
              Previous
            </button>

            {getPaginationGroup().map((item, idx) =>
              item === "..." ? (
                <span key={idx} className="px-3 py-1 text-slate-200">
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  onClick={() => handlePageChange(item)}
                  className={`px-3 py-1 min-w-[2.5rem] rounded-md text-sm font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    currentPage === item
                      ? "bg-orange-200 text-slate-900"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                  aria-label={`Page ${item}`}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-3 py-1 min-w-[2.5rem] rounded-md text-sm font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                currentPage === totalPages
                  ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 text-slate-200 text-center text-sm border-t border-slate-700">
        <p>Remember Jean-Carol with love and respect.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="/privacy"
            className="text-orange-200 hover:text-orange-100 font-medium transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="text-orange-200 hover:text-orange-100 font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default TributesMain;
