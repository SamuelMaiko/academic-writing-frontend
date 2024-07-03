import React from "react";
import { Pencil } from "phosphor-react";
import { useStateShareContext } from "../../../Context/StateContext";
import Vini from "../../../assets/Vinijr.jpeg";

const UserInfo = () => {
  const { setShowEditInfoModal } = useStateShareContext();
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-[11rem] flex items-center  
    shadow-[2px_2px_13px_rgba(0,0,0,0.3)] dark:shadow-gray-600 bg-white w-[95%] rounded-[1rem]
     dark:bg-darkMode-cardBg dark:text-darkMode-text
    "
    >
      <div className="flex flex-col pl-7 py-7">
        {/* edit icon */}
        <button
          onClick={() => setShowEditInfoModal(true)}
          className="absolute top-4 right-4 bg-neutral-100 dark:bg-transparent dark:hover:bg-gray-600 hover:bg-neutral-200 p-2 rounded-full"
        >
          <Pencil size={27} />
        </button>
        <div className="size-[4.5rem] bg-neutral-300 overflow-hidden rounded-lg">
          <img
            src={Vini}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="">
          <p className="font-bold text-lg">Samuel Maiko</p>
          <p className="font-semibold text-sm text-yellow-600 dark:text-yellow-400">
            Writer
          </p>
          <p className="font-medium text-sm text-neutral-500 dark:text-darkMode-gray">
            Reg. WR644
          </p>
          <p className=" text-neutral-500 dark:text-darkMode-gray text-sm mt-2">
            Nairobi &#xB7;{" "}
            <span className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer">
              <a href="#contact">Contant info</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
