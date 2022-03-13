import axios from "axios";
import React from "react";

const Movies = () => {
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `
https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
    );
  };
  return <div>Movies</div>;
};

export default Movies;
