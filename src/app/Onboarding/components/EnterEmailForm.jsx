import React from "react";

const EnterEmailForm = () => {
  return (
    <form className="relative py-[1rem] md:py-[5rem] flex flex-col items-center flex-1 border-r-0 md:border-r-[1px] md:border-gray-300">
      <div className="relative inline">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-[19rem] md:w-[17rem] border-gray-300 border outline-none"
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Email
        </label>
      </div>
      <button className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block">
        Send Code
      </button>
    </form>
  );
};

export default EnterEmailForm;
