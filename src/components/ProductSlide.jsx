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
            <div className="flex flex-col gap-2">
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
                            <p key={index} className="rounded-lg border p-1">
                                {tag}
                            </p>
                        ))}
                    </div>
                </Link>
                <div className="flex justify-around items-center font-semibold py-2 mb-2">
                    <p>₹{product.price}</p>
                    <button
                        className="font-normal text-base bg-pattens-blue-300 px-2 py-1 rounded-lg"
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
