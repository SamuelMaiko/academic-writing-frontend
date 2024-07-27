import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";

const EnterEmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleGetOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await instance.post("/auth/send-verification-otp/", {
        email,
      });

      setSuccess("Check your email for an OTP to verify your email!");
      // toast.success("success");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;
        console.log(error.response.data);

        switch (status) {
          case 400:
            setError(` ${message}`);
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

  return (
    <form
      onSubmit={handleGetOTP}
      className="relative py-[1rem] md:py-[5rem] flex flex-col items-center flex-1 border-r-0 md:border-r-[1px] md:border-gray-300"
    >
      {error && <p className="text-red-500 absolute top-8">{error}</p>}
      {success && <p className="text-green-500 absolute top-8">{success}</p>}
      <div className="relative inline">
        <input
          type="email"
          className="pl-4 h-[3.2rem] w-[19rem] md:w-[19rem] border-gray-300 border outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Email
        </label>
      </div>
      <button
        className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 hover:bg-blue-600
         text-white font-medium block transition-colors duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Send Code"}
      </button>
    </form>
  );
};

export default EnterEmailForm;
