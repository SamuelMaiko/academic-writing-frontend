import React from "react";
import { useNavigate } from "react-router-dom";

const NewPasswordForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-successful");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[27%] p-6 rounded-lg md:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
    >
      <h1 className="text-[25px] font-semibold mb-2">Choose a new password</h1>
      <p className="text-[13px] my-5 text-gray-600">
        To secure your account, choose a strong password you haven’t used before
        and is at least 8 characters long.
      </p>
      <div className="">
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          New password
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
      <div className="mt-4">
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          Retype new password
        </label>
        <div className="mt-1">
          <input
            placeholder="Retype new password"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="retype_new_password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="transition-colors duration-300 hover:bg-blue-600 mt-7
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium "
      >
        Submit
      </button>
    </form>
  );
};

export default NewPasswordForm;
