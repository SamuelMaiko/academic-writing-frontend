import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import SideBar from "./SideBar";

const SideBarModal = () => {
  const { showMobileSideBar } = useStateShareContext();
  return (
    <div
      className={`${
        showMobileSideBar ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.3)] fixed z-50 inset-0 md:hidden`}
    >
      <SideBar />
    </div>
  );
};

export default SideBarModal;
