import React from "react";
import Corousel from "../components/Corousel";
import ProductsSlider from "../components/ProductsSlider";
import ShopByCategories from "../components/ShopByCategories";
import { BsShieldFillCheck, BsRepeat } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import styles from "../styles";

const Home = () => {
    return (
        <>
            <Corousel />
            <div className={`${styles.flexCenter}`}>
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl">
                    <div className="flex flex-col items-start justify-start w-full px-4">
                        <ShopByCategories />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full text-pattens-blue-900">
                        <h2 className="font-normal text-2xl mt-12 px-4">
                            Explore{" "}
                            <span className="font-bold underline underline-offset-2 text-pattens-blue-950">
                                Bestsellers
                            </span>
                        </h2>
                        <ProductsSlider />
                    </div>
                    <div className="flex items-center justify-around w-full px-4 my-4 text-pattens-blue-900">
                        <span className="flex flex-col items-center justify-center gap-2">
                            <FaTruckFast className="h-12 w-12" />
                            <p>
                                <span className="font-semibold text-pattens-blue-950">
                                    Free
                                </span>{" "}
                                Delivery
                            </p>
                        </span>
                        <span className="flex flex-col items-center justify-center gap-2">
                            <BsShieldFillCheck className="h-12 w-12" />
                            <p>
                                <span className="font-semibold text-pattens-blue-950">
                                    1-Year
                                </span>{" "}
                                Warranty
                            </p>
                        </span>
                        <span className="flex flex-col items-center justify-center gap-2">
                            <BsRepeat className="h-12 w-12 " />
                            <p>
                                <span className="font-semibold text-pattens-blue-950">
                                    7-Day
                                </span>{" "}
                                replacement
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
