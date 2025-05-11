import { useState } from "react";
import { DominoItem } from "../animations/Animate";

const MemorialEntry = ({
  person,
  message,
  title = "In Loving Memory",
  portrait,
}) => {
  const [expanded, setExpanded] = useState(false);
  const characterLimit = 400;

  const isLongMessage = message.length > characterLimit;
  const displayMessage =
    expanded || !isLongMessage ? message : message.substring(0, characterLimit);

  return (
    <DominoItem>
      <div className="flex flex-col bg-slate-800 rounded-lg shadow-lg overflow-hidden my-8 transform transition-transform hover:scale-101 border border-slate-700">
        {/* Title Section */}
        <div className="p-4 border-b border-slate-600">
          <h2 className="text-xl text-center md:text-2xl font-semibold text-orange-300">
            {title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Portrait Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 md:border-r border-slate-700">
            {portrait ? (
              <div className="relative pt-4 px-4 pb-2">
                <div className="rounded-lg overflow-hidden shadow-lg border-2 border-slate-700">
                  <img
                    src={portrait}
                    alt={`${person}'s portrait`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-slate-700 mx-4 my-4 rounded-lg">
                <div className="text-center p-4">
                  <svg
                    className="w-16 h-16 mx-auto text-slate-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="mt-2 text-slate-400">
                    No portrait available for {person}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Message Section */}
          <div className="p-6 flex-1">
            <div className="bg-slate-750 rounded-lg p-5 shadow-inner">
              <blockquote className="text-slate-200 text-base mb-4 border-l-4 border-orange-300 pl-4">
                <div className="first-letter:text-4xl first-letter:font-bold first-letter:text-orange-300 first-letter:mr-1 first-letter:float-left leading-relaxed">
                  {displayMessage}
                  {isLongMessage && !expanded && "..."}
                </div>
              </blockquote>

              {isLongMessage && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-orange-300 hover:text-orange-400 mb-2 font-medium text-sm focus:outline-none transition-colors cursor-pointer"
                >
                  {expanded ? "Show Less" : "Read More"}
                </button>
              )}

              <div className="flex justify-end mt-4">
                <div className="inline-block border-t border-slate-600 pt-2">
                  <p className="text-orange-300 font-semibold">— {person}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DominoItem>
  );
};

export default MemorialEntry;
