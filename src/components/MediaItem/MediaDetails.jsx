import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

import { img_500, unavailable } from "../../config/config";
import axios from "axios";
import "./MediaDetails.css";
import MediaSlider from "../ActorSlider/ActorSlider";
import Rating from "@mui/material/Rating";
import { CloseOutlined } from "@mui/icons-material";

import useAxios from "../../hooks/useAxios";

const MediaDetails = ({ id, onCloseModal, name, vote_average, title }) => {
  const [value, setValue] = useState();
  const [rating, setRating] = useState([]);
  useEffect(() => {
    setRating(vote_average);
  }, []);

  const addNewRating = () => {
    setValue([...rating, ...value]);
  };
  console.log(rating);
  console.log(value);
  let type;
  if (name) {
    type = "tv";
  } else {
    type = "movie";
  }
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

  const { error, loading, data } = useAxios(url);

  return (
    <Modal onCloseModal={onCloseModal} backdrop={data?.backdrop_path}>
      <div className="media_details_container">
        {data && (
          <div className="media_details">
            <div onClick={onCloseModal}>
              <CloseOutlined />
            </div>
            <img
              className="media_details_landscape"
              src={
                data?.backdrop_path
                  ? `${img_500}/${data?.backdrop_path}`
                  : unavailable
              }
              alt={data?.title || data?.name}
            />
            <img
              className="media_details_portrait"
              src={
                data?.poster_path
                  ? `${img_500}/${data?.poster_path}`
                  : unavailable
              }
              alt={data?.title || data?.name}
            />
            <div className="media_details_info">
              <span className="media_details_title">
                {data?.title || data?.name}
              </span>
              <span>{data?.overview}</span>
            </div>
            <div className="media_details_rating">
              <Rating
                name="customized-10"
                defaultValue={data.vote_average}
                value={value}
                max={10}
                color="primary"
                size="large"
                onClick={addNewRating}
                onChange={(event, newValue) => {
                  setValue(newValue);
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
      </div>
    </Modal>
  );
};

export default MediaDetails;
