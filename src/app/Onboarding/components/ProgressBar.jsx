import React from "react";
import OnboardingLogo from "../../../assets/OnboardingLogo.png";
import ProgressCounter from "./ProgressCounter";
import ProgressConnector from "./ProgressConnector";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../../../CustomHooks/useLocalStorage";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const ProgressBar = () => {
  const { verifyDone, fillDetailsDone, profileDone, changePasswordDone } =
    useProgressBarContext();
  const { pathname } = useLocation();
  return (
    <div className="bg-transparent h-[8rem] flex items-center">
      <div className="h-[2.7rem] w-[9rem] md:w-[11rem]  ">
        <img
          className="w-full h-full object-cover object-center"
          src={OnboardingLogo}
          alt=""
        />
      </div>
      <div className="pl-[7rem] flex items-center">
        <ProgressCounter
          number={1}
          className={`${
            verifyDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/verify-email") & !verifyDone
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          title="Verify Email"
        />
        <ProgressConnector className={`${verifyDone ? "" : "bg-gray-400"}`} />
        <ProgressCounter
          number={2}
          className={`${
            fillDetailsDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600 "
          } ${
            (pathname == "/onboarding/fill-details") & !fillDetailsDone
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          title="Fill Details"
        />
        <ProgressConnector
          className={`${fillDetailsDone ? "" : "bg-gray-400"}`}
        />
        <ProgressCounter
          number={3}
          className={`${
            profileDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/complete-profile") & !profileDone
              ? "border-blue-500 text-blue-500"
              : ""
          }
          `}
          title="Complete Profile"
        />
        <ProgressConnector className={`${profileDone ? "" : "bg-gray-400"}`} />
        <ProgressCounter
          className={`${
            changePasswordDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/change-password") & !changePasswordDone
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          number={4}
          title="Change Password"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
