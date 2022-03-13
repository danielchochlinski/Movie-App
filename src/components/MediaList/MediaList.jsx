import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "../MediaItem/MediaItem";
import "./MediaList.css";

const MediaList = () => {
  const [media, setMedia] = useState();

  const getTrending = async () => {
    const API_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

    const response = await axios.get(API_URL);
    setMedia(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className="media_list">
      {media?.map((media) => (
        <MediaItem
          key={media.id}
          id={media.id}
          poster={media.poster_path}
          title={media.title}
          date={media.release_date}
          type={media.media_type}
          name={media.name}
          firstAir={media.first_air_date}
          vote_average={media.vote_average}
          backdrop={media.backdrop_path}
          description={media.overview}
        />
      ))}
    </div>
  );
};

export default MediaList;
