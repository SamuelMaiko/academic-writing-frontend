import React from "react";
import Button from "./ui/Button";
import { SunDim, User, Bell, Gear } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode, setSettingsOpen } = useStateShareContext();
  return (
    <div
      className={`w-full h-[5rem] px-[2rem] flex  items-center justify-between sticky
         top-0 z-40 bg-white dark:bg-darkMode-bars dark:text-darkMode-text`}
    >
      <p className="text-xl font-bold">Morning Samuel!</p>
      <div className="flex gap-2">
        <Button
          onClick={() => setSettingsOpen(true)}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Gear size={22} />
        </Button>
        <Button
          onClick={() => setDarkMode((mode) => !mode)}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <SunDim size={24} />
        </Button>
        <Button
          onClick={() => navigate("/notifications")}
          buttonType="roundedIconBtn"
          className=" relative dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Bell size={22} />
          <div className="absolute top-[0.4rem] right-[0.4rem] size-[0.9rem] grid place-items-center font-semibold bg-blue-500 text-white rounded-full text-xs">
            0
          </div>
        </Button>
        <Button
          onClick={() => navigate("/profile")}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <User size={22} />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
