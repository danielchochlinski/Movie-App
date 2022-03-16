import React from "react";

import useAxios from "../../hooks/useAxios";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { trending } from "../../config/config";
import HeroItem from "../HeroItem/HeroItem";

const Hero = () => {
  const { data } = useAxios(trending);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      {data?.results?.map((media) => (
        <SwiperSlide key={media.id}>
          <HeroItem
            backdrop={media.backdrop_path}
            poster={media.poster_path}
            title={media.title}
            name={media.name}
            description={media.overview}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
