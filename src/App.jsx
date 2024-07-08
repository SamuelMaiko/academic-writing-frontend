import React, { useEffect, useState } from "react";
import "./App.css";
import EntryPoint from "./EntryPoint";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateContext, { useStateShareContext } from "./Context/StateContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./SharedComponents/Loader";
import LandingPage from "./app/LandingPage/page";
import Login from "./app/Login/page";
import SignUp from "./app/SignUp/page";
import ScrollToTop from "./SharedComponents/ScrollToTop ";
import ForgotPassword from "./app/ForgotPassword/page";
import VerifySentCode from "./app/VerifySentCode/page";
import NewPassword from "./app/NewPassword/page";
import ResetSuccessful from "./app/ResetSuccessful/page";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, []);

  if (loading) {
    return (
      <div
        className={`bg-[rgba(0,0,0,0.9)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
      >
        <Loader />
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <ScrollToTop />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify-sent-code" element={<VerifySentCode />} />
              <Route path="/new-password" element={<NewPassword />} />
              <Route path="/reset-successful" element={<ResetSuccessful />} />
              <Route path="*" element={<EntryPoint />} />
            </Routes>
          </div>
          {/* <MobileNavBar /> */}
          {/* <EntryPoint /> */}
          <ToastContainer position="bottom-left" />
        </StateContext>
      </BrowserRouter>
    </>
  );
};

export default App;
