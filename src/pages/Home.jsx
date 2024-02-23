import React from "react";
import Corousel from "../components/Corousel";
import ProductsSlider from "../components/ProductsSlider";
import styles from "../styles";

const Home = () => {
    return (
        <>
            <Corousel />
            <div className={`${styles.flexCenter}`}>
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl bg-pattens-blue-50">
                    <div className="flex items-start justify-start w-full px-4">
                        <h2 className="font-normal text-2xl mt-12">
                            Explore{" "}
                            <span className="font-bold underline underline-offset-2">
                                Bestsellers
                            </span>
                        </h2>
                    </div>
                    <ProductsSlider />
                </div>
            </div>
        </>
    );
};

export default Home;
