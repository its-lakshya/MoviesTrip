import React from "react";
import { IMAGES_BASE_URL } from "../Constants";

const BackdropCard = ({data}) => {
  return (
      <img
        className="h-44 m-2 flex flex-col justify-center display-none hover:animate-popularSeriesCard hover:border-red-700 hover:border-y-4 "
        about=""
        alt="bgImg"
        src={IMAGES_BASE_URL + data.file_path}
      />
  );
};

export default BackdropCard;
