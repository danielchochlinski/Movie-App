import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { img_300, noProfile } from "../../config/config";

import { Swiper, SwiperSlide } from "swiper/react";
import useAxios from "../../hooks/useAxios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ActorSlider.css";

const ActorSlider = ({ id, type }) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

  const { error, loading, data } = useAxios(url);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1500 }}
      style={{ marginTop: "20px", backdropFilter: "blur(5px)" }}
    >
      {data?.cast?.map((cast, i) => (
        <SwiperSlide key={i}>
          <div className="media_silder_item">
            <img
              style={{ objectFit: "fill" }}
              src={
                cast.profile_path
                  ? `${img_300}/${cast.profile_path}`
                  : noProfile
              }
            />
            <span>{cast.name}</span>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default ActorSlider;
