import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  return (
    <form className="w-full md:w-[35%] mt-[2rem]">
      <div className="mb-8">
        {/* <p className="text-sm">Password should be atleast 8 characters long.</p> */}
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          Type your current password*
        </label>
        <div className="mt-1">
          <input
            placeholder="Current password"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="current_password"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          Type your new password*
        </label>
        <div className="mt-1">
          <input
            placeholder="New password"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="new_password"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          Retype your new password*
        </label>
        <div className="mt-1">
          <input
            placeholder="Retype password "
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="retype_password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="transition-colors duration-300 hover:bg-green-600
         bg-green-500 text-white py-2 px-3 rounded-3xl text-[15px]"
      >
        {" "}
        Save password
      </button>
      <button
        onClick={() => navigate("/forgot-password")}
        className="text-gray-400 mt-5 hover:text-gray-500 transition-colors block duration-300
        w-fit cursor-pointer"
      >
        Forgot password
      </button>
    </form>
  );
};

export default ChangePasswordForm;
