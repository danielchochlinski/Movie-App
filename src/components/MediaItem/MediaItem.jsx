import React, { useState } from "react";
import { img_300, unavailable } from "../../config/config";
import "./MediaItem.css";
import Badge from "@mui/material/Badge";
import MediaDetails from "./MediaDetails";

const MediaItem = ({
  title,
  poster,
  date,
  name,
  firstAir,
  vote_average,
  type,
  id,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  let formatedDate = date?.split("-").reverse().join("-");
  let formatedFirstAir = firstAir?.split("-").reverse().join("-");

  const showMoreHandler = () => {
    setShowDetails(true);
  };
  const hideMoreHandler = () => {
    setShowDetails(false);
  };

  return (
    <div onClick={showMoreHandler} className="media_item">
      {!showDetails && (
          <Badge
            color={vote_average > 6.9 ? "primary" : "secondary"}
            badgeContent={vote_average || "No Rating"}
          ></Badge>
      )}

      <img src={poster ? `${img_300}/${poster}` : unavailable} />
      <h1>{title || name}</h1>
      <span>{formatedDate || formatedFirstAir}</span>
      {showDetails && (
        <MediaDetails onCloseModal={hideMoreHandler} id={id} type={type} />
      )}
    </div>
  );
};

export default MediaItem;
