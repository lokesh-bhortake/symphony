import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [cart, setCart] = useState([]);

    const addItem = ({ product }) => {
        let existingProduct = cart.find((item) => item._id === product._id);
        if (existingProduct === undefined) {
            existingProduct = false;
        }

        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                              totalPrice: (item.quantity + 1) * item.price,
                          }
                        : item
                )
            );
            toast.success(`${product.name} quantity updated!`);
        } else {
            setCart([
                ...cart,
                { ...product, quantity: 1, totalPrice: product.price },
            ]);
            toast.success(`${product.name} successfully added!`);
        }
    };

    const removeItem = (productId) => {
        setCart(cart.filter((item) => item._id !== productId));
        toast.success("Product successfully removed!");
    };

    const updateQuantity = ({ product }) => {
        if (product.quantity === 1) {
            removeItem(product._id);
        } else {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                              totalPrice: (item.quantity - 1) * item.price,
                          }
                        : item
                )
            );
            toast.success(`${product.name} quantity updated!`);
        }
    };

    const getTotalItems = () =>
        cart.reduce((total, item) => total + item.quantity, 0);

    const getTotalPrice = () =>
        cart.reduce((total, item) => total + (item.totalPrice || 0), 0);

    const contextValue = {
        cart,
        isVisible,
        setIsVisible,
        addItem,
        removeItem,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
    };

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    );
};

export const useCart = () => useContext(cartContext);
