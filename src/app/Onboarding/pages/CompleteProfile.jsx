import React from "react";
import "./styles.css";
import CompleteProfileForm from "../components/CompleteProfileForm";

const CompleteProfile = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:pl-[13rem] md:pr-[13rem]">
        <h1 className="font-semibold text-2xl md:text-3xl text-center">
          Complete your profile
        </h1>
        <p className="font-medium my-4 text-sm md:text-base text-center md:text-left">
          Upload a profile picture and write a brief bio to personalize your
          account.
        </p>
      </div>
      <div className="flex w-full mt-4 md:pl-[13rem]">
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
