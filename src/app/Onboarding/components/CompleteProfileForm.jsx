import React from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
  const { setProfileDone } = useProgressBarContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileDone(true);
    navigate("/onboarding/change-password");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <p className="text-sm">Profile picture</p>
        <input
          id="picture"
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-blue-100 px-3 py-2 mb-7 text-sm
                 text-gray-400 file:border-0 file:bg-white file:text-gray-600 file:text-sm file:font-medium"
        />
      </div>
      <div className="relative inline ">
        <textarea
          rows={"5"}
          type="text"
          className="pl-4 border-gray-300 border w-full md:w-[60%] outline-none"
        />
        <label className="absolute bg-white bottom-[7.25rem] left-4 px-1 text-gray-600 text-sm">
          Bio
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 mt-4 rounded-md bg-blue-500 text-white font-medium block"
      >
        Save
      </button>
    </form>
  );
};

export default CompleteProfileForm;
