import React, { useEffect } from "react";
import fetchMovies from "../../hooks/useTrending";
import useControlledInput from "../../hooks/useControlledInput";
import "./SearchBar.css";
import useAxios from "../../hooks/useAxios";

const SearchInput = ({ placeholder, onInputMedia }) => {
  const { inputValue, handleInputChange } = useControlledInput({
    defaultValue: "",
  });

  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`;

  const { data } = useAxios(URL);
  onInputMedia(data);

  return (
    <>
      <div className="container">
        <input
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          list="users"
        />
      </div>
    </>
  );
};

export default SearchInput;
