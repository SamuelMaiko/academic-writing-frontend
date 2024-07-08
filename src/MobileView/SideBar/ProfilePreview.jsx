import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import Vini from "../../assets/Vinijr.jpeg";

const ProfilePreview = () => {
  const { setShowMobileSideBar } = useStateShareContext();

  return (
    <div className={` flex flex-col items-center mt-10 `}>
      <div className={`size-[7rem] rounded-full overflow-hidden`}>
        <img src={Vini} alt="" />
      </div>
      <p className={`font-extrabold text-[1.5rem] mt-4`}>Samuel Maiko</p>
      <p className={`font-semibold text-[16px]`}>Techwave Writer</p>
      <button
        onClick={() => {
          setShowMobileSideBar(false);
          // navigate("/profile");
        }}
        className="text-sm text-blue-500 bg-gray-200 hover:bg-gray-300 dark:bg-white
   dark:hover:bg-gray-200 py-1 px-3 rounded-2xl mt-1 font-medium transition-colors duration-300"
      >
        View profile
      </button>
    </div>
  );
};

export default ProfilePreview;
