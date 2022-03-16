import axios from "axios";
import React from "react";
import MediaList from "../components/MediaList/MediaList";
import SearchInput from "../components/SearchBox/SearchInput";
import SelectGenres from "../components/SelectGenres/SelectGenres";


const Movies = () => {
  const style = {
    marginTop: "45px",
    marginBottom: "75px",
    maxWidth: "200px",
    maxHeight: "260px",
  };
  return (
    <div>
      <MediaList style={style} />
    </div>
  );
};

export default Movies;
