import React from "react";
import MediaList from "../components/MediaList/MediaList";
import SearchInput from "../components/SearchBox/SearchInput";


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
