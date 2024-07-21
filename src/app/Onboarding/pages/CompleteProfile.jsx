import React from "react";
import "./styles.css";
import CompleteProfileForm from "../components/CompleteProfileForm";

const CompleteProfile = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col pl-[13rem] pr-[13rem]">
        <h1 className="font-semibold text-3xl text-center">
          Complete Your Profile
        </h1>
        <p className="font-medium my-4">
          Upload a profile picture and write a brief bio to personalize your
          account.
        </p>
      </div>
      <div className="flex w-full mt-4 pl-[13rem]">
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
