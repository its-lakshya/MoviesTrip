import React, { useEffect, useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tagSearch } from "../Utils/tagSearchSlice";
import { options } from "../Constants";
import { search } from "../Utils/searchSlice";
import { searchDetails } from "../Utils/detailsSlice";
// import SearchResultsPage from "./SearchResultsPage";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");

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
    dispatch(search(data))
    navigate("/search");
    // console.log(searchResults)
  };

  return (
    <div className="fixed top-0 bg-opacity-95 bg-black h-16 w-full z-10 flex flex-col">
      <div className="flex justify-between mx-28 pt-2">
        <div className="flex items-center cursor-pointer">logo</div>
        <div className="flex justify-evenly w-96 [&>*]:flex [&>*]:[&>*]:mt-1.5 ml-64 items-center  [&>span]:cursor-pointer font-light text-lg">
          <Link to="/" className="hover:text-red-600 hover:font-normal">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-600 hover:font-normal">
            About
          </Link>
          <div className="hover:text-red-600 hover:font-normal cursor-pointer relative group flex flex-col px-2">
            Tags
            <ul className="w-60 h-[16rem]  bg-black text-white font-light [&>*]:my-2  [&>*]:px-4   absolute m-[2.5rem] py-4 px-3 invisible group-hover:visible hover:visible ">
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
          <div className="flex justify-between ">
            <form className="mt-3" onSubmit={() => <div></div>}>
              <input
                className="bg-red-700 w-52 bg-opacity-20 font-light px-3 rounded-lg border-b-2 border-red-700 peer focus:outline-none focus:border-red-700 focus:border"
                value={searchValue}
                onChange={(e) => {
                  // console.log(searchValue);
                  return setSearchValue(e.target.value);
                }}
                type="text"
              />
              {searchValue && (
                <div
                  className="overflow-y-scroll scrollbar-hide w-[13rem] invisible peer-focus:visible hover:visible
                [&>*]:bg-gradient-to-r [&>*]:from-red-700 [&>*]:to-black flex flex-col gap-y-1 [&>*]:cursor-pointer
                rounded-lg h-56 bg-black absolute mt-2 text-base font-light px-3"
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
            <div className="flex justify-evenly items-center text-xl [&>*]:cursor-pointer ">
              <BiSearch
                className="hover:text-red-800 text-2xl "
                onClick={() => searchButtonClickHandler(searchValue)}
              />
              <div className="bg-black w-12 h-12 rounded-3xl flex justify-center items-center hover:text-red-800 text-2xl">
                <BiUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
