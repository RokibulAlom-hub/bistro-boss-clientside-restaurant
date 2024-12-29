import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitles from "../../../Sharedcomponents/SharedTiitles/SectionTitles";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testomonial = () => {
  const [reveiw, setReveiw] = useState([]);
  useEffect(() => {
    axios.get("reveiw.json").then((res) => setReveiw(res.data));
  }, []);
  console.log(reveiw);

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reveiw.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="space-y-4">
              <SectionTitles
                heading={"Testomonials"}
                subheading={"What Our Client Say"}
              ></SectionTitles>
              <Rating className="mx-auto w-11/12 " style={{ maxWidth: 180 }} value={data.rating} readOnly />
              <p className="text-center">{data?.details}</p>
              <h2 className="text-center text-lg uppercase text-gold-600">
                {data?.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testomonial;
