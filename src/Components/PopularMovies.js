import React, { useEffect, useState } from "react";
import { options, IMAGES_BASE_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { searchDetails } from "../Utils/detailsSlice";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  let [popularMoviesNumber, setPopularMoviesNumber] = useState(11);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const detailsHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("/details");
    // console.log('clicked')
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPopularMoviesNumber(Math.floor(Math.random() * 20));
    }, 5000);

    return () => clearTimeout(timer);
  }, [popularMoviesNumber]);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    );
    const Json = await data?.json();
    setPopularMovies(Json?.results);
  };
  return (
    <div className="w-full h-screen bg-gradient-to-r from-black to-red-700">
      {popularMovies && (
        <div className="h-screen mx-28 flex flex-row  justify-center items-center opacity-0 animate-popularMovies">
          <div
            className=" w-[40rem] h-[30rem]  cursor-pointer  flex flex-col justify-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-black hover:shadow-lg hover:z-10 "
            onClick={() =>
              detailsHandler({
                data: { type: "movie", id:popularMovies[popularMoviesNumber]?.id },
              })
            }
          >
            <div className="flex flex-col mt-10 gap-6">
              <h1 className="font-bold font-sans  text-7xl">
                {popularMovies[popularMoviesNumber]?.title}
              </h1>

              <div className="font-thin text-lg">
                {popularMovies[popularMoviesNumber]?.overview}
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal">
                  Ratings{" "}
                </span>
                <span className="font-medium">
                  {popularMovies[popularMoviesNumber]?.vote_average}
                </span>
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal">
                  Language{" "}
                </span>
                <span className="font-medium uppercase">
                  {popularMovies[popularMoviesNumber]?.original_language}
                </span>
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal">
                  Release{"  "}
                </span>
                <span className="font-medium">
                  {popularMovies[popularMoviesNumber]?.release_date}
                </span>
              </div>
            </div>
          </div>
          <img
            className="cursor-pointer ml-56 h-3/4 border border-transparent p-3  bg-gradient-to-l from-black to-red-700 shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-black hover:shadow-lg hover:z-10"
            alt="BackgroundImage"
            src={
              IMAGES_BASE_URL + popularMovies[popularMoviesNumber]?.poster_path
            }
            onClick={() =>
              detailsHandler({
                data: { type: "movie", id:popularMovies[popularMoviesNumber]?.id },
              })}
          />
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
