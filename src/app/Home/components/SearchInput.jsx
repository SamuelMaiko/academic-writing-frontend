import { ArrowRight, Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full md:w-[33rem] text-black"
    >
      <input
        placeholder="Search work"
        type="text"
        className=" w-full h-[2.7rem] ps-12 pr-12 outline-none rounded-3xl border-[1px]
         border-gray-300 text-sm focus:bg-blue-50"
      />
      {/* search icon */}
      <Search
        size={19}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400"
      />
      {/* submit btn */}
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-1 bg-blue-500 rounded-full p-2 text-white"
      >
        <ArrowRight size={20} className="" />
      </button>
    </form>
  );
};

export default SearchInput;
