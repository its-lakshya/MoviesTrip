import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import UpcomingCard from "./UpcomingCard";

const UpcomingMovies = () => {
  const [UpcomingMovies, setUpcomingMovies] = useState(null);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const Json = await data.json();
    setUpcomingMovies(Json.results);
    console.log(Json.results);
  };

  if (UpcomingMovies)
    return (
      <div>
        {UpcomingMovies.map((items) => <UpcomingCard key={items.id} data={items}/>)}
        <div>Upcoming Movies</div>
      </div>
    );
};

export default UpcomingMovies;
