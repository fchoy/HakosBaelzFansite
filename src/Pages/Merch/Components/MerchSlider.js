import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import merchData from "../MerchData";

import '../Components/MerchSlider.css'

const MerchSlider = () => {
  return (
    <div className="md:h-fit flex flex-col w-full">
      <h1 className="text-4xl text-center text-gray-50 font-medium mb-5" style={{ fontFamily: "boldenvan, sans-serif" }}>Bae's Merch!</h1>
      <Swiper
        className="lg:w-10/12 md:w-screen merch-swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        a11y={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-inactive-color": "black",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "0.5rem",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {merchData.map((item) => (
            <SwiperSlide key={item.id} className="merch-swiper-slide hover:opacity-90 hover:cursor-pointer ">
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="lg:w-fit w-4/6 mx-auto h-fit rounded overflow-hidden shadow-lg my-auto bg-white flex flex-col flex-wrap">
                  
                  <img className="md:h-4/6 md:w-full h-fit" src={item.img} alt="Bae Merch One"/>

                  <div className="md:px-6 md:py-4 2xl:h-32 lg:full md:h-72 h-auto text-center">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base text-md">{item.description}</p>
                  </div>

                  <div className="px-6 pt-4 pb-2 w-fit mx-auto">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {item.price}
                      </span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MerchSlider;
