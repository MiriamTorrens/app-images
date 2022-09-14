import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { results } from "../slices/searchSlice";
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  const resultsAPI = useSelector(results);
  return (
    <>
      <Swiper
        className="slider"
        loop={true}
        spaceBetween={10}
        // navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        style={{
          margin: "30px auto",
          width: "100%",
          height: "80vh",
        }}
      >
        {resultsAPI &&
          resultsAPI.length &&
          resultsAPI.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: "100%",
                  height: "80vh",
                  backgroundImage: `url(${item.urls.thumb}?w=248&fit=crop&auto=format)`,
                  backgroundAttachment: "fixed",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
