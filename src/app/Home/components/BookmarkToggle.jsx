import React, { useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const BookmarkToggle = ({ onClick, isBookmarked, setisBookmarked, id }) => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(false);

  const handleBookmarkWork = async (e) => {
    e.stopPropagation();

    setLoading(true);
    try {
      if (!isBookmarked) {
        const response = await instance.post(`/bookmarks/add/${id}/`);
        toast.success("Work added to bookmarks.");
      } else {
        const response = await instance.delete(`/bookmarks/remove/${id}/`);
        // toast.success("Work removed from bookmarks.");
      }
      setisBookmarked((current) => !current);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400:
            toast.error(message);
            break;
          case 404:
            toast.error(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            console.log(`Error: ${message}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handleBookmarkWork}
      className="ui-bookmark absolute top-8 right-4 "
      disabled={loading}
    >
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
    </button>
  );
};

export default BookmarkToggle;
