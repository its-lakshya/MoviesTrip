import React, { useEffect, useState } from "react";
import { options, IMAGES_BASE_URL } from "../Constants";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  // let [popularMoviesNumber, setPopularMoviesNumber] = useState(null);

  useEffect(() => {
    getPopularMovies();
  }, []);

  // useEffect (()=>{
  //   const timer = setInterval(() => {
  //     setPopularMoviesNumber(Math.floor(Math.random(20)))
  //     // console.log(Math.floor(Math.random()*20))
  //     console.log(popularMoviesNumber)
  //   }, 2000);

  //   // return () => clearTimeout(timer)

  // },[popularMoviesNumber])

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1",
      options
    );
    const Json = await data.json();
    setPopularMovies(Json.results);
    // console.log(Json.results);
  };

  // const getPopularMoviesDetails = async () => {
  //   const details = await fetch(
  //     "https://api.themoviedb.org/3/movie/" +
  //       popularMovies[0].id +
  //       "?language=en-US",
  //     options
  //   );
  //   const JsonDetails = await details.json();
  //   setPopularMoviesdetails(JsonDetails);
  //   console.log(JsonDetails);
  //   console.log(popularMoviesdetails);
  // };

  if (popularMovies)
    return (
      <div>
        <div className="w-full h-screen bg-gradient-to-r from-black to-red-700 flex flex-row items-center">
          <div className=" w-[40rem] h-[30rem] ml-28">
            <div className="flex flex-col mt-10 gap-6">
              <h1 className="font-bold text-7xl">
                {popularMovies[0].original_title}
              </h1>

              <div className="font-thin">{popularMovies[0].overview}</div>
              <div>
                <span className="text-red-700 text-xl font-normal">
                  Ratings{" "}
                </span>
                <span className="font-medium">
                  {popularMovies[0].vote_average}
                </span>
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal">
                  Language{" "}
                </span>
                <span className="font-medium uppercase">
                  {popularMovies[0].original_language}
                </span>
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal">
                  Release{"  "}
                </span>
                <span className="font-medium">
                  {popularMovies[0].release_date}
                </span>
              </div>
            </div>
          </div>
          {/* <div className=''> */}
          <img
            className="ml-56 h-3/4 border border-white p-3 bg-gradient-to-l from-black to-white shadow-2xl shadow-black "
            alt="BackgroundImage"
            src={IMAGES_BASE_URL + popularMovies[0].poster_path}
          />
          {/* </div> */}
        </div>
      </div>
    );
};

export default PopularMovies;
