import React from "react";
import EnterVerificationCodeForm from "../components/EnterVerificationCodeForm";
import EnterEmailForm from "../components/EnterEmailForm";

const VerifyEmail = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Verify your email
        </h1>
        <p className="font-medium my-4 text-sm md:text-base">
          Your Email will be used to verify your identity and added to your
          details after.
        </p>
        <p className="text-sm md:text-md">
          We&#39;ll send a verification code to your email. Enter a valid email.
          remember you won&#39;t be able to change it later.
        </p>
      </div>
      <div className="flex md:flex-row flex-col w-full mt-4">
        <EnterEmailForm />
        <EnterVerificationCodeForm />
      </div>
    </div>
  );
};

export default VerifyEmail;
