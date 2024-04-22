import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Carousel() {
  return (
    <div className=" h-[500px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[55%]"
      >
        <SwiperSlide>
          <img alt="img" src={"../images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img2" src={"../images/carousel_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source
              src={"../images/carousel_vid.mp4"}
              type="video/mp4"
            ></source>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img4" src={"../images/carousel_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="img5" src={"../images/carousel_5.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
}

export default Carousel;
