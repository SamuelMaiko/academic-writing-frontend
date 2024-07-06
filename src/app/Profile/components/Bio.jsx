import React from "react";

const Bio = () => {
  return (
    <div
      className="mt-[10.8rem] min-h-[6rem] mx-auto flex flex-col justify-center
     p-5 md:shadow-[2px_2px_13px_rgba(0,0,0,0.1)] shadow-[2px_2px_13px_rgba(0,0,0,0.07)] dark:shadow-gray-600
      bg-white w-full md:w-[95%] md:rounded-[1rem] dark:bg-darkMode-cardBg
      dark:text-darkMode-text px-6 md:px-5
      "
    >
      <h1 className="text-[16px] md:text-lg font-semibold">Bio</h1>
      <p id="contact" className=""></p>
      <p className="text-[14px] leading-6">
        My name is noobie and 💡 Embracing the wisdom encapsulated in the words,
        Continuous learning and adaptability are the keys to a successful career
        in the ever-evolving field of technology I am driven to not only
        navigate but thrive within the dynamic realm of software engineering.
      </p>
      {/* contact tracking */}
    </div>
  );
};

export default Bio;
