import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

import { img_500, unavailable } from "../../config/config";
import axios from "axios";
import "./MediaDetails.css";
import MediaSlider from "../MediaSlider/MediaSlider";
import Rating from "@mui/material/Rating";

const MediaDetails = ({ id, type, onCloseModal }) => {
  const [mediaDetails, setMediaDetails] = useState();
  const [rating, setRating] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    setMediaDetails(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(mediaDetails);
  console.log(newValue)
  return (
    <Modal onCloseModal={onCloseModal} backdrop={mediaDetails?.backdrop_path}>
      <div className="media_details_container">
        {mediaDetails && (
          <div className="media_details">
            <img
              className="media_details_landscape"
              src={
                mediaDetails?.backdrop_path
                  ? `${img_500}/${mediaDetails?.backdrop_path}`
                  : unavailable
              }
              alt={mediaDetails?.title || mediaDetails?.name}
            />
            <img
              className="media_details_portrait"
              src={
                mediaDetails?.poster_path
                  ? `${img_500}/${mediaDetails?.poster_path}`
                  : unavailable
              }
              alt={mediaDetails?.title || mediaDetails?.name}
            />
            <div className="media_details_info">
              <span className="media_details_title">
                {mediaDetails?.title || mediaDetails?.name}
              </span>
              <span>{mediaDetails?.overview}</span>
            </div>
            <div className="media_details_rating">
              <Rating
                name="customized-10"
                defaultValue={mediaDetails.vote_average}
                max={10}
                color="primary"
                size="large"
                onChange={(event, newValue) => {
                  setRating(newValue)
                }}
              />
            </div>
            <div className="media_details_cast">
              <span>Cast</span>
            </div>
          </div>
        )}
        <div>
          <MediaSlider type={type} id={id} />
        </div>
        <button onClick={onCloseModal}>Close</button>
      </div>
    </Modal>
  );
};

export default MediaDetails;
