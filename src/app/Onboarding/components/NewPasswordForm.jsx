import React from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";

const NewPasswordForm = () => {
  const { setChangePasswordDone } = useProgressBarContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setChangePasswordDone(true);
    navigate("/onboarding/success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center flex-1 "
    >
      <div className="relative w-[97%] md:w-[50%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none "
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          New password
        </label>
      </div>
      <div className="relative w-[97%] md:w-[50%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none "
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Retype New password
        </label>
      </div>

      <button
        type="submit"
        className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block"
      >
        Save New Password
      </button>
    </form>
  );
};

export default NewPasswordForm;
