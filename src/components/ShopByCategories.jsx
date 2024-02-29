import React from "react";
import { categoriesData } from "../utils/constants";
import { Link } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";

const ShopByCategories = () => {
    return (
        <>
            <h2 className="font-normal text-pattens-blue-900 text-2xl mt-12 w-full">
                Explore{" "}
                <span className="font-bold underline underline-offset-2 text-pattens-blue-950">
                    Products
                </span>
                <Link
                    className="flex flex-col justify-center items-end gap-2 text-base"
                    to={"/products"}
                >
                    <span className="flex items-center justify-center px-4 font-semibold">
                        View All Products <BsChevronDoubleRight />
                    </span>
                </Link>
                <div className="grid grid-cols-4 justify-between items-center gap-4 my-4">
                    {categoriesData.map((category, index) => (
                        <Link
                            key={index}
                            className="flex flex-col justify-start items-center gap-2 text-base h-full"
                            to={`/products/${category.slug}`}
                        >
                            <img
                                src={category.img}
                                alt={category.name}
                                className="h-20 md:h-28 xl:h-32 w-20 md:w-28 xl:w-32"
                            />
                            <span className="font-semibold">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </h2>
        </>
    );
};

export default ShopByCategories;
