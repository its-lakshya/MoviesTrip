import React from "react";
import image from "../Assets/MoviesTrip_AboutMe_Background.jpg";
import developerImage from "../Assets//MUN_Photo.jpg";


const AboutPage = () => {  
  return (
    // <div className="">
    <div className="w-full mt-16 bg-black bg-opacity-95 min-h-screen ">
      <div className="w-full h-96" style={{ backgroundImage: `url(${image})` }}>
        <div className="w-full h-96 bg-black bg-opacity-40 flex justify-center items-center text-6xl font-normal">
          About Me
        </div>
      </div>
      <div className="flex flex-col justify-between mt-80 mx-28 items-center animate-topComingAbout opacity-0 ">
        <div className="flex justify-between w-full items-center ">
          <div className="h-[36rem]   shadow-lg shadow-black bg-gradient-to-b from-red-700 to-black">
            <img
              className="w-60 h-[18rem] hover:translate-y-72 hover:ease-in-out hover:delay-300 hover:transition-all"
              alt="developerImage"
              src={developerImage}
            />
          </div>
          <div className="w-2/3 h-96 flex flex-col items-center shadow-inner shadow-red-700">
            <div className="text-5xl font-light my-4 ">Lakshya Kumar</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutPage;
