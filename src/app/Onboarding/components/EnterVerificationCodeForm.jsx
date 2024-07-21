import React from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";

const EnterVerificationCodeForm = () => {
  const { setVerifyDone } = useProgressBarContext();

  const navigate = useNavigate();
  const handleVerifyEmail = (e) => {
    e.preventDefault();
    setVerifyDone(true);
    navigate("/onboarding/fill-details");
  };
  return (
    <form
      onSubmit={handleVerifyEmail}
      className=" flex flex-col pt-[5rem] flex-1 items-center "
    >
      <div className="relative inline">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-[17rem] border-gray-300 border outline-none"
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Enter Verification Code
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block"
      >
        Verify Email
      </button>
    </form>
  );
};

export default EnterVerificationCodeForm;
