import React from "react";
import { DominoItem } from "../../animations/Animate";

const MemorialEntry = ({ person, message, portrait }) => {
  return (
    <DominoItem>
      <div className="flex flex-col md:flex-row items-center bg-slate-800 rounded-lg shadow-lg overflow-hidden m-4 transform transition-transform hover:scale-105">
        <div className="w-full md:w-1/4">
          <img
            src={portrait}
            alt={person}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6 flex-1">
          <blockquote className="text-slate-200 text-lg italic mb-4">
            "{message}"
          </blockquote>
          <p className="text-orange-300 font-semibold text-right">— {person}</p>
        </div>
      </div>
    </DominoItem>
  );
};

export default MemorialEntry;
