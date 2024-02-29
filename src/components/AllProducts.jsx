import React, { useState, useEffect, useMemo } from "react";
import { useProductsData } from "../contexts/ProductsDataContext";
import ProductSlide from "./ProductSlide";
import useInfiniteScroll from "../utils/useInfiniteScroll";
import { sortProducts } from "../utils/productSort";
import { BsArrowDownUp } from "react-icons/bs";

const AllProducts = () => {
    const { productsData } = useProductsData();
    const [items, setItems] = useState([]);
    const [sortBy, setSortby] = useState("");
    const [lastIndex, setLastIndex] = useState(8);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortby(value);
    };

    const sortedData = useMemo(
        () => sortProducts(productsData, sortBy),
        [productsData, sortBy]
    );

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            const remainingItems = items.length + 8;
            setItems(sortedData.slice(0, remainingItems));
            setLoading(false);
            setLastIndex(remainingItems);
        }, 1000);
    };

    const { containerRef, loading, setLoading } = useInfiniteScroll(
        loadMoreItems,
        items.length < sortedData.length
    );

    useEffect(() => {
        setItems(sortedData.slice(0, 8));
    }, [sortedData]);

    return (
        <>
            <div className="items-start w-full px-4 text-2xl font-bold mt-6 text-pattens-blue-950">
                <h4>Products</h4>
            </div>
            <div className="flex items-center w-full justify-end gap-2 m-2">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 m-4">
                {items &&
                    items.map((product, index) => (
                        <ProductSlide key={index} product={product} />
                    ))}
                {loading && <div>Loading...</div>}
                <div ref={containerRef}></div>
            </div>
            {items.length === sortedData.length && <div>All items loaded</div>}
        </>
    );
};

export default AllProducts;
