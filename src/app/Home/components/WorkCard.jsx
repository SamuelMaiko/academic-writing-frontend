import { Button, Divider } from "keep-react";
import React, { useState } from "react";
import { GraduationCap, BookmarkSimple } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import BookmarkToggle from "./BookmarkToggle";

const WorkCard = ({ bookmark = false }) => {
  const navigate = useNavigate();
  const { darkMode } = useStateShareContext();
  const [isBookmarked, setisBookmarked] = useState(bookmark);

  const handleTakeUpWork = (event) => {
    event.stopPropagation();
  };

  const handleBookmarkWork = (event) => {
    event.stopPropagation();
    setisBookmarked((current) => !current);
  };
  return (
    <>
      <div
        onClick={() => navigate("/work/1")}
        className={`relative work-card pl-3 font-opensans py-4 ${
          darkMode ? "dark" : ""
        } hover:bg-[#f1f1f1] transition-colors duration-300 dark:bg-darkMode-cardBg dark:hover:bg-darkMode-cardHover`}
      >
        <p className="text-[11px] text-[#676767] dark:text-darkMode-cardText">
          Posted on Thursday
        </p>
        <p className="category text-[20px] text-[#181818] dark:text-darkMode-cardText font-semibold">
          Essay
        </p>
        <p className="text-[15px] my-2 text-[#676767] dark:text-darkMode-cardText">
          1500 words
        </p>
        <p className=" my-2 text-[#181818] dark:text-darkMode-cardText">
          Due on 21st June 2024
        </p>
        <p className="text-xs font-bold my-2 text-[#181818] dark:text-darkMode-cardText">
          01:23:03 to deadline
        </p>
        <div className="px-2 py-1 w-fit rounded-2xl bg-[#E9E9E9] dark:bg-neutral-500 text-[#676767] dark:text-darkMode-cardText">
          MK345
        </div>
        <Button
          onClick={handleTakeUpWork}
          className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 dark:bg-darkMode-cardButton
           dark:hover:bg-darkMode-cardButtonHover dark:text-darkMode-cardButtonT
            dark:hover:text-darkMode-cardButtonTHov mt-4 "
        >
          <GraduationCap size={20} className="mr-1.5" />
          Take up work
        </Button>
        {/* Bookmark button */}
        <BookmarkToggle
          onClick={handleBookmarkWork}
          isBookmarked={isBookmarked}
          setisBookmarked={setisBookmarked}
        />
        {/* <button
          onClick={handleBookmarkWork}
          className="absolute top-8 right-4 dark:text-white"
        >
          <BookmarkSimple size={25} className=" " />
        </button> */}
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default WorkCard;
