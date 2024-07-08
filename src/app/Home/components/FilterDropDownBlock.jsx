import { Divider } from "keep-react";
import { Plus } from "phosphor-react";
import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";

const FilterDropDownBlock = ({ title, type, active, setShowDropDown }) => {
  const { filters, setFilters } = useStateShareContext();
  const handleAddFilter = () => {
    const updated_filters = filters.map((filter) => {
      if (filter.type == type && filter.active)
        return { ...filter, active: false };
      if (filter.title == title) {
        return { ...filter, active: true };
      }
      return filter;
    });
    setFilters(updated_filters);
    setShowDropDown(false);
  };
  return (
    <>
      <button
        onClick={handleAddFilter}
        className="text-sm py-1 text-left w-full bg-white dark:bg-darkMode-body hover:bg-gray-100
       flex items-center gap-1 px-2 transition-colors duration-300"
      >
        <span>
          <Plus size={14} />
        </span>
        <span>{title}</span>
      </button>
      <Divider />
    </>
  );
};

export default FilterDropDownBlock;
