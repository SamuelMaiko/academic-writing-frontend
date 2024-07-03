import { Textarea } from "keep-react";
import React from "react";

const EditBasicInfo = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Basic info</h1>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          First name*
        </label>
        <div className="mt-1">
          <input
            placeholder="First name"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="first_name"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Last name*
        </label>
        <div className="mt-1">
          <input
            placeholder="Last name"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="last_name"
          />
        </div>
      </div>
      <div>
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Bio
        </label>
        <div className="mt-1">
          <Textarea
            className="bg-transparent rounded-md border dark:bg-transparent border-gray-300 dark:border-gray-300 
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            id="message"
            placeholder="Bio"
            rows={8}
            name="bio"
          />
          {/* <input
            placeholder="Bio"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="bio"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default EditBasicInfo;
