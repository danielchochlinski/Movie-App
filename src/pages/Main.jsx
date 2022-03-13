import React from "react";
import NavBar from "../components/Navbar/NavBar";
import SearchBar from "../components/SearchBox/SearchBar";
import MediaList from "../components/MediaList/MediaList";
import "../App.css";
const Main = () => {
  return (
    <>
      <NavBar />

      <SearchBar placeholder="search movie/series" />
      <div className="page_header">
        <h1>Trending</h1>
      </div>

      <MediaList />
    </>
  );
};

export default Main;
