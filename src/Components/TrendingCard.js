import React from "react";
import { IMAGES_BASE_URL } from "../Constants";

const TrendingCard = ({ data }) => {
  // console.log(data.id)
  return (
    <div className="hover:animate-trandingCard ">
      <div
        className="scroll-none cursor-pointer w-48 h-80 box-border flex flex-col justify-end  mx-4 snap-start hover:rounded-md  hover:shadow-red-700 hover:shadow-xl"
        style={{
          backgroundImage: `url(${IMAGES_BASE_URL + data.poster_path})`,
        }}
      >
        <div className="bg-gradient-to-t font-normal capitalize from-black to-transparent pl-2 pt-56 h-72 transition-all ease-in-out delay-150 hover:bg-gradient-to-t hover:from-transparent hover:to-transparent">
          <div className="text-xl font-normal overflow-hidden h-8">{data.original_title}</div>
          <div className='text-xs'>{data.vote_average}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
