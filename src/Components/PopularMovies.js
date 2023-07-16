import React, { useEffect, useState} from "react";
import { options, IMAGES_BASE_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { searchDetails } from "../Utils/detailsSlice";
import { useNavigate } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";


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
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPopularMoviesNumber(Math.floor(Math.random() * 20));
    }, 1000);

    return () => {clearTimeout(timer)
    };
  }, [popularMoviesNumber]);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const Json = await data?.json();
    setPopularMovies(Json?.results);
  };
  return (
    <div className="min-w-screen h-screen bg-gradient-to-r from-black to-red-700">
      <div className={"h-screen mx-28 flex flex-row shrink justify-center items-center max-md:mx-12 max-lg:mx-16 max-sm:mx-4"}>
      {popularMovies && (
        <div className='flex w-full shrink gap-x-16 max-md:gap-10 max-sm:gap-4 max-sm:flex-col-reverse max-sm:align-middle justify-evenly items-center overflow-hidden z-0'>
          <div
            className="max-w-[40rem] max-xl:w-[30rem] overflow-hidden shrink cursor-pointer align-middle max-sm:items-center max-sm:w-[30rem] 
            flex-col flex-wrap  justify-center  transition duration-300 ease-in-out hover:scale-110 hover:shadow-black 
            hover:shadow-lg hover:z-10 "
            onClick={() =>
              detailsHandler({
                data: {
                  type: "movie",
                  id: popularMovies[popularMoviesNumber]?.id,
                },
              })
            }
          >
            <div className="flex flex-col gap-6 max-xl:gap-4 max-lg:gap-3 max-md:gap-1 max-sm:gap-0 max-sm:flex-shrink max-sm:max-w-96 max-sm:flex-wrap max-sm:items-center">
              <h1 className=" h-[9.5rem] font-bold font-sans border text-7xl max-xl:text-6xl max-xl:h-[8rem] max-lg:text-5xl max-lg:h-[6.4rem] max-md:text-4xl max-md:h-[5.3rem] max-sm:text-base max-sm:h-[2rem] max-sm:flex max-sm:w-60 max-sm:justify-center  max-sm:shrink overflow-hidden">
                {popularMovies[popularMoviesNumber]?.title}
              </h1>

              <div className="font-thin text-lg h-[10.5rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-md:leading-6 max-md:line-clamp-[7] line-clamp-6 max-sm:text-[0.9rem] max-sm:h-[6rem] max-sm:line-clamp-[8] max-sm:flex max-sm:w-[18rem] max-sm:shrink max-sm:text-justify">
                {popularMovies[popularMoviesNumber]?.overview}
              </div>
              <div>
              <div className="flex gap-x-2">
                <span className="text-red-700 text-xl font-normal max-lg:text-[1.2rem] max-md:text-[1.15rem] max-sm:text-[1rem]">
                  Ratings{" "}
                </span>
                <span className="font-medium flex gap-x-1 mt-[0.20rem] max-lg:text-[0.9rem] max-lg:mt-[0.3rem] max-md:text-[0.87rem] max-sm:text-[0.7rem] max-sm:mt-[0.45rem]">
                  {popularMovies[popularMoviesNumber]?.vote_average}
                  <BsFillStarFill className="mt-[0.35rem]  text-red-700 text-sm max-lg:text-[0.9rem] max-lg:mt-[0.18rem] max-sm:text-[0.7rem]" />
                </span>
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal max-lg:text-[1.2rem] max-md:text-[1.15rem] max-sm:text-[1rem]">
                  Language{" "}
                </span>
                <span className="font-medium uppercase max-lg:text-[0.9rem] max-md:text-[0.87rem] max-sm:text-[0.7rem] max-sm:mt-[0.45rem]">
                  {popularMovies[popularMoviesNumber]?.original_language}
                </span>
              </div>
              <div>
                <span className="text-red-700 text-xl font-normal max-lg:text-[1.2rem] max-md:text-[1.15rem] max-sm:text-[1rem]">
                  Release{"  "}
                </span>
                <span className="font-medium max-lg:text-[0.9rem] max-md:text-[0.87rem] max-sm:text-[0.7rem] max-sm:mt-[0.45rem] ">
                  {popularMovies[popularMoviesNumber]?.release_date}
                </span>
              </div>
            </div>
            </div>
          </div>
          <div className=''>
          <img
            className="max-xl:w-[20rem] w-96 max-md:w-[18rem] max-lg:p-2 max-md:p-1 max-sm:w-[12rem] cursor-pointer border border-transparent p-3  bg-gradient-to-l from-black to-red-700 shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-black hover:shadow-lg "
            alt="BackgroundImage"
            src={
              IMAGES_BASE_URL + popularMovies[popularMoviesNumber]?.poster_path
            }
            onClick={() =>
              detailsHandler({
                data: {
                  type: "movie",
                  id: popularMovies[popularMoviesNumber]?.id,
                },
              })
              
            }
          />
          </div>
          </div>
          )}
          </div>
    </div>
  );
};

export default PopularMovies;
