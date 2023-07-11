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
    <div className="'bg-black bg-opacity-95 w-full min-h-screen">
      {details && images && recommendation && (
        <div className="mx-28  flex flex-col">
          <div className="w-full mt-16 h-[46rem] overflow-hidden flex flex-row justify-between items-center ">
            {details?.original_title && (
              <div className="text-7xl w-1/4 font-normal hover:bg-gradient-to-r hover:form-10% hover:to-70% hover:from-red-700 hover:to-transparent ">
                {details?.title}
              </div>
            )}
            {details?.original_name && (
              <div className="text-7xl w-1/4 font-normal">{details?.name}</div>
            )}
            <img
              className="h-full hover:shadow-xl hover:shadow-red-700"
              alt="bgImg"
              src={IMAGES_BASE_URL + images?.posters[0]?.file_path}
            />
            <div className="flex flex-col w-1/4 items-center">
              <div className=" w-full max-h-[36rem] scrollbar-hide overflow-y-scroll border-red-700 border-x-4 flex flex-col gap-1">
                {images?.backdrops.map((items) => (
                  <BackdropCard key={items?.file_path} data={items} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-56 w-full"></div>

          {scrollPosition >= 150 && (
            <div className="flex justify-between mt-12 gap-x-20 animate-topComingUpcoming scroll-smooth snap-x opacity-0">
              <div className="text-base font-light w-2/4 border-red-700 border-l-8 pl-2 ">
                <div className="text-4xl font-normal mb-2">
                  Description
                  <div className="text-2xl font-normal text-red-700 mt-2 ">
                    {details?.tagline}
                  </div>
                </div>
                {details?.overview || "NA"}
              </div>
              <div className="flex justify-between w-2/4 ">
                <div className="font-light text-base bg-gradient-to-t from-red-700 from-10% to-transparent to-80%  w-32 max-h-24  rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60% cursor-pointer">
                  <div className="text-xl text-red-700 font-normal">
                    Ratings
                  </div>
                  <div className="flex gap-x-1">
                    {details?.vote_average}
                    <BsFillStarFill className="mt-1 text-red-700" />
                  </div>
                </div>
                <div className="font-light bg-gradient-to-t  from-red-700 from-10% to-transparent to-80%  w-32 max-h-24 rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60% cursor-pointer">
                  <div className="text-xl text-red-700 font-normal">
                    Run Time
                  </div>
                  {details?.runtime || "NA"} minutes
                </div>
                <div className="font-light bg-gradient-to-t overflow-hidden from-red-700 from-10% to-transparent to-80%   w-32 max-h-24 rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60% cursor-pointer">
                  <div className="text-xl text-red-700 font-normal h-36">
                    Genres
                  </div>
                  {details?.genres.map((items) => (
                    <div key={items?.id}>{items?.name}</div>
                  ))}
                </div>
                <div className="font-light bg-gradient-to-t  from-red-700 from-10% to-transparent to-80%  w-32 max-h-24  rounded-b-2xl flex flex-col items-center hover:from-10% hover:to-60%  cursor-pointer">
                  <div className="text-xl text-red-700 font-normal">
                    Language
                  </div>
                  <div className="uppercase">{details?.original_language}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="h-36"></div>
      {recommendation && scrollPosition >= 500 && (
        <div className="flex flex-col items-center font-normal text-3xl animate-topComingUpcoming scroll-smooth snap-x opacity-0">
          <div className="bg-gradient-to-r from-red-700 to-transparent">
            Recommendations
          </div>
          <div className="flex flex-wrap justify-start mx-28 mt-8">
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
