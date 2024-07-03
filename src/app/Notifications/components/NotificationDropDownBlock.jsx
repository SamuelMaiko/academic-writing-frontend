import React from "react";
import PropTypes from "prop-types";

const NotificationDropDownBlock = ({ onClick = () => {}, icon, text }) => {
  return (
    <div
      onClick={onClick}
      className="flex p-2 py-[11px] items-center hover:bg-neutral-100 font-semibold dark:hover:bg-darkMode-cardHover"
    >
      <div className="w-[2rem] ">{icon}</div>
      <p className="w-full text-sm">{text}</p>
    </div>
  );
};

NotificationDropDownBlock.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default NotificationDropDownBlock;
