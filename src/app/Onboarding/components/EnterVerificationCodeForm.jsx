import React, { useState } from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";

const EnterVerificationCodeForm = () => {
  const { setVerifyDone } = useProgressBarContext();
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await instance.post("/auth/verify-email/", {
        otp,
      });

      setSuccess(response.data.message);
      toast.success("Email verified successfully.");
      setVerifyDone(true);
      navigate("/onboarding/fill-details");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;
        console.log(error.response.data);

        switch (status) {
          case 400:
            setError(`${message}`);
            break;
          case 500:
            setError(`Server Error: ${message}`);
            break;
          default:
            setError(`Error: ${message}`);
            break;
        }
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  // const handleVerifyEmail = async (e) => {
  //   e.preventDefault();
  //   setVerifyDone(true);
  //   navigate("/onboarding/fill-details");
  // };
  return (
    <form
      onSubmit={handleVerifyEmail}
      className="relative flex flex-col pt-[3rem] md:pt-[5rem] flex-1 items-center "
    >
      {error && <p className="text-red-500 absolute top-8">{error}</p>}
      {success && <p className="text-green-500 absolute top-8">{success}</p>}
      <div className="relative inline">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-[19rem] md:w-[17rem] border-gray-300 border outline-none"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Enter Verification Code
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Verify Email"}
      </button>
    </form>
  );
};

export default EnterVerificationCodeForm;
