import React, { useState } from "react";
import { DominoItem } from "../../animations/Animate";

const MemorialEntry = ({ person, message, portrait }) => {
  const [expanded, setExpanded] = useState(false);
  const characterLimit = 400;

  const isLongMessage = message.length > characterLimit;

  // Message to display based on expanded state
  const displayMessage =
    expanded || !isLongMessage ? message : message.substring(0, characterLimit);

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
          <blockquote className="text-slate-200 text-base italic mb-4">
            "{displayMessage}
            {isLongMessage && !expanded && "..."}"
          </blockquote>

          {isLongMessage && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-orange-300 hover:text-orange-400 mb-4 font-medium text-sm focus:outline-none transition-colors cursor-pointer"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}

          <p className="text-orange-300 font-semibold text-right">— {person}</p>
        </div>
      </div>
    </DominoItem>
  );
};

export default MemorialEntry;
