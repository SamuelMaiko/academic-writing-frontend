import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import Button from "../../app/Home/components/ui/Button";
import {
  Binoculars,
  BookmarkSimple,
  Briefcase,
  House,
  Pen,
  X,
} from "phosphor-react";
import LogoDark from "../../assets/LogoDark.png";
import LogoLight from "../../assets/LogoLight.png";
import Vini from "../../assets/Vinijr.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

const MobileSideBar = () => {
  const { showMobileSideBar, setShowMobileSideBar, darkMode } =
    useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        showMobileSideBar ? "delay-75" : "-translate-x-[27rem]"
      } absolute left-[5%]  bg-white dark:bg-darkMode-bars w-[60%] h-[96%]
       top-1/2 -translate-y-1/2 rounded-3xl transition-transform duration-500  z-[50] md:hidden `}
    >
      {/* close button */}
      <Button
        onClick={() => setShowMobileSideBar((current) => !current)}
        buttonType="roundedIconBtn"
        className={`dark:text-white dark:hover:text-white dark:hover:bg-gray-600 absolute right-4 top-2`}
      >
        <X size={24} />
      </Button>
      {/* logo */}
      <div className="h-[2.5rem] ml-2 mt-[3.7rem] ">
        <img
          className="w-[10rem] h-full object-cover object-center"
          src={darkMode ? LogoDark : LogoLight}
          alt=""
        />
      </div>
      {/* profile preview */}
      <div className={` flex flex-col items-center mt-10 `}>
        <div className={`size-[7rem] rounded-full overflow-hidden`}>
          <img src={Vini} alt="" />
        </div>
        <p className={`font-extrabold text-[1.5rem] mt-4`}>Samuel Maiko</p>
        <p className={`font-semibold text-[16px]`}>Techwave Writer</p>
        <button
          onClick={() => navigate("/profile")}
          className="text-sm text-blue-500 bg-gray-200 hover:bg-gray-300 dark:bg-white
         dark:hover:bg-gray-200 py-1 px-3 rounded-2xl mt-1 font-medium transition-colors duration-300"
        >
          View profile
        </button>
      </div>
      {/* button links */}
      <div className={` w-full h-full mt-8 px-4`}>
        {/* home  button */}
        <div>
          <Button
            onClick={() => {
              setShowMobileSideBar(false);
              navigate("/home");
            }}
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
        <p className={` text-left pl-3 text-sm my-5 hidden`}>Pages</p>
        {/* assigned work button */}
        <div className="relative">
          <Button
            onClick={() => {
              setShowMobileSideBar(false);
              navigate("/assigned-work");
            }}
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
            onClick={() => {
              setShowMobileSideBar(false);
              navigate("/uptaken-work");
            }}
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
            onClick={() => {
              setShowMobileSideBar(false);
              navigate("/revisions");
            }}
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
            onClick={() => {
              setShowMobileSideBar(false);
              navigate("/bookmarks");
            }}
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

export default MobileSideBar;
