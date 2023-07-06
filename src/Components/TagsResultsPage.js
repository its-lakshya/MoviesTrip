import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import { useSelector } from "react-redux";
import SearchResultsCard from "./SearchResultsCard";

const TagsResultsPage = () => {
  const [searchResults, setSearchResults] = useState(null);

  // const [windowHeight, setWindowHeight] = useState(null);
  // const [scrollHeight, setScrollHeight] = useState(null);

  const [page, setPage] = useState(1)


  const storeData = useSelector((store) => store?.tagSearch?.data);

  useEffect(() => {
    getSearchResults();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [storeData]);

  // const handleScroll = () => {
  //   const position = window.document.body.offsetHeight;
  //   setWindowHeight(position);
  //   setScrollHeight(window.scrollY)
  //   // console.log(position)
  //   // console.log(window.scrollY)
  // };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
 
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }

  const getSearchResults = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        storeData?.type +
        "/" +
        storeData?.extra +
        "?language=en-US&page=1",
      // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    );
    const Json = await data?.json();
    setSearchResults(Json?.results);
  };

  return (
    <div className="bg-black bg-opacity-95 w-full min-h-screen text-white pt-16">
      <div className="mx-28 ">
        {searchResults && (
          <div className="animate-topComingSearchResultsPage mt-80 opacity-0">
            <div className="mt-12 h-16 bg-gradient-to-b from-red-700  to-black  flex justify-center items-start font-normal text-4xl">
              {storeData?.title}
            </div>
            <div className="w-full flex flex-wrap justify-center snap-x gap-y-12 scroll-smooth box-border mt-24">
              {searchResults.map((items) => (
                <SearchResultsCard key={items?.id} data={items} />
              ))}
            </div>
          </div>
        )}
        {(page>1) && <div>
          {console.log('ok')}
          {/* {scrollHeight + 900 > windowHeight && (
            <div>{console.log('apple')}

            </div>
          )} */}
          </div>}
      </div>
    </div>
  );
};

export default TagsResultsPage;
