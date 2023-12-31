import React, { useState, useEffect } from "react";
import { IMAGES_BASE_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchDetails } from "../Utils/detailsSlice";
import { BsFillStarFill } from "react-icons/bs";

const RecommendationCard = ({ data }) => {
  const [type, setType] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailsHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("/details");
  };

  useEffect(() => {
    if (data?.original_title) {
      setType("movie");
    } else {
      setType("tv");
    }
  }, []);

  if (type && data?.poster_path)
    return (
      <div
        className="hover:animate-popularSeriesCard my-6 border-l-4 border-red-700 mx-4 max-lg:my-4 max-lg:mx-2 "
        onClick={() => detailsHandler({ data: { type: type, id: data?.id } })}
      >
        <div className=" scroll-none cursor-pointer w-[11rem] max-lg:w-[9rem] max-sm:w-[7rem] box-border flex flex-col justify-start snap-start hover:rounded-md  hover:shadow-red-700 hover:shadow-xl">
          <img
            className=""
            alt="bgImg"
            src={IMAGES_BASE_URL + data?.poster_path}
          />
          <div className=" bg-gradient-to-t font-normal capitalize h-12 -mt-12 from-black to-transparent pl-2 max-md:pl-1 transition-all ease-in-out delay-150 hover:bg-gradient-to-t hover:from-transparent hover:to-transparent">
            {data?.original_title && (
              <div className="text-xl font-normal max-md:font-semibold overflow-hidden h-8 max-sm:h-6 max-md:text-lg max-sm:text-[0.9rem]">
                {data?.title}
              </div>
            )}
            {data?.original_name && (
              <div className="text-xl font-normal max-md:font-semibold overflow-hidden h-8 max-sm:h-6 max-md:text-lg max-sm:text-[0.9rem]">
                {data?.name}
              </div>
            )}
            <div className="text-xs flex gap-x-1 ">
              {Math.round(data?.vote_average*10)/10}
              <BsFillStarFill className="mt-[0.13rem] text-red-700" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default RecommendationCard;
