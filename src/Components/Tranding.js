import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import TrandingCard from "./TrandingCard";

const Tranding = () => {
  const [tranding, setTranding] = useState(null);

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
    // console.log(position)
  };

  useEffect(() => {
    getTranding();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const getTranding = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    );
    const Json = await data.json();
    setTranding(Json.results);
    // console.log(Json.results);
  };

  if (tranding)
    return (
      <div className="mx-28 mt-40">
        <div className="h-1 "></div>
        {scrollPosition >= 1150 && (
          <div className="animate-topComingTranding opacity-0 ">
            <div className="flex justify-center mb-8 text-[2.5rem] font-normal">
              Tranding
            </div>
            <div className="hover:animate-trandingBgChange py-4 flex flex-wrap justify-center gap-y-8  scrollbar-hide snap-x scroll-smooth box-border ">
              {tranding.map((items) => (
                <TrandingCard key={items.id} data={items} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default Tranding;
