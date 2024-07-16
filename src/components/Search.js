import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchResults } from "../utils/cacheSlice";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const dispatch = useDispatch();
  const cacheData = useSelector((store) => store.cache);
  console.log(cacheData);

  useEffect(() => {
    !searchQuery && setSearchResults([]);
    const timer = setTimeout(() => {
      if (cacheData[searchQuery]) {
        setSearchResults(cacheData[searchQuery]);
      } else {
        searchQuery && getSearchResults();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();

    setSearchResults(json[1]);

    dispatch(cacheSearchResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-gray-400 h-8 rounded-l-full w-96 pl-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSearchResults(true)}
          onBlur={() => setShowSearchResults(false)}
        />
        <button className="border border-gray-400 rounded-r-full h-8 w-12">
          🔍
        </button>
      </div>
      <ul className="fixed w-96 rounded-lg bg-gray-100">
        {showSearchResults &&
          searchResults.map((result) => (
            <li key={result} className="p-1 cursor-pointer">
              🔍 {result}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
