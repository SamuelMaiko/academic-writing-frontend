import React, { useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";

const BookmarkToggle = ({ onClick, isBookmarked }) => {
  const { darkMode } = useStateShareContext();
  return (
    <div onClick={onClick} className="ui-bookmark absolute top-8 right-4 ">
      <input type="checkbox" checked={isBookmarked} onChange={() => {}} />
      <div className="bookmark ">
        {!isBookmarked & darkMode ? (
          <svg viewBox="0 0 32 32" fill="white">
            <g>
              <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" className="">
            <g>
              <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};

export default BookmarkToggle;
