"use client";
import { useEffect, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import SearchResultsBox from "./SearchResultsBox";
import useProductSearch from "@/hooks/useProductSearch";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const SearchInput = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [search, setSearch] = useState("");
  const { searchedProducts, defaultProducts, isLoading } =
    useProductSearch(search);
  const { popOverRef } = useOnClickOutside(handleItemClick, isInputFocused);
  function handleItemClick() {
    console.log("clicked");
    setSearch("");
    setInputFocused(false);
  }
  return (
    <div
      ref={popOverRef}
      className="h-10 relative hidden md:inline-flex flex-1 "
    >
      <input
        placeholder="Search products here..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setInputFocused(true)}
        className="h-full w-full outline-hidden border-2 border-theme-color px-4"
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
      <span className="w-10 h-10 bg-theme-color/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-theme-color hover:bg-theme-color duration-200 cursor-pointer">
        <RiSearchLine />
      </span>
      {/* not functional yet */}
      {isInputFocused && (
        <SearchResultsBox
          search={search}
          searchedProducts={searchedProducts}
          defaultProducts={defaultProducts}
          isLoading={isLoading}
          handleItemClick={handleItemClick}
        />
      )}
    </div>
  );
};

export default SearchInput;
