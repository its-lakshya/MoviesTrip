import React from "react";
import { IMAGES_BASE_URL } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchDetails } from "../Utils/detailsSlice";

const SearchResultsCard = ({ data }) => {

  const dataType = useSelector((store) => store.tagSearch.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailsHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("/details");
  };

  // if(type)
  return (
    <div
      className="w-60 h-[28rem] mx-4 flex flex-col gap-y-4 border-y-4 border-red-700 hover:animate-popularSeriesCard hover:shadow-red-700 hover:shadow-lg"
      onClick={() => detailsHandler({ data: { type:dataType.type, id: data.id } })}
    >
      <img className="" alt="bgImg" src={IMAGES_BASE_URL + data.poster_path} />
      <div className="font-normal capitaliz px-2 ">
        {data.original_title && (
          <>
            <div className="text-2xl font-normal overflow-clip h-8">
              {data.title}
            </div>
          </>
        )}
        {data.original_name && (
          <>
            <div className="text-2xl font-normal overflow-hidden h-8">
              {data.name}
            </div>
          </>
        )}
        <div className="text-sm">{data.vote_average}</div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
