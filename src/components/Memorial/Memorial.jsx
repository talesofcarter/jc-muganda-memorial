import React, { useState } from "react";
import MemorialEntry from "./MemorialEntry.jsx";
import message from "../../assets/message.js";

const Memorial = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = message.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(message.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="memorial"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-screen"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-orange-300 tracking-tight">
          Memorial Wall
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          A place to share messages of love, remembrance, and condolences in
          honor of a cherished life.
        </p>
        <div className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto">
        {currentItems.map((item) => (
          <MemorialEntry key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentPage === index + 1
                ? "bg-orange-300 text-slate-900"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Memorial;
