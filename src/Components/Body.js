import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
import TopRatedMovies from "./TopRatedMovies";

const Body = () => {
  

  
  // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));


  return (
    <div className='bg-black bg-opacity-95 '>
      <PopularMovies/>
      <UpcomingMovies/>
      <TopRatedMovies/>
    </div>
  );
};

export default Body;
