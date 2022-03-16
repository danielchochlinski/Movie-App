import React from "react";
import { img_500, img_original } from "../../config/config";
import "./HeroItem.css";

const HeroItem = ({ backdrop, poster, name, title, description }) => {
  console.log(img_original + backdrop);
  const background = `${img_original + backdrop}`;
  console.log(background);
  return (
    <div
      className="hero_item_container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        //   filter: "brightness(50%)"
      }}
    >
      <div className="hero_item">
        <div>
          <h2 className="trending">Trending</h2>
        </div>

        <div className="hero_item_info">
          <h1>{title || name}</h1>
          <p>{description}</p>
        </div>

        <div className="hero_item_poster">
          <img src={img_500 + poster} />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
