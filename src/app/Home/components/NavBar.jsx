import React from "react";
import Button from "./ui/Button";
import { User, Bell, Gear } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { setSettingsOpen } = useStateShareContext();
  return (
    <div
      className={`w-full h-[5rem] px-[2rem] flex  items-center justify-between sticky
         top-0 z-40 bg-white dark:bg-darkMode-bars dark:text-darkMode-text`}
    >
      <p className="text-xl font-bold">Morning Samuel!</p>
      <div className="flex items-center gap-2">
        {/* settings button */}
        <Button
          onClick={() => setSettingsOpen(true)}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Gear size={22} />
        </Button>

        {/* notifications icon */}
        <div
          onClick={() => navigate("/notifications")}
          className="notification"
        >
          <div className="relative bell-container">
            <div className="bell border-[2.17px] border-black dark:border-white before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white"></div>
            <div
              className="absolute -top-[0.4rem] -right-[0.4rem] size-[13px] flex items-center
             justify-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
            >
              <span>1</span>
            </div>
          </div>
        </div>
        {/* user profile button */}
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
