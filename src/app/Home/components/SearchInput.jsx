import { ArrowRight, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import instance from "../../../axios/instance";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "phosphor-react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWorks, setFilteredWorks] = useState([]);
  const { work, setWork } = useProgressBarContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to fetch works from the backend based on the search query
  const fetchWorks = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await instance.get("/work/", {
        params: { search: query },
      });
      setWork(response.data);
    } catch (error) {
      console.error("Error fetching works:", error);
      setError("Failed to fetch works. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch works when searchQuery changes
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search") || "";
    fetchWorks(query); // not
    setSearchQuery(query);
    // if (query) {
    //   fetchWorks(query);
    // } else {
    //   setFilteredWorks([]);
    // }
  }, [location.search]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`?search=${encodeURIComponent(query)}`);
    if (query) {
      fetchWorks(query);
    } else {
      setFilteredWorks([]);
    }
  };

  // if they click enter
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full md:w-[33rem] text-black"
    >
      <input
        placeholder="Search by work code"
        type="text"
        className=" w-full h-[2.7rem] ps-12 pr-12 outline-none rounded-3xl border-[1px]
         border-gray-300 text-sm focus:bg-blue-50"
        value={searchQuery}
        onChange={handleSearchChange}
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
      <button
        onClick={() => {
          handleSearchChange({ target: { value: "" } });
          setSearchQuery("");
        }}
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-[10%] hover:text-gray-500 transition-colors duration-300"
      >
        <X size={17} />
      </button>
    </form>
  );
};

export default SearchInput;
