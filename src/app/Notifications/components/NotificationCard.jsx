import { DotsThree, Pen, Trash } from "phosphor-react";
import React, { useState } from "react";
import Button from "../../Home/components/ui/Button";
import { Divider } from "keep-react";
import PropTypes from "prop-types";
import NotificationDropDownBlock from "./NotificationDropDownBlock";
import Woman from "../../../assets/images/home-picture1.jpg";
import { CalendarDays, FileSearch, TextSearch, UserCog } from "lucide-react";

const NotificationCard = ({ isRead = true, type }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <>
      <div
        className={`flex relative w-full gap-2 p-5 pr-3 ${
          !isRead
            ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800"
            : "hover:bg-lightmode-cardBgHover dark:bg-darkMode-cardBg hover:dark:bg-darkMode-cardHover"
        }  cursor-pointer transition-colors duration-300  dark:text-darkMode-cardText
        
        `}
      >
        <div className="relative">
          {/* notification icon */}
          <div className="size-[3.1rem] rounded-full bg-white overflow-hidden grid place-items-center">
            <img
              className={`${
                type == "ASSIGNED_WORK" ? "" : "hidden"
              } h-full w-full object-cover object-center`}
              src={Woman}
              alt="admin"
            />
            <CalendarDays
              className={`${
                type == "NEARING_DEADLINE" ? "" : "hidden"
              } text-orange-500`}
              size={24}
            />
            <FileSearch
              className={`${
                type == "NEW_REVISION" ? "" : "hidden"
              } text-blue-500 `}
              size={24}
            />
            <UserCog
              className={`${
                type == "UPDATE_PROFILE" ? "" : "hidden"
              } text-green-500 `}
              size={24}
            />
          </div>
          {/* is not read blue dot */}
          <div
            className={`${
              !isRead ? "" : "hidden"
            } absolute -left-[0.7rem] top-1/2 -translate-x-1/2 bg-blue-500 size-[0.5rem] rounded-full `}
          ></div>
        </div>
        <div className="text-sm w-[80%]">
          <p>
            Work you were assigned on 24th is nearing its deadline. Pace up!
          </p>
        </div>
        <div className="text-xs flex flex-col items-end">
          <p className="pr-2">2min</p>
          <Button
            onClick={() => setDropDownOpen((current) => !current)}
            buttonType="roundedIconBtn"
            className={`${
              !isRead ? "hover:bg-blue-300" : "hover:bg-neutral-200"
            } p-1 hover:dark:bg-blue-900 text-black dark:text-white hover:dark:text-white`}
          >
            <DotsThree size={32} />
          </Button>
        </div>
        {/* dropdown */}
        <div
          className={`${
            dropDownOpen ? "" : "hidden"
          } absolute top-[85%] right-0 z-30 overflow-hidden shadow-[-2px_2px_5px_rgba(0,0,0,0.3)] dark:shadow-gray-600 bg-white w-[65%]
           rounded-lg min-h-[6rem] dark:bg-darkMode-bars dark:text-darkMode-cardText`}
        >
          <NotificationDropDownBlock
            onClick={() => setDropDownOpen(false)}
            icon={<Trash size={21} weight="fill" />}
            text={"Delete notification"}
            dropDownOpen={dropDownOpen}
            setDropDownOpen={setDropDownOpen}
          />
        </div>
      </div>
      <Divider color="secondary" />
    </>
  );
};

NotificationCard.propTypes = {
  isRead: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default NotificationCard;
