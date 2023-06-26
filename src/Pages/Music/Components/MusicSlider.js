import React from "react";
import {latestOriginals, latestCovers } from "../MusicData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import '../Components/MusicSlider.css'

//to do next : on hover display stream title and date


const MusicSlider = () => {
  return (
    <div className='md:h-auto w-auto'>

        <div className="md:h-fill md:w-full h-80 w-auto flex flex-col lg:mt-5 bg-red-600"> 
            <h1
            className="text-4xl text-center text-gray-50 font-medium"
            style={{ fontFamily: "boldenvan, sans-serif" }}
            >
            Bae's Original Songs!
            </h1>
            <Swiper
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
                1048: {
                slidesPerView: 3,
                },
            }}
            a11y={true}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="lg:w-10/12 md:h-5/6 md:w-11/12 w-auto h-48 my-auto"
            style={{
                "--swiper-pagination-color": "white",
                "--swiper-pagination-bullet-inactive-color": "black",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "0.5rem",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            >
            {latestOriginals[0].items.map((item) => (
                <SwiperSlide className="flex w-auto">
                <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target='_blank' rel='noreferrer'><img className="md:w-9/12 w-4/6 h-5/6 mx-auto my-auto aspect-video" src={item.snippet.thumbnails.high.url} alt='bae originals thumbnail'/></a>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

    {/*------------------------------------------------Covers------------------------------------------------ */}
      <div className="md:h-fill md:w-full h-80 w-auto flex flex-col lg:mt-5 bg-red-600">
        <h1
          className="text-4xl text-center text-gray-50 font-medium"
          style={{ fontFamily: "boldenvan, sans-serif" }}
        >
          Bae's Latest Covers!
        </h1>

        <Swiper
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
            1048: {
              slidesPerView: 3,
            },
          }}
          a11y={true}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="lg:w-10/12 md:h-5/6 md:w-11/12 w-auto h-48 my-auto"
          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "black",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "0.5rem",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {latestCovers[0].items.map((item) => (
            <SwiperSlide className="flex w-auto">
              <a className='w-fit h-fit' href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target='_blank' rel='noreferrer'><img src={item.snippet.thumbnails.high.url} className="md:w-9/12 w-4/6 h-5/6 mx-auto my-auto aspect-video" alt='bae cover thumbnail'/></a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default MusicSlider;
