import React, { useState } from "react";
import { logos, nav_category_imgs } from "../assets/index";
import {
    SlMenu,
    SlBasket,
    SlUser,
    SlArrowRight,
    SlArrowDown,
    SlArrowUp,
} from "react-icons/sl";
import { BsPlusLg, BsDashLg, BsXLg } from "react-icons/bs";
import { useCart } from "../contexts/CartContext";
import styles from "../styles";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import toast from "react-hot-toast";

const categories = [
    { name: "Neckbands", slug: "neckbands", img: nav_category_imgs.neckband_n },
    {
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        img: nav_category_imgs.wless_headphone_n,
    },
    {
        name: "Wired Headphones",
        slug: "wired-headphones",
        img: nav_category_imgs.w_headphone_n,
    },
    {
        name: "Wired Earphones",
        slug: "wired-earphones",
        img: nav_category_imgs.w_earphone_n,
    },
];

const Navbar = () => {
    const { getTotalItems } = useCart();
    const [toggle, setToggle] = useState({
        nav: false,
        categories: false,
        logOutSection: false,
    });
    const { setIsVisible } = useCart();
    const { user, logOut } = useUserAuth();

    const handleToggle = (key) => setToggle({ ...toggle, [key]: !toggle[key] });
    const handleLogOut = async () => {
        try {
            await logOut();
            toast.success("Logout Successful");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="fixed top-0 w-full px-2 md:px-4 pt-2 md:pt-4 py-2 md:py-0 bg-pattens-blue-200 text-pattens-blue-950 text-base md:text-lg z-10 border-b border-b-pattens-blue-400">
            <div className={`${styles.flexCenter}`}>
                <div className="flex justify-between items-center w-full 2xl:max-w-7xl">
                    <section
                        className={`${styles.flexCenter} cursor-pointer gap-x-4 pl-4`}
                    >
                        {toggle.nav ? (
                            <BsXLg
                                className="text-2xl md:hidden"
                                onClick={() => handleToggle("nav")}
                            />
                        ) : (
                            <SlMenu
                                className="text-2xl md:hidden"
                                onClick={() => handleToggle("nav")}
                            />
                        )}
                        <a href="/">
                            <img
                                src={logos.logoSvgB}
                                alt="logo"
                                className="h-12 w-auto py-1"
                            />
                        </a>
                    </section>

                    {/* Desktop nav */}
                    <ul
                        className={`gap-x-4 hidden md:flex items-center h-16 cursor-pointer`}
                    >
                        <li
                            className={`${styles.flexCenter} gap-x-2 h-16`}
                            onMouseEnter={() => handleToggle("categories")}
                            onMouseLeave={() => handleToggle("categories")}
                        >
                            <span>Categories</span>
                            {toggle.categories ? (
                                <SlArrowUp />
                            ) : (
                                <SlArrowDown />
                            )}

                            {toggle.categories && (
                                <div className="absolute top-20 left-auto bg-black z-10">
                                    <ul className="grid grid-cols-4 gap-2 p-2 bg-pattens-blue-200">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                className={`p-2 flex items-center justify-start gap-2 hover:text-pattens-blue-500`}
                                                to={`/products/${cat.slug}`}
                                            >
                                                <img
                                                    src={cat.img}
                                                    alt={cat.slug}
                                                    className="w-16 h-16"
                                                />
                                                <span>{cat.name}</span>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <Link to="/products" className="hover:text-pattens-blue-500">Products</Link>
                    </ul>

                    <section
                        className={`${styles.flexCenter} gap-4 text-2xl relative`}
                    >
                        <div className="h-6 w-6 relative">
                            <SlBasket
                                onClick={() => setIsVisible(true)}
                                className="cursor-pointer w-full h-full"
                            />
                            <div className="absolute p-1 z-20 bottom-3 left-3 rounded-full bg-red-500 text-[10px] leading-none text-pattens-blue-50">
                                {getTotalItems()}
                            </div>
                        </div>

                        {user ? (
                            <>
                                <SlUser
                                    className="cursor-pointer"
                                    onClick={() =>
                                        handleToggle("logOutSection")
                                    }
                                />

                                {toggle.logOutSection && (
                                    <section className="absolute h-20 w-28 rounded-xl bg-slate-400 top-10 right-0 flex items-center justify-center mt-1">
                                        <button
                                            className="btn rounded-lg text-pattens-blue-50 text-base p-2"
                                            onClick={handleLogOut}
                                        >
                                            Logout
                                        </button>
                                    </section>
                                )}
                            </>
                        ) : (
                            <Link to={"/auth"}>
                                <SlUser className="cursor-pointer" />
                            </Link>
                        )}
                    </section>

                    {/* Mobile nav */}
                    <div
                        className={`customSlide bg-pattens-blue-200 absolute top-16 z-10 left-0 h-svh ${
                            toggle.nav ? "" : "slide-close"
                        }`}
                        style={{
                            visibility: toggle.nav ? "visible" : "hidden",
                        }}
                    >
                        <ul
                            className={`flex flex-col p-4 cursor-pointer gap-4`}
                        >
                            <li
                                className={
                                    "flex flex-col items-center justify-between p-2"
                                }
                            >
                                <section className="flex items-center justify-between w-full">
                                    Categories
                                    {toggle.categories ? (
                                        <BsDashLg
                                            className="text-xl"
                                            onClick={() =>
                                                handleToggle("categories")
                                            }
                                        />
                                    ) : (
                                        <BsPlusLg
                                            className="text-xl"
                                            onClick={() =>
                                                handleToggle("categories")
                                            }
                                        />
                                    )}
                                </section>
                                <section
                                    className={`${
                                        toggle.categories ? "block" : "hidden"
                                    } w-full text-white`}
                                >
                                    <ul className="grid grid-cols-2 gap-2">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                className={`${styles.flexCenter} flex-col text-center gap-2 pb-2`}
                                                to={`/products/${cat.slug}`}
                                                onClick={() =>
                                                    handleToggle("nav")
                                                }
                                            >
                                                <img
                                                    src={cat.img}
                                                    alt={cat.slug}
                                                    className="w-24 h-24"
                                                />
                                                <span>{cat.name}</span>
                                            </Link>
                                        ))}
                                    </ul>
                                </section>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="flex items-center justify-between p-2"
                                    onClick={() => handleToggle("nav")}
                                >
                                    Products
                                    <SlArrowRight className="text-md" />
                                </Link>
                            </li>
                            {/* <li className="flex items-center justify-between p-2">
                                Account
                                <SlArrowRight className="text-md" />
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
