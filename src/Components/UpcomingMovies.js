import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import UpcomingCard from "./UpcomingCard";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
  };

  useEffect(() => {
    getUpcomingMovies();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const Json = await data?.json();
    setUpcomingMovies(Json?.results);
  };

  if (upcomingMovies)
    return (
      <div className="mx-28 mt-56">
        <div className="h-1 "></div>
        {scrollPosition >= 148 && (
          <div className="animate-topComingUpcoming opacity-0">
            <div className="flex justify-center mb-8 text-[2.5rem] font-normal">
              Upcoming Movies
            </div>
            <div className="flex overflow-x-auto overflow-y-clip scrollbar-hide justify-start snap-x scroll-smooth box-border  ">
              {upcomingMovies.map((items) => (
                <UpcomingCard key={items?.id} data={items} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default UpcomingMovies;
