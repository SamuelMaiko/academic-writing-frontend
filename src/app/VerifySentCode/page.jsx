import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import { Footer } from "flowbite-react";
import VerifyCodeForm from "./components/VerifyCodeForm";

const VerifySentCode = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="min-h-[80vh] flex items-center justify-center">
        <VerifyCodeForm />
      </div>
      <Footer />
    </div>
  );
};

export default VerifySentCode;
