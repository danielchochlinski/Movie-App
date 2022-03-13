import React from "react";
import fetchMovies from "../../hooks/useTrending";
import useControlledInput from "../../hooks/useControlledInput";
import "./SearchBar.css";

const SearchBar = ({ placeholder }) => {
  const { inputValue, handleInputChange } = useControlledInput({
    defaultValue: "",
  });

  const users = fetchMovies(inputValue);

  return (
    <div className="container">
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        list="users"
      />
      <datalist id="users">
        {users.map((user) => (
          <option key={user.id} value={user.name} />
        ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
