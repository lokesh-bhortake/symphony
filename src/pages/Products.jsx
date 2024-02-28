import React from "react";
import styles from "../styles";
import AllProducts from "../components/AllProducts";

const Products = () => {
    return (
        <>
            <div className={`${styles.flexCenter} mt-20`}>
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl bg-pattens-blue-50">
                    <AllProducts />
                </div>
            </div>
        </>
    );
};

export default Products;
