import React, { useState } from "react";
import MemorialEntry from "./MemorialEntry.jsx";
import message from "../../assets/message.js";
import { DominoContainer } from "../../animations/Animate";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/variants";

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
    <section
      id="memorial"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-svh"
    >
      <div className="text-center mb-12">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4 text-orange-300 tracking-tight"
        >
          Memorial Wall
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          A place to share messages of love, remembrance, and condolences in
          honor of a cherished life.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"
        ></motion.div>
      </div>
      <DominoContainer>
        <div className="max-w-5xl mx-auto">
          {currentItems.map((item) => (
            <MemorialEntry key={item.id} {...item} />
          ))}
        </div>
      </DominoContainer>

      <div className="flex justify-center mt-8 space-x-2">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer
            ${
              currentPage === 1
                ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
        >
          Prev
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
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer
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
  );
};

export default Memorial;
