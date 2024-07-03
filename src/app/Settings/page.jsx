import { X } from "phosphor-react";
import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import ProfileInformation from "./components/ProfileInformation";
import AccountManagement from "./components/AccountManagement";
import DarkModeSetting from "./components/DarkModeSetting";

const Settings = () => {
  const { settingsOpen, setSettingsOpen } = useStateShareContext();
  return (
    <div
      className={`${
        settingsOpen ? "" : "translate-x-[22rem] "
      }  transition-transform duration-500 bg-white w-[20rem] shadow-[-2px_-2px_11px_rgba(0,0,0,0.3)]
     dark:shadow-gray-600 pt-[5rem] p-2 h-screen fixed right-0 top-0 bottom-0 z-40`}
    >
      {/* toggle button */}
      <button
        onClick={() => setSettingsOpen(false)}
        className="absolute top-3 right-3 p-2 border-blue-500 border-[2px] rounded-lg"
      >
        <X size={22} />
      </button>
      <ProfileInformation />
      <DarkModeSetting />
      <AccountManagement />
    </div>
  );
};

export default Settings;
