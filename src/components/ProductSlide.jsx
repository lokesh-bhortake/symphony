import React from "react";
import { urlFor } from "../lib/client";
import styles from "../styles";
import { Link } from "react-router-dom";

const ProductSlide = ({ product }) => {
    console.log(product.slug.current);
    return (
        <>
            <Link
                className="flex flex-col gap-2"
                to={`/products/${product.slug.current}`}
                state={product}
            >
                <img
                    src={urlFor(product?.images[0]).url()}
                    alt={product.name}
                    className=" rounded-t-xl"
                />
                <section className="gap-2 flex flex-col pb-4">
                    <h3 className="font-bold">{product.name}</h3>
                    <div
                        className={`flex justify-center items-center gap-2 text-xs w-full`}
                    >
                        {product.tags.map((tag, index) => (
                            <p key={index} className="rounded-lg border p-1">
                                {tag}
                            </p>
                        ))}
                    </div>
                    <div className="flex justify-around items-center font-semibold py-2">
                        <p>₹{product.price}</p>
                        <button className="font-normal text-base bg-pattens-blue-300 px-2 py-1 rounded-lg">
                            Add to cart
                        </button>
                    </div>
                </section>
            </Link>
        </>
    );
};

export default ProductSlide;
