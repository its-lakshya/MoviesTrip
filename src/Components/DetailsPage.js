import React, { useState, useEffect } from "react";
import { options } from "../Constants";
import { useSelector } from "react-redux/es/hooks/useSelector";

const DetailsPage = () => {
  const detailsData = useSelector((store) => store.details.detailsData);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        detailsData.type +
        "/" +
        detailsData.id +
        "?language=en-US",
      options
    );
    const Json = await data.json();
    setDetails(Json);
  };

  if(details)
  return (
    <div>
      <div>{console.log(details)}</div>
    </div>
  );
};

export default DetailsPage;
