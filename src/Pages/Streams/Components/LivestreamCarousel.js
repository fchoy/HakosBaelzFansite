import React from "react";
import {latestStreams} from "../StreamData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Components/LivestreamCarousel.css'

//to do next : on hover display stream title and date

const LivestreamCarousel = () => {
  return (
    <div className="md:h-1/2 md:w-screen h-auto w-screen flex flex-col">

      <h1 className='text-4xl text-center md:my-5 mt-5 text-gray-50 font-medium' style={{fontFamily: 'boldenvan, sans-serif'}}>Bae's Last 20 Streams!</h1>

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
            1048:{
              slidesPerView : 3,
            }
          }}
          a11y={true}
          spaceBetween={20}
          slidesPerView={'auto'}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true}}
          className="lg:w-10/12 md:h-5/6 md:w-11/12 w-screen h-auto my-auto livestream-swiper-container"
          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "black",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "0.5rem",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
        >
          {
            latestStreams.items.map((item) => (
              <SwiperSlide className="flex w-auto h-auto">
                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noreferrer" className=''>
                  <img className="md:w-9/12 w-4/6 h-5/6 mx-auto my-5" src={item.snippet.thumbnails.high.url} alt='stream images'/>
                </a>
              </SwiperSlide>
            ))
          }
        </Swiper>

    </div>
  );
};

export default LivestreamCarousel;