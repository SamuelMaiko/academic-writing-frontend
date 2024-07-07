import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import { Footer } from "flowbite-react";
import ResetSuccess from "./components/ResetSuccess";

const ResetSuccessful = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="min-h-[80vh] flex items-center justify-center">
        <ResetSuccess />
      </div>
      <Footer />
    </div>
  );
};

export default ResetSuccessful;
