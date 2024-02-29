import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { useProductsData } from "../contexts/ProductsDataContext";
import ProductSlide from "./ProductSlide";

const ProductsSlider = () => {
    const { productsData, loading, error } = useProductsData();
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 35,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper mb-12"
                >
                    {productsData &&
                        productsData.map(
                            (product, index) =>
                                product.bestseller && (
                                    <SwiperSlide
                                        key={index}
                                        className="rounded-xl p-1"
                                    >
                                        <ProductSlide product={product} />
                                    </SwiperSlide>
                                )
                        )}
                </Swiper>
            )}
        </>
    );
};

export default ProductsSlider;
