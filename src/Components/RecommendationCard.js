import React, { useState, useEffect } from "react";
import { IMAGES_BASE_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchDetails } from "../Utils/detailsSlice";

const RecommendationCard = ({ data }) => {
  const [type, setType] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailsHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("/details");
  };

  useEffect(() => {
    if (data.original_title) {
      setType("movie");
    } else {
      setType("tv");
    }
  }, []);

  if (type && data.poster_path)
    return (
      <div
        className="hover:animate-popularSeriesCard my-6 border-l-4 border-red-700 mx-4"
        onClick={() => detailsHandler({ data: { type: type, id: data.id } })}
      >
        <div className="scroll-none cursor-pointer w-[11rem] box-border flex flex-col justify-start snap-start hover:rounded-md  hover:shadow-red-700 hover:shadow-xl">
          <img
            className=""
            alt="bgImg"
            src={IMAGES_BASE_URL + data.poster_path}
          />
          <div className="bg-gradient-to-t font-normal capitalize -mt-12 from-black to-transparent pl-2 transition-all ease-in-out delay-150 hover:bg-gradient-to-t hover:from-transparent hover:to-transparent">
            {data.original_title && (
              <div className="text-xl font-normal overflow-hidden h-8">
                {data.title}
              </div>
            )}
            {data.original_name && (
              <div className="text-xl font-normal overflow-hidden h-8">
                {data.name}
              </div>
            )}
            <div className="text-xs">{data.vote_average}</div>
          </div>
        </div>
      </div>
    )
};

export default RecommendationCard;
