import React from "react";
import { X } from "phosphor-react";
import EditBasicInfo from "./EditBasicInfo";
import EditLocation from "./EditLocation";
import EditContactInfo from "./EditContactInfo";
import { useStateShareContext } from "../../../Context/StateContext";

const EditInfoForm = () => {
  const { setShowEditInfoModal } = useStateShareContext();
  return (
    <div
      className="absolute w-full md:w-[60%] h-[34rem] rounded-lg  px-2 left-[50%]
     translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
      dark:text-darkMode-text     
     "
    >
      {/* header */}
      <div className="flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-xl font-semibold">Edit info</p>
        {/* close button */}
        <button
          onClick={() => setShowEditInfoModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button>
      </div>
      {/* central body */}
      <form className="h-[26rem] px-8 overflow-y-scroll">
        <p className="text-neutral-500 dark:text-darkMode-gray text-sm mt-4 mb-7">
          * Indicates required
        </p>
        <EditBasicInfo />
        <EditLocation />
        <EditContactInfo />
      </form>
      {/* footer */}
      <div className=" h-[3.9rem] flex items-center justify-between px-5">
        <div></div>
        <button
          className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300
         dark:bg-darkMode-cardButton dark:hover:bg-darkMode-cardButtonHover
          dark:text-darkMode-cardButtonT dark:hover:text-darkMode-cardButtonTHov
           rounded-2xl font-semibold  py-1 px-5 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditInfoForm;
