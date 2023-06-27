import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const [trending, setTrending] = useState(null);

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
    // console.log(position)
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
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    );
    const Json = await data.json();
    setTrending(Json.results);
    // console.log(Json.results);
  };

  if (trending)
    return (
      <div className="mx-28 mt-40">
        <div className="h-1 "></div>
        {scrollPosition >= 1150 && (
          <div className="animate-topComingTranding opacity-0 ">
            <div className="flex justify-center mb-8 text-[2.5rem] font-normal">
              Trending
            </div>
            <div className="hover:animate-trandingBgChange py-4 flex flex-wrap justify-center gap-y-8  scrollbar-hide snap-x scroll-smooth box-border ">
              {trending.map((items) => (
                <TrendingCard key={items.id} data={items} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default Trending;
