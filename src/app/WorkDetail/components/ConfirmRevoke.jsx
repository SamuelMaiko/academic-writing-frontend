import { Divider } from "keep-react";
import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { X } from "phosphor-react";

const ConfirmRevoke = () => {
  const { setShowRevokeWorkModal } = useStateShareContext();
  return (
    <div
      className="absolute w-[21rem]  px-2 left-[50%] translate-x-[-50%] top-[30%] rounded-lg
     bg-bgcolor dark:bg-darkMode-body"
    >
      <div className="text-[1.3rem]  px-4 flex items-center justify-between py-3 ">
        <p className="text-xl font-semibold">Revoke work</p>
        {/* close button */}
        <button
          onClick={() => setShowRevokeWorkModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      {/* central section*/}
      <div className="p-3">
        <p>Are you sure you want to revoke this work?</p>
        <div>
          <p className="font-medium">Note:</p>
          <p className="text-sm text-red-400">
            <span className="font-medium">assigned work:</span>admin will be
            informed of your action.
          </p>
          <p className="text-sm text-red-400">
            <span className="font-medium">uptaken work:</span>will affect your
            score.
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRevokeWorkModal(false)}
            className="border-[1px] border-green-500 py-1 px-3 rounded-2xl hover:bg-gray-100
             font-medium text-green-500 transition-background duration-300 flex items-center"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={() => {}}
            className={` bg-red-500 hover:bg-red-600
              py-1 px-3 rounded-2xl font-medium text-white transition-background duration-300 flex items-center`}
          >
            <span>Revoke</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRevoke;
