import { Check, CircleCheck } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyCodeForm = () => {
  const [showResendSuccess, setShowResendSuccess] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/new-password");
  };

  const handleResendCode = () => {
    // toast.success("We've sent you another code.");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative w-full md:w-[27%] p-6 rounded-lg md:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
      >
        <p
          className={`${
            showResendSuccess ? "" : "hidden"
          } absolute flex items-center gap-1 -top-4 md:-top-7 text-left text-green-500 text-sm`}
        >
          <span>
            <CircleCheck size={21} />
          </span>
          <span>We&apos;ve sent you another code.</span>
        </p>
        <h1 className="text-[25px] font-semibold mb-2">
          Enter the 6-digit code
        </h1>
        <p className="text-sm my-4 text-gray-600">
          Check <span className="font-semibold">sam@gmail.com</span> for the
          verification code.
        </p>
        <div className="">
          <div className="mt-1">
            <input
              placeholder="6-digit code"
              type="text"
              className=" placeholder-custom flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 text-2xl tracking-[0.2em]
             py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 placeholder:text-md
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="email"
            />
          </div>
          <button
            type="button"
            onClick={handleResendCode}
            className="text-blue-600 hover:bg-blue-100 transition-colors duration-300
         mt-2 px-2 text-sm rounded-xl font-medium"
          >
            Resend code
          </button>
        </div>
        <button
          type="submit"
          className="transition-colors duration-300 hover:bg-blue-600 mt-5
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium "
        >
          Submit
        </button>
        <p className="text-[13px] my-5 text-gray-500">
          If you don’t see the email in your inbox, check your spam folder. If
          it’s not there, the email address may not be confirmed, or it may not
          match an existing Techwave account.
        </p>
      </form>
    </>
  );
};

export default VerifyCodeForm;
