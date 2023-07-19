import React, { useState, useEffect } from "react";
import { IMAGES_BASE_URL, options } from "../Constants";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BackdropCard from "./BackdropCard";
import RecommendationCard from "./RecommendationCard";
import { BsFillStarFill } from "react-icons/bs";

const DetailsPage = () => {
  const detailsData = useSelector((store) => store?.details?.detailsData);

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
  };

  const [details, setDetails] = useState(null);
  const [images, setImages] = useState(null);
  const [recommendation, setReommendation] = useState(null);

  useEffect(() => {
    getDetails();
    getImages();
    getRecommendation();
  }, [details]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    goToTop();
  }, [detailsData]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        detailsData?.type +
        "/" +
        detailsData?.id +
        "?language=en-US",
      options
    );
    const Json = await data?.json();
    setDetails(Json);
  };

  const getImages = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        detailsData?.type +
        "/" +
        detailsData?.id +
        "/images",
      options
    );
    const Json = await data?.json();
    setImages(Json);
  };

  const getRecommendation = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        detailsData?.type +
        "/" +
        detailsData?.id +
        "/recommendations?language=en-US&page=1=en-US",
      options
    );
    const Json = await data?.json();
    setReommendation(Json);
  };

  return (
    <div className="bg-black bg-opacity-95 w-full min-h-screen">
      {details && images && recommendation && (
        <div className="mx-28 max-xl:mx-20 max-lg:mx-16 max-md:mx-12 max-sm:mx-4 flex flex-col">
          <div className="max-sm:-mt-0 w-full mt-16 h-screen   overflow-hidden flex flex-row max-lg:flex-col justify-between items-center gap-x-8 max-xl:gap-x-8 max-md:justify-evenly ">
            <div className='max-sm:mx-12  h-full flex justify-between items-center gap-x-8 w-2/3 max-lg:h-2/3 max-xl:w-3/4 max-lg:w-full max-lg:justify-center max-sm:h-2/4'>
            {details?.original_title && (
              <div className="text-6xl  max-xl:text-5xl  max-sm:text-3xl w-96 max-xl:w-[22rem] max-lg:w-[20rem] max-md:w-[18rem] max-sm:w-[14rem] font-normal hover:bg-gradient-to-r hover:form-10% hover:to-70% hover:from-red-700 hover:to-transparent ">
                {details?.title}
              </div>
            )}
            {details?.original_name && (
              <div className="text-6xl  max-xl:text-5xl  max-sm:text-3xl w-96 max-xl:w-[22rem] max-lg:w-[20rem] max-md:w-[18rem] max-sm:w-[14rem] font-normal hover:bg-gradient-to-r hover:form-10% hover:to-70% hover:from-red-700 hover:to-transparent ">
                {details?.name}
                </div>
            )}
            <div className='h-full  w-full object-center justify-end flex items-center  max-lg:w-4/5 max-lg:justify-center '>
            <img
              className="h-full object-contain object-right  hover:shadow-xl hover:shadow-red-700 max-lg:hover:shadow-none "
              alt="bgImg"
              src={IMAGES_BASE_URL + images?.posters[0]?.file_path}
            />
            </div>
            </div>
            <div className=" flex flex-col w-1/4 items-center  max-lg:w-full max-lg:h-1/4 max-sm:-mt-16 ">
              <div className="w-full max-h-[36rem] scrollbar-hide overflow-y-scroll border-red-700 
              border-x-4 border-y-0 flex flex-col  border max-xl:h-3/4 max-lg:flex-row  max-lg:border-y-4  max-lg:items-center max-sm:border-y-2 max-lg:border-x-0 max-lg:h-[9.5rem]  max-sm:h-[8.5rem] max-lg:overflow-x-scroll">
                {images?.backdrops.map((items) => (
                  <BackdropCard key={items?.file_path} data={items} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-56 w-full max-md:h-40"></div>

          {scrollPosition >= 150 && (
            <div className="max-sm:mx-4 flex justify-between mt-12 gap-x-20 animate-topComingUpcoming scroll-smooth snap-x opacity-0 max-lg:justify-center">
              <div className="text-base max-lg:text-[0.9rem] font-light w-2/4 border-red-700 border-l-8 pl-2 ">
                <div className="text-4xl font-normal mb-2 max-lg:text-3xl">
                  Description
                  <div className="text-2xl font-normal text-red-700 mt-2 max-lg:text-xl ">
                    {details?.tagline}
                  </div>
                </div>
                <div className=''>
                {details?.overview || "NA"}
                </div>
              </div>
              <div className="flex justify-between gap-x-4 max-xl:gap-x-4 max-lg:flex-col">
                <div className="font-light text-base bg-gradient-to-t from-red-700 from-10% to-transparent to-80%  w-32 max-h-24  rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60% cursor-pointer">
                  <div className="text-xl max-lg:text-lg text-red-700 font-normal">
                    Ratings
                  </div>
                  <div className="flex gap-x-1 max-lg:text-[1rem]">
                    {Math.round(details?.vote_average*10)/10}
                    <BsFillStarFill className="mt-1 text-red-700" />
                  </div>
                </div>
                <div className="font-light bg-gradient-to-t  from-red-700 from-10% to-transparent to-80%  w-32 max-h-24 rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60% cursor-pointer">
                  <div className="text-xl max-lg:text-[1rem] text-red-700 font-normal">
                    Run Time
                  </div>
                  <div className='max-lg:text-[0.9rem]'>{details?.runtime || "NA"} minutes</div>
                </div>
                <div className="font-light bg-gradient-to-t overflow-hidden from-red-700 from-10% to-transparent to-80% w-32 max-h-24 rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60% cursor-pointer">
                  <div className="text-xl max-lg:text-[1rem] text-red-700 font-normal">
                    Genres
                  </div>
                  {details?.genres.map((items) => (
                    <div className='max-lg:text-[0.9rem]' key={items?.id}>{items?.name}</div>
                  ))}
                </div>
                <div className="font-light bg-gradient-to-t  from-red-700 from-10% to-transparent to-80%  w-32 max-h-24  rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60%  cursor-pointer">
                  <div className="text-xl max-lg:text-[1rem] text-red-700 font-normal">
                    Language
                  </div>
                  <div className="uppercase max-lg:text-[0.9rem]">{details?.original_language}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="h-36 max-md:h-20"></div>
      {recommendation && scrollPosition >= 500 && (
        <div className=" flex flex-col items-center font-normal text-3xl animate-topComingUpcoming scroll-smooth snap-x opacity-0">
          <div className="bg-gradient-to-r from-red-700 to-transparent max-md:text-2xl max-sm:text-xl">
            Recommendations
          </div>
          <div className=" flex flex-wrap justify-center mx-28 max-xl:mx-20 max-lg:mx-16 max-md:mx-12 max-sm:mx-4 mt-8 max-md:mt-4 max-sm:mt-3">
            {recommendation?.results.map((items) => (
              <RecommendationCard key={items?.id} data={items} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
