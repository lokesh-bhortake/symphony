import { useEffect } from "react";
import { urlFor } from "../lib/client";
import { useCart } from "../contexts/CartContext";
import {
    BsArrowRightCircleFill,
    BsCart3,
    BsDash,
    BsPlusLg,
} from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
    const {
        cart,
        isVisible,
        setIsVisible,
        addItem,
        removeItem,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
    } = useCart();

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);

    return (
        <>
            <div
                className={`cart flex flex-col justify-between bg-pattens-blue-400 text-pattens-blue-950 fixed z-20 top-0 right-0 h-full ${
                    isVisible ? "" : "cart-close"
                }`}
                style={{
                    visibility: isVisible ? "visible" : "hidden",
                }}
            >
                <div className="flex flex-col justify-start items-start px-2 pt-4 max-h-[85%] h-full w-full">
                    <div className="flex gap-2 items-center">
                        <BsArrowRightCircleFill
                            onClick={() => setIsVisible(false)}
                        />{" "}
                        <p>Total items : {getTotalItems()}</p>
                    </div>

                    <div className="flex flex-col w-full gap-2 my-4 h-full overflow-auto">
                        {cart.length ? (
                            cart.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex w-full p-2 text-base border-b border-pattens-blue-500"
                                >
                                    <section className="w-24 h-24 rounded-lg">
                                        <img
                                            src={urlFor(
                                                product.images[0]
                                            ).url()}
                                            alt={product.name}
                                            className="rounded-lg"
                                        />
                                    </section>
                                    <section className="flex flex-col w-full px-2 ml-2 gap-1">
                                        <div className="flex items-center justify-between w-full">
                                            <p className="font-semibold">
                                                {product.name}
                                            </p>

                                            {product.quantity > 1 && (
                                                <RiDeleteBinFill
                                                    className="h-4 w-4"
                                                    onClick={() =>
                                                        removeItem(product._id)
                                                    }
                                                />
                                            )}
                                        </div>
                                        <p className="text-lg font-bold">
                                            {product.price}
                                        </p>
                                        <div className="flex items-center text-base gap-2 bg-pattens-blue-700 text-pattens-blue-50 w-fit text-center rounded-lg">
                                            <BsDash
                                                className="h-5 w-6 pl-2"
                                                onClick={() =>
                                                    updateQuantity({ product })
                                                }
                                            />
                                            <span className="px-2 bg-pattens-blue-100 text-pattens-blue-900">
                                                {product.quantity}
                                            </span>
                                            <BsPlusLg
                                                className="h-5 w-6 pr-2"
                                                onClick={() =>
                                                    addItem({ product })
                                                }
                                            />
                                        </div>
                                    </section>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-8 h-full text-2xl">
                                <BsCart3 className="h-20 w-20" />
                                <p>Oops Your Cart Is Empty!</p>
                                <button
                                    className="p-2 bg-pattens-blue-600 rounded-lg"
                                    onClick={() => setIsVisible(false)}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between  w-full my-2 py-2 px-4 border-t border-pattens-blue-500">
                    <section className="h-full">
                        <p className="font-bold text-lg">₹ {getTotalPrice()}</p>
                        <p className="text-sm">Inclusive of all taxes</p>
                    </section>
                    <section className="flex items-center justify-center">
                        <Link
                            className="bg-pattens-blue-200 p-2 rounded-lg"
                            to=""
                        >
                            Confirm Order
                        </Link>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Cart;
