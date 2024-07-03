import React from "react";

const Bio = () => {
  return (
    <div
      className="mt-[8.6rem] min-h-[6rem] mx-auto flex flex-col justify-center
     p-5 shadow-[2px_2px_13px_rgba(0,0,0,0.3)] dark:shadow-gray-600
      bg-white w-[95%] rounded-[1rem] dark:bg-darkMode-cardBg
      dark:text-darkMode-text
      "
    >
      <h1 className="text-lg font-semibold">Bio</h1>
      <p>
        My name is noobie and 💡 Embracing the wisdom encapsulated in the words,
        Continuous learning and adaptability are the keys to a successful career
        in the ever-evolving field of technology I am driven to not only
        navigate but thrive within the dynamic realm of software engineering.
      </p>
    </div>
  );
};

export default Bio;
