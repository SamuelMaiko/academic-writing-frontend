import React from "react";
import LandingNavBar from "./components/LandingNavBar";
import LandingHeader from "./components/LandingHeader";
import { useStateShareContext } from "../../Context/StateContext";

const LandingPage = () => {
  const { show } = useStateShareContext();
  return (
    <div className="relative h-[98vh] overflow-hidden w-full ">
      <LandingNavBar />
      <div className=" ">
        <LandingHeader />
      </div>
      <div
        className={`${
          show ? "visible" : "invisible opacity-0"
        } opacity-1 transition-all duration-500
           absolute lg:hidden z-[4] bg-white right-0 left-0 bottom-0 top-[7rem]`}
      ></div>
    </div>
  );
};

export default LandingPage;
