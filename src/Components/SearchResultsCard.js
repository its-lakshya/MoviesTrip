import React, { useEffect,useState } from "react";
import { IMAGES_BASE_URL } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchDetails } from "../Utils/detailsSlice";
import { BsFillStarFill } from "react-icons/bs";

const SearchResultsCard = ({ data, type, pageData }) => {
  const dataType = useSelector((store) => store?.tagSearch?.data);
  const searchData = useSelector((store) => store?.search?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailsHandler = ({ data }) => {
    dispatch(searchDetails(data));
    navigate("/details");
  };

  useEffect(() => {
    if (pageData === 1) {
      goToTop();
    }
  }, [dataType, searchData, pageData]);


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (data?.poster_path)
    return (
      <div
        className="w-60 max-xl:w-56 max-lg:w-[11.8rem] max-md:w-[10rem] max-sm:w-[8rem] h-[28rem] max-xl:h-[26rem] max-lg:h-[22rem] 
        max-md:h-[18rem] max-sm:h-[15rem] mx-4 max-lg:mx-3 max-md:mx-2 max-sm:mx-[0.4rem] gap-y-2 flex flex-col  border-y-4
        border-red-700 hover:animate-popularSeriesCard hover:shadow-red-700 hover:shadow-lg"
        onClick={() =>
          detailsHandler({
            data: { type: dataType?.type || type, id: data?.id },
          })
        }
      >
        <img
          className="object-contain w-full h-[22.5rem] max-lg:h-[20rem] "
          alt="bgImg"
          src={IMAGES_BASE_URL + data?.poster_path}
        />
        <div className="font-normal capitaliz px-2 max-sm:px-1">
          {data?.original_title && (
            <>
              <div className="text-2xl font-normal overflow-clip h-8 max-lg:-mt-4 max-lg:text-[1.2rem] max-xl:text-[1.35rem] max-xl:-mt-6 max-md:text-[1.09rem] max-sm:text-[0.95rem]">
                {data?.title}
              </div>
            </>
          )}
          {data?.original_name && (
            <>
              <div className="text-2xl font-normal overflow-hidden h-8 max-lg:-mt-4 max-lg:text-[1.2rem] max-xl:text-[1.35rem] max-xl:-mt-6 max-md:text-[1.09rem] max-sm:text-[0.95rem] ">
                {data?.name}
              </div>
            </>
          )}
          <div className="text-sm flex gap-x-1 max-xl:text-[0.8rem] max-lg:text-[0.7rem] max-lg:-mt-1 max-md:-mt-2 max-sm:text-[0.65rem]">
            {Math.round(data?.vote_average*10)/10}
            <BsFillStarFill className="mt-[0.18rem] text-red-700 max-xl:mt-1 max-lg:mt-[0.25rem] max-sm:mt-[0.3rem]" />
          </div>
        </div>
      </div>
    );
};

export default SearchResultsCard;
