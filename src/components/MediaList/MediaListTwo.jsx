import { useState, useEffect } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LinearProgress } from "@mui/material";
import useAxios from "../../hooks/useAxios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MediaListTwo = ({ url, type }) => {
  const { loading, error, data } = useAxios(url);

  if (loading) {
    return <div></div>;
  }
console.log(data)
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={5}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      }}
    >
      {loading && <LinearProgress />}
      {data?.results?.map((media) => (
        <SwiperSlide key={media.id} style={{ height: "400px" }}>
          <MediaItem
            typeURL={type}
            key={media.id}
            id={media.id}
            poster={media.poster_path}
            title={media.title}
            date={media.release_date}
            type={media.media_typ}
            name={media.name}
            firstAir={media.first_air_date}
            vote_average={media.vote_average}
            backdrop={media.backdrop_path}
            description={media.overview}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MediaListTwo;
