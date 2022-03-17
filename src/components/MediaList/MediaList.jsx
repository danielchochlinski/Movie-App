import MediaItem from "../MediaItem/MediaItem";
import "./MediaList.css";
import { discoverMovies } from "../../config/config";
import useAxios from "../../hooks/useAxios";
import SearchInput from "../SearchBox/SearchInput";
import { useState } from "react";

const MediaList = ({ style }) => {
  const [searchMedia, setSearchMedia] = useState(null);
  const [displayMedia, setDisplayMedia] = useState();
  const { data } = useAxios(discoverMovies);
const inputSearchData = (data) => {
  setSearchMedia(data);
}

  console.log(searchMedia)
  return (
    <>
      <SearchInput onInputMedia={inputSearchData} placeholder="search movie" />
      <div className="media_list">
        {data?.results?.map((media) => (
          <MediaItem
            style={style}
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
    </>
  );
};

export default MediaList;
