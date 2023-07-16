import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import PopularSeriesCard from "./PopularSeriesCard";

const PopularSeries = () => {
  const [trending, setTrending] = useState(null);

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
  };

  useEffect(() => {
    getTrending();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    );
    const Json = await data?.json();
    setTrending(Json?.results);
  };

  if (trending)
    return (
      <div className="mx-28 mt-40 max-md:mx-12 max-lg:mx-16 max-sm:mx-4">
        <div className="h-1 "></div>
        {scrollPosition >= 1100 && (
          <div className="animate-topComingPopularSeries opacity-0 ">
            <div className="flex justify-center mb-8 text-[2.5rem] font-normal max-lg:text-[2.2rem] max-md:text-[2rem] max-sm:text-[1.4rem] max-lg:mb-2">
              Popular Series
            </div>
            <div className="hover:animate-popularSeriesBgChange py-4 max-lg:py-2 flex flex-wrap justify-center   scrollbar-hide snap-x scroll-smooth box-border ">
              {trending.map((items) => (
                <PopularSeriesCard key={items?.id} data={items} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default PopularSeries;
