import React from "react";

const SingleTribute = ({ portrait, message, person }) => {
  return (
    <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-700/30 transition-all  h-full flex flex-col">
      {/* Portrait */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-700/50 flex items-center justify-center overflow-hidden">
        {portrait ? (
          <img
            src={portrait}
            alt={`${person}'s portrait`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-slate-400 text-xs italic text-center">
            Portrait
          </span>
        )}
      </div>

      {/* Tribute Content */}
      <div className="flex-grow text-center">
        <blockquote className="text-base md:text-lg text-slate-200 mb-4">
          {message ? (
            `"${message}"`
          ) : (
            <span className="text-slate-400">No message provided</span>
          )}
        </blockquote>
        <p className="text-sm md:text-base font-semibold text-orange-300">
          — {person}
        </p>
      </div>
    </div>
  );
};

export default SingleTribute;
