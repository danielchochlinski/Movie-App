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
  style,
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
    <div onClick={showMoreHandler} style={style} className="media_item">
      <div>
        {!showDetails && (
          <Badge
            style={{ position: "relative", float: "right" }}
            color={vote_average > 6.9 ? "primary" : "secondary"}
            badgeContent={vote_average || "No Rating"}
          ></Badge>
        )}
      </div>

      <img src={poster ? `${img_300}/${poster}` : unavailable} />
      <div className="media_item_info">
        <h1>{title || name}</h1>
        <p>{formatedDate || formatedFirstAir}</p>
      </div>

      {showDetails && (
        <MediaDetails
          onCloseModal={hideMoreHandler}
          id={id}
          type={type}
          name={name}
          title={title}
          rating={vote_average}
        />
      )}
    </div>
  );
};

export default MediaItem;
