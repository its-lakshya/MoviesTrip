import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import TopRatedCard from "./TopRatedCard";

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
  };

  useEffect(() => {
    getTopRatedMovies();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const Json = await data?.json();
    setTopRatedMovies(Json?.results);
  };

  if (topRatedMovies)
    return (
      <div className="mx-28 mt-40">
        <div className="h-1 "></div>
        {scrollPosition >= 700 && (
          <div className="animate-topComingTopRated opacity-0">
            <div className="flex justify-center mb-8 text-[2.5rem] font-normal">
              Top Rated Movies
            </div>
            <div className="flex justify-start overflow-x-auto overflow-y-clip scrollbar-hide snap-x scroll-smooth box-border">
              {topRatedMovies.map((items) => (
                <TopRatedCard key={items?.id} data={items} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default TopRatedMovies;
