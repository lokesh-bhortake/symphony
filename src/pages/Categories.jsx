import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsData } from "../contexts/ProductsDataContext";
import styles from "../styles";
import ProductSlide from "../components/ProductSlide";
import { sortProducts } from "../utils/productSort";
import { BsArrowDownUp } from "react-icons/bs";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Categories = () => {
    const { category } = useParams();
    const { productsData } = useProductsData();
    const [sortBy, setSortby] = useState("");

    const filteredData = useMemo(
        () => productsData.filter((item) => item.category === category),
        [productsData, category]
    );

    const sortedData = useMemo(
        () => sortProducts(filteredData, sortBy),
        [filteredData, sortBy]
    );

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortby(value);
    };

    return (
        <>
            <div
                className={`${styles.flexCenter} mt-24 p-4 text-pattens-blue-950`}
            >
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl gap-4">
                    <div className="flex flex-col w-full items-start justify-center">
                        <h2 className="font-bold text-xl">
                            {capitalizeFirstLetter(category)}
                        </h2>
                    </div>
                    <div className="flex items-center w-full justify-end gap-1">
                        <section className="flex items-center justify-end gap-1 p-2 rounded-lg bg-pattens-blue-200 text-md">
                            <BsArrowDownUp />
                            <label htmlFor="sort" className="font-semibold">
                                Sort by:
                            </label>
                            <select
                                id="sort"
                                onChange={handleSortChange}
                                value={sortBy}
                                className="bg-pattens-blue-200"
                            >
                                <option value="">Featured</option>
                                <option value="priceLowToHigh">
                                    Price: Low to High
                                </option>
                                <option value="priceHighToLow">
                                    Price: High to Low
                                </option>
                                <option value="nameAToZ">Name: A to Z</option>
                                <option value="nameZToA">Name: Z to A</option>
                            </select>
                        </section>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 ">
                        {sortedData.map((product, index) => (
                            <ProductSlide key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;
