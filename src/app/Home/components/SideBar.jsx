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
import LogoDark from "../../../assets/LogoDark.png";
import LogoLight from "../../../assets/LogoLight.png";

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
        <div className={`${shrinkSideBar ? "hidden" : ""} text-xl flex-1`}>
          {/* Logo */}
          <div className="h-[2.5rem] w-full ">
            <img
              className="w-full h-full object-cover object-center"
              src={darkMode ? LogoDark : LogoLight}
              alt=""
            />
          </div>
        </div>

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
        <p className={`font-semibold text-[16px]`}>Techwave Writer</p>
        <button
          onClick={navigate("/profile")}
          className="text-sm text-blue-500 bg-gray-200 hover:bg-gray-300 dark:bg-white
         dark:hover:bg-gray-200 py-1 px-3 rounded-2xl mt-1 font-medium transition-colors duration-300"
        >
          View profile
        </button>
      </div>
      {/* button links */}
      <div
        className={`${
          shrinkSideBar ? "flex items-center flex-col" : ""
        } w-full h-full px-[2rem] mt-8 `}
      >
        {/* home  button */}
        <div>
          <Button
            onClick={() => navigate("/home")}
            icon={
              pathname === "/home" ? (
                <House size={20} weight="fill" />
              ) : (
                <House size={20} />
              )
            }
            title={"Home"}
            className={`${
              pathname === "/home" ? "text-sidebartext-hover" : ""
            } w-full`}
          />
        </div>
        <p
          className={`${
            shrinkSideBar ? "" : "hidden"
          } text-center text-sm my-5`}
        >
          Pages
        </p>
        {/* assigned work button */}
        <div className="relative">
          <Button
            onClick={() => navigate("/assigned-work")}
            icon={
              pathname === "/assigned-work" ? (
                <Pen size={20} weight="fill" />
              ) : (
                <Pen size={20} />
              )
            }
            title={"Assigned Work"}
            className={`${
              pathname === "/assigned-work" ? "text-sidebartext-hover" : ""
            } w-full`}
          />
          {/* counter */}
          <div
            className="absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
          >
            2
          </div>
        </div>
        {/* uptaken work button */}
        <div className="relative">
          <Button
            onClick={() => navigate("/uptaken-work")}
            icon={
              pathname === "/uptaken-work" ? (
                <Briefcase size={20} weight="fill" />
              ) : (
                <Briefcase size={20} />
              )
            }
            title={"Uptaken Work"}
            className={`${
              pathname === "/uptaken-work" ? "text-sidebartext-hover" : ""
            }  w-full`}
          />
          {/* counter */}
          <div
            className="absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
          >
            1
          </div>
        </div>
        {/* revisions button */}
        <div className="relative">
          <Button
            onClick={() => navigate("/revisions")}
            icon={
              pathname === "/revisions" ? (
                <Binoculars size={20} weight="fill" />
              ) : (
                <Binoculars size={20} />
              )
            }
            title={"Revisions"}
            className={`${
              pathname === "/revisions" ? "text-sidebartext-hover" : ""
            } w-full`}
          />
          {/* counter */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px] `}
          >
            0
          </div>
        </div>
        {/* bookmark button */}
        <div>
          <Button
            onClick={() => navigate("/bookmarks")}
            icon={
              pathname === "/bookmarks" ? (
                <BookmarkSimple size={20} weight="fill" />
              ) : (
                <BookmarkSimple size={20} />
              )
            }
            title={"Bookmark"}
            className={`${
              pathname === "/bookmarks" ? "text-sidebartext-hover" : ""
            } w-full`}
          />
        </div>
        {/* signout button */}
        {/* <Button
          icon={<SignOut size={20} />}
          title={"Sign Out"}
          className="w-full pl-3"
        /> */}
      </div>
    </div>
  );
};

export default SideBar;

// ui for empty notifications
// add email in the footer

{
  /* <Button
  onClick={() => navigate("/admin/users")}
  icon={<UserGear size={20} />}
  title={"Manage Users"}
  className={`${pathname === "/admin/users" ? "text-sidebartext-hover" : ""}`}
  /> */
}

{
  /* <Button
    onClick={() => navigate("/admin/work")}
  icon={<UserGear size={20} />}
  title={"Manage Work"}
  className={`${pathname === "/admin/work" ? "text-sidebartext-hover" : ""}`}
/> */
}

{
  /* <Button
      onClick={() => navigate("/history")}
      icon={<ClockCounterClockwise size={20} />}
      title={"History"}
      className={`${pathname === "/history" ? "text-sidebartext-hover" : ""}`}
    /> */
}
{
  /* <Button icon={<Gear size={20} />} title={"Settings"} className="" /> */
}
