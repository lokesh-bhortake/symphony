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
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
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
                                        className="m-4 rounded-xl"
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
