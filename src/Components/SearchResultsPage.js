import React, { useState, useEffect } from "react";
import SearchResultsCard from "./SearchResultsCard";
import { useSelector } from "react-redux";
import { options } from "../Constants";

const SearchResultsPage = ({ data }) => {
  const [searchResults, setSearchResults] = useState(null);
  const searchData = useSelector((store) => store?.search?.data)
  
  useEffect(() => {
    getSearchDetails();
  }, [searchData]);

  const getSearchDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        searchData +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const Json = await data?.json();
    setSearchResults(Json?.results);
    console.log(Json?.results)
  };

  return (
    <div className="bg-black bg-opacity-95 w-full min-h-screen text-white pt-16">
      <div className="mx-28 ">
        {searchResults && (
          <div className="animate-topComingSearchResultsPage mt-80 opacity-0">
              <div className='mt-12 flex justify-center text-lg font-normal'>Showing Results for</div>
            <div className="h-16 bg-gradient-to-b from-red-700  to-black  flex justify-center items-start font-normal text-4xl">
              {data?.title || searchData}
            </div>
            <div className="w-full flex flex-wrap justify-center snap-x gap-y-12 scroll-smooth box-border mt-24">
              {searchResults.map((items) => {
                if (items?.original_title && items?.media_type === "movie") {
                  return (
                    <SearchResultsCard key={items?.id} data={items} type='movie'/>
                  );
                } else if (items?.original_name && items?.media_type === "tv") {
                  return (
                    <SearchResultsCard key={items?.id} data={items} type='tv'/>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
