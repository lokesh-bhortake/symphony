import React from "react";
import { urlFor } from "../lib/client";
import styles from "../styles";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const ProductSlide = ({ product }) => {
    const { addItem } = useCart();
    const handleAddToCart = () => {
        addItem({ product });
    };
    return (
        <>
            <div className="flex flex-col gap-2 rounded-xl bg-pattens-blue-100 border-2 border-pattens-blue-200 shadow-md text-pattens-blue-950">
                <Link
                    className="gap-2 flex flex-col"
                    to={`/products/${product.category}/${product.slug.current}`}
                    state={product}
                >
                    <img
                        src={urlFor(product?.images[0]).url()}
                        alt={product.name}
                        className="rounded-t-xl"
                    />
                    <h3 className="font-bold text-center">{product.name}</h3>
                    <div
                        className={`flex justify-center items-center gap-2 text-xs w-full`}
                    >
                        {product.tags.map((tag, index) => (
                            <p
                                key={index}
                                className="rounded-lg p-2 font-medium bg-pattens-blue-100 text-pattens-blue-900 border border-pattens-blue-600"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </Link>
                <div className="flex justify-around items-center font-semibold py-2 mb-2">
                    <p className="text-xl">₹{product.price}</p>
                    <button
                        className="btn font-medium text-base p-2 rounded-lg text-pattens-blue-50"
                        type="button"
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductSlide;
