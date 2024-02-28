import React from "react";
import { logos } from "../assets/index";
import { urlFor } from "../lib/client";
import { useCart } from "../contexts/CartContext";
import {
    BsFillPatchCheckFill,
    BsFillStarFill,
    BsShieldFillCheck,
    BsRepeat,
} from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";

const ProductInfo = ({ product }) => {
    const { addItem } = useCart();
    const handleAddToCart = () => {
        addItem({ product });
    };
    return (
        <div className="flex flex-col gap-2 bg-pattens-blue-50 rounded-lg">
            <div className="w-full grid md:grid-cols-2 gap-2 rounded-lg">
                <section className="rounded-lg">
                    <img
                        src={urlFor(product.images[0]).url()}
                        alt={product.name}
                        className="rounded-lg"
                    />
                </section>
                <section className="flex gap-4 flex-col p-4">
                    <section className="flex flex-col items-start justify-start gap-2">
                        <span className="flex items-baseline justify-center gap-2 text-xs">
                            <BsFillStarFill className="text-shadow-green-300 " />
                            <p>4.5 | 1234 reviews</p>
                            <BsFillPatchCheckFill className="text-shadow-green-400" />
                        </span>
                        <h1 className=" font-bold text-3xl ">{product.name}</h1>
                        <span className="text-base font-light">
                            {product.category} with {product.tags[0]} and{" "}
                            {product.tags[1]}
                        </span>
                    </section>
                    <section className="flex flex-col w-fit gap-6">
                        <section className="flex flex-col gap-2">
                            <p className="text-sm font-bold">User's Love</p>
                            <div className="flex gap-2 bg-pattens-blue-200 rounded-lg pr-4">
                                <img
                                    src={logos.amazonLogo}
                                    alt="amazon_logo"
                                    className="h-16 w-16 bg-pattens-blue-100"
                                />
                                <section className="flex flex-col justify-center items-start text-sm gap-2 font-semibold">
                                    <p>75k+ units sold on Amazon</p>
                                    <p className="flex items-center gap-1">
                                        More than 30k+ 5{" "}
                                        <BsFillStarFill className="text-shadow-green-400 " />{" "}
                                        reviews
                                    </p>
                                </section>
                            </div>
                        </section>
                        <section className="flex gap-4 text-sm text-bunker-900">
                            <span className="flex flex-col items-center justify-center gap-2">
                                <FaTruckFast className="h-8 w-8" />
                                <p>Free Delivery</p>
                            </span>
                            <span className="flex flex-col items-center justify-center gap-2">
                                <BsShieldFillCheck className="h-8 w-8" />
                                <p>1 Yr Warranty</p>
                            </span>
                            <span className="flex flex-col items-center justify-center gap-2">
                                <BsRepeat className="h-8 w-8" />
                                <p>7-Day replacement</p>
                            </span>
                        </section>
                        <section className="flex flex-col w-full gap-4">
                            <p className="text-xl font-medium">
                                ₹{product.price}
                            </p>
                            <button
                                className=" bg-pattens-blue-800 rounded-lg text-pattens-blue-50 p-2"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </section>
                    </section>
                </section>
            </div>
            <p className="p-2">{product.description}</p>
        </div>
    );
};

export default ProductInfo;
