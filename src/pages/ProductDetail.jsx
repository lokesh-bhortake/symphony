import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles";
import ProductInfo from "../components/ProductInfo";
import ProductsSlider from "../components/ProductsSlider";

const ProductDetail = () => {
    const location = useLocation();
    const pData = location.state;
    return (
        <>
            <div
                className={`${styles.flexCenter} mt-28 md:mt-20 bg-pattens-blue-900`}
            >
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl gap-4">
                    <ProductInfo product={pData} />
                    <p className="font-bold text-2xl text-start w-full">
                        You might also like
                    </p>
                    <ProductsSlider />
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
