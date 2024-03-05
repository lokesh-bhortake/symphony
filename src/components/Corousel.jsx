import React, { useState, useEffect } from "react";
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
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const imgWidth = window.innerWidth;
        if (imgWidth <= 640) {
            setImageIndex(6);
        } else if (imgWidth > 640 && imgWidth <= 1280) {
            setImageIndex(3);
        } else {
            setImageIndex(0);
        }
    }, []);

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
                {[0, 1, 2].map((index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={corousel_imgs[imageIndex + index]}
                            alt={`corousel_image${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Corousel;
