import axios from "axios";
import React from "react";
import MediaList from "../components/MediaList/MediaList";
import SearchBar from "../components/SearchBox/SearchBar";

const Movies = () => {
  const style = {
    marginTop: "45px",
    marginBottom: "75px",
    maxWidth: "200px",
    maxHeight: "260px",
  };
  return (
    <div>
      <SearchBar placeholder="search movies" />
      <MediaList style={style} />
    </div>
  );
};

export default Movies;
