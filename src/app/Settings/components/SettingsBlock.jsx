import { ArrowRight } from "phosphor-react";
import React from "react";

const SettingsBlock = ({ title, onClick = () => {} }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex justify-between items-center p-3 cursor-pointer hover:bg-neutral-200
         transition-colors duration-300 dark:hover:bg-darkMode-cardHover"
      >
        <p>{title}</p>
        <p>
          <ArrowRight size={21} />
        </p>
      </div>
    </>
  );
};

export default SettingsBlock;
