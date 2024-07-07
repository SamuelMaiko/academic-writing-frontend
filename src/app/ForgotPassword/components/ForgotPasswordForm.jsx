import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-sent-code");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[27%] p-6 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
    >
      <h1 className="text-[25px] font-semibold mb-2">Forgot password</h1>
      <div className="">
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          Email
        </label>
        <div className="mt-1">
          <input
            placeholder="Email"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="email"
          />
        </div>
      </div>
      <p className="text-[13px] my-5 text-gray-600">
        We’ll send a verification code to this email if it matches an existing
        Techwave account.
      </p>
      <button
        type="submit"
        className="transition-colors duration-300 hover:bg-blue-600
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium text-sm"
      >
        Next
      </button>
      <div className="w-full flex justify-center">
        <button className="hover:bg-gray-300 mt-4 px-1 text-sm hover:underline rounded-lg">
          Back
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
