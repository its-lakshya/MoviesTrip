import React, { useEffect, useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tagSearch } from "../Utils/tagSearchSlice";
import { options } from "../Constants";
import { search } from "../Utils/searchSlice";
import { searchDetails } from "../Utils/detailsSlice";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";


const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [flag, setFlag] = useState(false)

  const flagHandler = () => {
    !flag && setFlag(true)
    flag && setFlag(false)
  }

  const dispatchHandeler = ({ data }) => {
    dispatch(tagSearch(data));
    navigate("/tag/search");
  };

  useEffect(() => {
    getSearchDetails();
  }, [searchValue]);

  const getSearchDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        searchValue +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const Json = await data?.json();
    setSearchResults(Json?.results);
  };

  const searchClickHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("/details");
  };

  const searchButtonClickHandler = (data) => {
    dispatch(search(data));
    navigate("/search");
  };

  return (
    <div className="fixed top-0 bg-opacity-95 bg-black h-16 w-full z-10 flex flex-col max-lg:flex-shrink">
      <div className="flex justify-between mx-28 pt-2 max-xl:mx-20 max-lg:mx-16 max-md:mx-12  max-sm:mx-4 items-start">
        <Link to="/" className="flex text-red-700 items-center cursor-pointer font-semibold text-2xl max-sm:text-xl mt-[0.5rem] max-sm:mt-[0.6rem] ">MoviesTrip</Link>
        <div className="cursor-pointer ml-4 max-sm:ml-2 mt-3 max-sm:mt-[0.75rem] 
         font-light text-lg max-sm:text-base invisible max-md:visible relative" onClick={flagHandler}>
         <div className='flex items-center'>Menu {!flag && <MdArrowDropDown className='mt-1 text-xl' />}
         {flag && <MdArrowDropUp className='mt-1 text-xl' />}</div>
         {flag && (<div className="flex-col justify-evenly [&>*]:flex mt-1 border-red-700 border-l-4 h-[5.5rem] max-sm:h-[4.5rem]
          w-16 rounded-lg items-center [&>span]:cursor-pointer bg-black bg-opacity-90 font-light text-lg max-sm:text-base">
          <Link to="/" className="hover:text-red-600 hover:font-normal ">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-600 hover:font-normal">
            About
          </Link>
          <div className="hover:text-red-600 hover:font-normal cursor-pointer relative group flex flex-col ">
            Tags
            <ul className="w-44 h-[13rem]  bg-black text-white font-light [&>*]:my-2 [&>*]:px-2 absolute mt-7 max-sm:mt-6
            py-1 px-3 invisible group-hover:visible hover:visible text-base">
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "movie",
                      extra: "popular",
                      id: "",
                      title: "Popular Movies",
                    },
                  })
                }
              >
                Popular Movies
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "movie",
                      extra: "upcoming",
                      id: "",
                      title: "Upcoming Movies",
                    },
                  })
                }
              >
                Upcoming Movies
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "movie",
                      extra: "top_rated",
                      id: "",
                      title: "Top Rated Movies",
                    },
                  })
                }
              >
                Top Rated Movies
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "tv",
                      extra: "airing_today",
                      id: "",
                      title: "Airing today",
                    },
                  })
                }
              >
                Airing Today
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "tv",
                      extra: "popular",
                      id: "",
                      title: "Popular Series",
                    },
                  })
                }
              >
                Popular Series
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "tv",
                      extra: "top_rated",
                      id: "",
                      title: "Top Rated Series",
                    },
                  })
                }
              >
                Top Rated Series
              </li>
            </ul>
          </div>
        </div>)}
         </div> 

        <div className="max-md:invisible flex justify-evenly w-96 [&>*]:flex [&>*]:[&>*]:mt-1.5 mt-3 max-sm:mt-[0.6rem] 
        items-center  [&>span]:cursor-pointer font-light text-lg max-sm:text-[0.1rem] max-md:w-60  ">
          <Link to="/" className="hover:text-red-600 hover:font-normal">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-600 hover:font-normal">
            About
          </Link>
          <div className="hover:text-red-600 hover:font-normal cursor-pointer relative group flex flex-col ">
            Tags
            <ul className="w-60 h-[16rem] bg-black text-white font-light [&>*]:my-2 [&>*]:px-4 absolute mx-[2.2rem] py-4 px-3 invisible group-hover:visible hover:visible ">
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "movie",
                      extra: "popular",
                      id: "",
                      title: "Popular Movies",
                    },
                  })
                }
              >
                Popular Movies
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "movie",
                      extra: "upcoming",
                      id: "",
                      title: "Upcoming Movies",
                    },
                  })
                }
              >
                Upcoming Movies
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "movie",
                      extra: "top_rated",
                      id: "",
                      title: "Top Rated Movies",
                    },
                  })
                }
              >
                Top Rated Movies
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "tv",
                      extra: "airing_today",
                      id: "",
                      title: "Airing today",
                    },
                  })
                }
              >
                Airing Today
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "tv",
                      extra: "popular",
                      id: "",
                      title: "Popular Series",
                    },
                  })
                }
              >
                Popular Series
              </li>
              <li
                className="hover:animate-tagsBgChange"
                onClick={() =>
                  dispatchHandeler({
                    data: {
                      type: "tv",
                      extra: "top_rated",
                      id: "",
                      title: "Top Rated Series",
                    },
                  })
                }
              >
                Top Rated Series
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  w-72 ">
          <div className="flex justify-between max-sm:justify-center ">
            <form
              className="mt-3"
              onSubmit={(event) => {
                event.preventDefault();
                searchButtonClickHandler(searchValue);
              }}
            >
              <input
                className="bg-red-700 w-52 bg-opacity-20 font-light px-3 rounded-lg border-b-2 border-red-700 peer 
                focus:outline-none focus:border-red-700 focus:border max-sm:w-28 max-sm:text-[0.95rem]"
                value={searchValue}
                onChange={(e) => {
                  return setSearchValue(e.target.value);
                }}
                type="text"
              />
              {searchValue && (
                <div
                  className="overflow-y-scroll scrollbar-hide w-[13rem] max-sm:w-[11rem] max-sm:-ml-6 invisible peer-focus:visible hover:visible
                [&>*]:bg-gradient-to-r [&>*]:from-red-700 [&>*]:to-black flex flex-col gap-y-1 [&>*]:cursor-pointer
                rounded-lg h-56 bg-black absolute mt-2 text-base font-light px-3 max-sm:text-[0.9rem]"
                >
                  {searchResults.map((items) => {
                    if (
                      items?.original_title &&
                      items?.media_type === "movie"
                    ) {
                      return (
                        <div
                          className="hover:border-red-700 hover:border-2"
                          key={items?.id}
                          onClick={() =>
                            searchClickHandler({
                              data: { type: "movie", id: items?.id },
                            })
                          }
                        >
                          {items?.title}
                        </div>
                      );
                    } else if (
                      items?.original_name &&
                      items?.media_type === "tv"
                    ) {
                      return (
                        <div
                          className="hover:border-red-700 hover:border-2"
                          key={items?.id}
                          onClick={() =>
                            searchClickHandler(
                              { data: { type: "tv", id: items?.id } },
                              items
                            )
                          }
                        >
                          {items?.name}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              )}
            </form>
            <div className="flex justify-evenly items-center text-xl [&>*]:cursor-pointer mt-3 gap-6 max-sm:mt-4 max-sm:gap-1">
              <BiSearch
                className="hover:text-red-800 text-2xl max-sm:text-base "
                onClick={() => searchButtonClickHandler(searchValue)}
              />
              {/* <div className="bg-black w-12 h-12 rounded-3xl flex justify-center items-center hover:text-red-800 text-2xl"> */}
                <BiUser className='max-sm:text-base' />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
