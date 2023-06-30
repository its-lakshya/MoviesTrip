import React from "react";
import { IMAGES_BASE_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchDetails } from "../Utils/detailsSlice";

const UpcomingCard = ({ data }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const detailsHandler = ({data}) => {
    dispatch(searchDetails(data))
    navigate('details')    
  }

  return (
    <div className="animate-horizontalAutoScrollRight-infinite">
      <div className="scroll-none cursor-pointer w-48 box-border flex flex-col justify-end  mx-4 snap-start  hover:scale-95 hover:shadow-red-700 hover:shadow-lg"
      onClick={()=>detailsHandler({
        data:{type:'movie', id:data.id}
      })}
      >
        <img
          className=""
          alt="bgImg"
          src={IMAGES_BASE_URL + data.poster_path}
        />
        <div className="bg-gradient-to-t font-normal capitalize from-black to-transparent pl-2 transition-all ease-in-out delay-150 hover:bg-gradient-to-t hover:from-transparent hover:to-transparent">
          <div className="text-xl font-normal overflow-hidden h-8">
            {data.title}
          </div>
          <div className="text-xs">{data.vote_average}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
