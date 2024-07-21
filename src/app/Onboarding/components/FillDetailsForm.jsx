import React from "react";
import { useNavigate } from "react-router-dom";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const FillDetailsForm = () => {
  const { setFillDetailsDone } = useProgressBarContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFillDetailsDone(true);
    navigate("/onboarding/complete-profile");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center flex-1 "
    >
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none "
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          First Name
        </label>
      </div>
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none "
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Last Name
        </label>
      </div>
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none "
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Phone Number
        </label>
      </div>
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none "
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Country
        </label>
      </div>
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <select
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none "
        >
          <option value="">Kisii</option>
          <option value="">Nairobi</option>
          <option value="">Nakuru</option>
        </select>
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          County
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block"
      >
        Save Details
      </button>
    </form>
  );
};

export default FillDetailsForm;
