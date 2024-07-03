import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  List,
  House,
  // UserGear,
  // Gear,
  BookmarkSimple,
  Pen,
  Briefcase,
  Binoculars,
  // ClockCounterClockwise,
  // TrolleySuitcase,
  SignOut,
} from "phosphor-react";
import { useStateShareContext } from "../../../Context/StateContext";
import Button from "./ui/Button";
import Vini from "../../../assets/Vinijr.jpeg";

const SideBar = () => {
  const { shrinkSideBar, setShrinkSideBar, darkMode } = useStateShareContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`
      sticky top-0 h-[98vh] overflow-y-scroll overflow-x-hidden
      ${shrinkSideBar ? "w-[5rem]" : "w-[22rem]"} border-r border-[#f5f4f4] ${
        darkMode ? "sidebar" : ""
      } transition-width duration-500 h-full pt-[2rem] dark:bg-darkMode-bars dark:text-darkMode-text`}
    >
      <div
        className={`flex ${
          shrinkSideBar ? "justify-center" : "justify-between"
        } items-center px-[2rem]`}
      >
        <p className={`${shrinkSideBar ? "hidden" : ""} text-xl`}>
          Uptake Writers
        </p>
        {/* <button
          className={`hover:bg-neutral-200  transition-colors duration-300 p-1 rounded-full`}
          onClick={() => setShrinkSideBar((prev) => !prev)}
        >
          <List size={25} />
        </button> */}

        {/* bars toggle button */}
        <Button
          onClick={() => setShrinkSideBar((prev) => !prev)}
          buttonType="roundedIconBtn"
          className={`dark:text-white dark:hover:text-white dark:hover:bg-gray-600 `}
        >
          <List size={24} />
        </Button>
      </div>
      {/* profile preview */}
      <div
        className={`${
          shrinkSideBar ? "hidden" : ""
        } flex flex-col items-center mt-10 `}
      >
        <div className={`size-[7rem] rounded-full overflow-hidden`}>
          <img src={Vini} alt="" />
        </div>
        <p className={`font-extrabold text-[1.5rem] mt-4`}>Samuel Maiko</p>
        <p className={`font-semibold text-[16px]`}>Uptake-Writers Writer</p>
      </div>
      {/* button links */}
      <div
        className={`${
          shrinkSideBar ? "flex items-center flex-col" : ""
        } w-full h-full px-[2rem] mt-8 `}
      >
        <Button
          onClick={() => navigate("/home")}
          icon={<House size={20} />}
          title={"Home"}
          className={`${pathname === "/home" ? "text-sidebartext-hover" : ""}`}
        />
        {/* <Button
          onClick={() => navigate("/admin/users")}
          icon={<UserGear size={20} />}
          title={"Manage Users"}
          className={`${pathname === "/admin/users" ? "text-sidebartext-hover" : ""}`}
        /> */}
        {/* <Button
          onClick={() => navigate("/admin/work")}
          icon={<UserGear size={20} />}
          title={"Manage Work"}
          className={`${pathname === "/admin/work" ? "text-sidebartext-hover" : ""}`}
        /> */}
        <p
          className={`${
            shrinkSideBar ? "" : "hidden"
          } text-center text-sm my-5`}
        >
          Pages
        </p>

        <Button
          onClick={() => navigate("/assigned-work")}
          icon={<Pen size={20} />}
          title={"Assigned Work"}
          className={`${
            pathname === "/assigned-work" ? "text-sidebartext-hover" : ""
          }`}
        />
        <Button
          onClick={() => navigate("/uptaken-work")}
          icon={<Briefcase size={20} />}
          title={"Uptaken Work"}
          className={`${
            pathname === "/uptaken-work" ? "text-sidebartext-hover" : ""
          }`}
        />
        <Button
          onClick={() => navigate("/revisions")}
          icon={<Binoculars size={20} />}
          title={"Revisions"}
          className={`${
            pathname === "/revisions" ? "text-sidebartext-hover" : ""
          }`}
        />
        <Button
          onClick={() => navigate("/bookmarks")}
          icon={<BookmarkSimple size={20} />}
          title={"Bookmark"}
          className={`${
            pathname === "/bookmarks" ? "text-sidebartext-hover" : ""
          }`}
        />
        {/* <Button
          onClick={() => navigate("/history")}
          icon={<ClockCounterClockwise size={20} />}
          title={"History"}
          className={`${pathname === "/history" ? "text-sidebartext-hover" : ""}`}
        /> */}
        {/* <Button icon={<Gear size={20} />} title={"Settings"} className="" /> */}
        <Button icon={<SignOut size={20} />} title={"Sign Out"} className="" />
      </div>
    </div>
  );
};

export default SideBar;

// ui for empty notifications
// add email in the footer
