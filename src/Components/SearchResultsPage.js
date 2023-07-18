import React, { useState, useEffect } from "react";
import SearchResultsCard from "./SearchResultsCard";
import { useSelector } from "react-redux";
import { options } from "../Constants";

const SearchResultsPage = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const searchData = useSelector((store) => store?.search?.data);
  const pageData = useSelector((store) => store?.tagSearch?.pageData);

  useEffect(() => {
    setPage(pageData);
    getSearchDetails(1);
  }, [searchData]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [searchResults]);

  useEffect(() => {
    if (page > 1) {
      getSearchDetails(page);
    }
  }, [page]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight-200) {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev);
    }
  };

  const getSearchDetails = async (page) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        searchData +
        "&include_adult=false&language=en-US&page=" +
        page,
      options
    );
    const Json = await data?.json();
    if (page > 1) {
      setSearchResults((prevResult) => [...prevResult, ...Json?.results]);
    } else {
      setSearchResults([...Json?.results]);
    }
  };

  return (
    <div className="bg-black bg-opacity-95 w-full min-h-screen text-white pt-16">
      <div className="mx-28 max-xl:mx-20 max-lg:mx-16 max-md:mx-12  max-sm:mx-4">
        {searchResults && (
          <div className="animate-topComingSearchResultsPage mt-80 opacity-0">
            <div className="mt-12 flex justify-center text-sm font-normal max-md:text-[0.83rem] max-sm:text-[0.7rem] ">
              Showing Results for
            </div>
            <div className="capitalize h-16 max-xl:h-14 max-lg:h-12 max-md:h-10 max-sm:h-6 bg-gradient-to-b from-red-700  to-black  flex justify-center items-center font-normal text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              {data?.title || searchData}
            </div>
            <div className="w-full flex flex-wrap justify-center  snap-x gap-y-12 max-xl:gap-y-10 max-lg:gap-y-8 max-md:gap-y-6 max-sm:gap-y-4 scroll-smooth box-border mt-24 max-xl:mt-20 max-lg:mt-16 max-md:mt-12 max-sm:mt-6">
              {searchResults.map((items) => {
                if (items?.original_title && items?.media_type === "movie") {
                  return (
                    <SearchResultsCard
                    key={items?.id}
                    data={items}
                    pageData={page}
                    type="movie"
                    />
                    );
                } else if (items?.original_name && items?.media_type === "tv") {
                  return (
                    <SearchResultsCard
                      key={items?.id}
                      data={items}
                      pageData={page}
                      type="tv"
                    />
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
