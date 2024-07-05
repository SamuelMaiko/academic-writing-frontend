import React, { useEffect, useState } from "react";
import "./App.css";
import EntryPoint from "./EntryPoint";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateContext from "./Context/StateContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./SharedComponents/Loader";
import LandingPage from "./app/LandingPage/page";
import Login from "./app/Login/page";
import SignUp from "./app/SignUp/page";

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
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<EntryPoint />} />
          </Routes>
          {/* <EntryPoint /> */}
          <ToastContainer position="bottom-left" theme="colored" />
        </StateContext>
      </BrowserRouter>
    </>
  );
};

export default App;
