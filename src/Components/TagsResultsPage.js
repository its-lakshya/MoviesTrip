import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import { useSelector } from "react-redux";
import SearchResultsCard from "./SearchResultsCard";

const TagsResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const storeData = useSelector((store) => store?.tagSearch?.data);

  useEffect(() => {
    // getSearchResults();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [searchResults]);

  useEffect(() => {
    getSearchResults();
    // console.log('changed')
  }, [storeData]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const getSearchResults = async () => {
    const newItems = []
    newItems.push(page)
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        storeData?.type +
        "/" +
        storeData?.extra +
        "?language=en-US&page=" +
        page,
      options
    );
    const Json = await data?.json();
    setSearchResults([...Json?.results,newItems]);
    // setSearchResults(prevResult => [...prevResult, ...Json?.results]);
  };


  return (
    <div className="bg-black bg-opacity-95 w-full min-h-screen text-white pt-16">
      <div className="mx-28 ">
        {/* {console.log(searchResults, page)} */}
        {searchResults && (
          <div className="animate-topComingSearchResultsPage mt-80 opacity-0">
            <div className="mt-12 h-16 bg-gradient-to-b from-red-700  to-black  flex justify-center items-start font-normal text-4xl">
              {storeData?.title}
            </div>
            <div className="w-full flex flex-wrap justify-center snap-x gap-y-12 scroll-smooth box-border mt-24">
              {searchResults.map((items, newItems) => (
                <div key={newItems}>
                <SearchResultsCard key={items?.id} data={items} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagsResultsPage;
