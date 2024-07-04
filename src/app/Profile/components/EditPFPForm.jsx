import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { ImageSquare, Trash, X } from "phosphor-react";
import Vini from "../../../assets/Vinijr.jpeg";

const EditPFPForm = () => {
  const { setShowEditPFPModal } = useStateShareContext();
  return (
    <div
      className="absolute w-[56%] h-[30rem] rounded-lg  px-2 left-[50%]
 translate-x-[-50%] top-[5%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text     
 "
    >
      <div>
        {/* header */}
        <div className="flex justify-between items-center py-3 px-4 ">
          <p className="text-xl font-semibold">Profile photo</p>
          {/* cancel button */}
          <button
            onClick={() => setShowEditPFPModal(false)}
            className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
          >
            <X size={24} />
          </button>
        </div>
        {/* central part */}
        <div className=" h-[21.4rem] flex justify-center">
          <div className=" size-[19rem] rounded-full overflow-hidden object-contain object-right">
            <img className="" src={Vini} alt="" />
          </div>
        </div>
        {/* footer */}
        <div
          className=" h-[4.5rem] text-black dark:text-darkMode-text flex items-center justify-around 
        px-5 border-t-neutral-300 dark:border-t-neutral-500 border-t-[1px]"
        >
          <button
            className="h-full px-2 flex flex-col items-center justify-center hover:bg-neutral-200
           dark:hover:bg-gray-600 font-medium  py-1"
          >
            <span>
              <ImageSquare size={25} weight="fill" />
            </span>
            <span>Upload new</span>
          </button>
          <button
            className="h-full px-2 flex flex-col items-center hover:bg-neutral-200
           dark:hover:bg-gray-600 justify-center rounded-lg font-medium  py-1"
          >
            <span>
              <Trash size={25} weight="fill" />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EditPFPForm;
