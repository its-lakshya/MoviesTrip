import React from "react";
import { IMAGES_BASE_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchDetails } from "../Utils/detailsSlice";
import { BsFillStarFill } from "react-icons/bs";

const PopularSeriesCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailsHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("details");
  };

  return (
    <div
      className="hover:animate-popularSeriesCard my-6 border-l-4 border-red-700 mx-4"
      onClick={() => detailsHandler({ data: { type: "tv", id: data?.id } })}
    >
      <div className="scroll-none cursor-pointer w-48 box-border flex flex-col justify-start snap-start hover:rounded-md  hover:shadow-red-700 hover:shadow-xl">
        <img
          className=""
          alt="bgImg"
          src={IMAGES_BASE_URL + data?.poster_path}
        />
        <div className="bg-gradient-to-t font-normal capitalize -mt-12 from-black to-transparent pl-2   transition-all ease-in-out delay-150 hover:bg-gradient-to-t hover:from-transparent hover:to-transparent">
          {data?.original_title && (
            <div className="text-xl font-normal overflow-hidden h-8">
              {data?.title}
            </div>
          )}
          {data?.original_name && (
            <div className="text-xl font-normal overflow-hidden h-8">
              {data?.name}
            </div>
          )}
          <div className="text-xs flex gap-x-1">
            {data?.vote_average}
            <BsFillStarFill className="mt-[0.13rem] text-red-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSeriesCard;
