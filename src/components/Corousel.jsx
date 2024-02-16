import React from "react";
import { corousel_imgs } from "../assets/index";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Corousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper cursor-pointer"
            >
                <SwiperSlide>
                    <img
                        srcSet={`${corousel_imgs[3]} 768w, ${corousel_imgs[0]} 1440w`}
                        src={corousel_imgs}
                        alt="corousel_image1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        srcSet={`${corousel_imgs[4]} 768w, ${corousel_imgs[1]} 1440w`}
                        src={corousel_imgs}
                        alt="corousel_image2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        srcSet={`${corousel_imgs[5]} 768w, ${corousel_imgs[2]} 1440w`}
                        src={corousel_imgs}
                        alt="corousel_image3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Corousel;
