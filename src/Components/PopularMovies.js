import React, { useEffect, useState } from "react";
import { options, IMAGES_BASE_URL } from "../Constants";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  let [popularMoviesNumber, setPopularMoviesNumber] = useState(1);
  // const [flag, setFlag] = useState(false);

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPopularMoviesNumber(Math.floor(Math.random() * 20));
      // console.log(popularMoviesNumber);
      // flag && setFlag(false);
      // !flag && setFlag(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [popularMoviesNumber]);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    );
    const Json = await data.json();
    setPopularMovies(Json.results);
    // console.log(Json);
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

  // if (popularMovies)
    return (
      <div className="mb-24">
        <div className="w-full h-screen bg-gradient-to-r from-black to-red-700">
          {popularMovies && <div className="h-screen flex flex-row items-center opacity-0 animate-popularMovies">
            <div className=" w-[40rem] h-[30rem] ml-28 cursor-pointer  flex flex-col justify-center ">
              <div className="flex flex-col mt-10 gap-6">
                <h1 className="font-bold font-sans  text-7xl">
                  {popularMovies[popularMoviesNumber].original_title}
                </h1>

                <div className="font-thin text-lg">
                  {popularMovies[popularMoviesNumber].overview}
                </div>
                <div>
                  <span className="text-red-700 text-xl font-normal">
                    Ratings{" "}
                  </span>
                  <span className="font-medium">
                    {popularMovies[popularMoviesNumber].vote_average}
                  </span>
                </div>
                <div>
                  <span className="text-red-700 text-xl font-normal">
                    Language{" "}
                  </span>
                  <span className="font-medium uppercase">
                    {popularMovies[popularMoviesNumber].original_language}
                  </span>
                </div>
                <div>
                  <span className="text-red-700 text-xl font-normal">
                    Release{"  "}
                  </span>
                  <span className="font-medium">
                    {popularMovies[popularMoviesNumber].release_date}
                  </span>
                </div>
              </div>
            </div>
            <img
              className="cursor-pointer ml-56 h-3/4 border border-transparent p-3  bg-gradient-to-l from-black to-red-700 shadow-xl shadow-black transition duration-300 ease-in-out hover:scale-110 hover:shadow-white hover:shadow-lg hover:z-10"
              alt="BackgroundImage"
              src={
                IMAGES_BASE_URL + popularMovies[popularMoviesNumber].poster_path
              }
            />
          </div>} 
          
        </div>
      </div>
    );
};

export default PopularMovies;
