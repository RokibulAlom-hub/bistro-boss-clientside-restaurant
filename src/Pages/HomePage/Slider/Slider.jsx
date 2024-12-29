import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/menu/ban01.jpg";
import slider2 from "../../../assets/menu/ban02.jpeg";
import slider3 from "../../../assets/menu/ban03.jpg";
import slider4 from "../../../assets/menu/ban04.jpg";
import slider5 from "../../../assets/menu/ban05.jpg";
import SectionTitles from "../../../Sharedcomponents/SharedTiitles/SectionTitles";
const Slider = () => {
  return (
    <div>
      <SectionTitles heading={"Order Online"} subheading={"From 11:am to 10:pm"}>
            
      </SectionTitles>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-11"
      >
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h1 className="font-4xl text-center text-white font-bold">Dessert</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h1 className="font-4xl text-center -mt-10 text-white font-bold">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h1 className="font-4xl text-center -mt-10 text-white font-bold">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="font-4xl text-center -mt-10 text-white font-bold">
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h1 className="font-4xl text-center -mt-10 text-white font-bold">
            Drinks
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
