import React from "react";

const EditContactInfo = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">Contact info</h1>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Phone number*
        </label>
        <div className="mt-1">
          <input
            placeholder="Phone number"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="phone_number"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Email*
        </label>
        <div className="mt-1">
          <input
            placeholder="Email"
            type="email"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="email"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Linked In
        </label>
        <div className="mt-1">
          <input
            placeholder="LinkedIn"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="linked-in"
          />
        </div>
      </div>
    </div>
  );
};

export default EditContactInfo;
