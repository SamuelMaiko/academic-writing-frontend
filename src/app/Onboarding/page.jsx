import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";

const Onboarding = () => {
  return (
    <div className="w-full mx-auto bg-[#f5f5dc]">
      <div className="w-[83%] mx-auto">
        <ProgressBar />
        <div className="bg-white rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)] p-[5rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
