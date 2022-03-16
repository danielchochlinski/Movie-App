import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBox/SearchBar";
import MediaList from "../components/MediaList/MediaList";
import "../App.css";
import MediaListTwo from "../components/MediaList/MediaListTwo";
import {
  trending,
  moviesTopRated,
  popularMovies,
  seriesTopRated,
  popularSeries,
} from "../config/config";
import Hero from "../components/Hero/Hero";
const Main = () => {
  return (
    <div>
      <Hero />
     
      <div className="page_header">
        <h1 className="page_header_h1">Top Rated Movies</h1>
      </div>
      <MediaListTwo url={moviesTopRated} />
      <div className="page_header">
        <h1 className="page_header_h1">Popular Movies</h1>
      </div>
      <MediaListTwo url={popularMovies} />
      <div className="page_header">
        <h1 className="page_header_h1">Top Rated Series</h1>
      </div>
      <MediaListTwo url={seriesTopRated} />
      <div className="page_header">
        <h1 className="page_header_h1">Popular Series</h1>
      </div>
      <MediaListTwo url={popularSeries} />
    </div>
  );
};

export default Main;
