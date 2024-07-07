import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Footer from "../Footer/page";

const ForgotPassword = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="min-h-[80vh] flex items-center justify-center">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
