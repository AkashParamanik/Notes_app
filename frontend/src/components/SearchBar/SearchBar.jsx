import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onClearSearch, onChange, handleSearch }) => {
  return (
    <div className=" w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        className="w-full text-xs bg-transparent outline-none py-[11px]"
        placeholder="Search notes"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-xl text-slate-600 cursor-pointer hover:text-black mr-1"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer active:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
