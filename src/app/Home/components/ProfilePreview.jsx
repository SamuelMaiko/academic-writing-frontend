import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import Vini from "../../../assets/Default_pfp.jpg";
import { useNavigate } from "react-router-dom";

const ProfilePreview = () => {
  const { shrinkSideBar, imageURL } = useStateShareContext();
  const navigate = useNavigate();
  return (
    <div
      className={`${
        shrinkSideBar ? "hidden" : ""
      } flex flex-col items-center mt-10 `}
    >
      <div className={`size-[7rem] rounded-full overflow-hidden`}>
        <img
          src={imageURL == "" ? Vini : imageURL}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <p className={`font-extrabold text-[1.5rem] mt-4`}>Samuel Maiko</p>
      <p className={`font-semibold text-[16px]`}>Techwave Writer</p>
      <button
        onClick={() => navigate("/profile")}
        className="text-sm text-blue-500 bg-gray-200 hover:bg-gray-300 dark:bg-white
         dark:hover:bg-gray-200 py-1 px-3 rounded-2xl mt-1 font-medium transition-colors duration-300"
      >
        View profile
      </button>
    </div>
  );
};

export default ProfilePreview;
