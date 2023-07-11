import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
import TopRatedMovies from "./TopRatedMovies";
import PopularSeries from "./PopularSeries";

const Body = () => {
  return (
    <div className="bg-black bg-opacity-95">
      <PopularMovies />
      <UpcomingMovies />
      <TopRatedMovies />
      <PopularSeries />
    </div>
  );
};

export default Body;

// Fetching the data method
// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
