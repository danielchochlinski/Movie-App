import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { img_300, noProfile } from "../../config/config";
import "./MediaSlider.css";
import "swiper/css/autoplay";

const MediaSlider = ({ id, type }) => {
  const [cast, setCast] = useState();
  const fetchCredits = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    setCast(response.data.cast);
  };

  useEffect(() => {
    fetchCredits();
  }, []);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1500 }}
      style={{ marginTop: "20px", backdropFilter: "blur(5px)" }}
    >
      {cast?.map((cast) => (
        <SwiperSlide>
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

export default MediaSlider;
