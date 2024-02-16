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
import styles from "../styles";

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [categoriesToggle, setCategoriesToggle] = useState(false);

    return (
        <nav className="fixed top-0 w-full px-2 md:px-4 pt-2 md:pt-4 py-2 md:py-0 text-shadow-green-50 text-base md:text-lg bg-pattens-blue-500 z-10">
            <div className={`${styles.flexCenter}`}>
                <div className="flex justify-between items-center w-full 2xl:max-w-7xl">
                    <section
                        className={`${styles.flexCenter} cursor-pointer gap-x-4 pl-4`}
                    >
                        {navToggle ? (
                            <BsXLg
                                className="text-2xl md:hidden"
                                onClick={() => setNavToggle(!navToggle)}
                            />
                        ) : (
                            <SlMenu
                                className="text-2xl md:hidden"
                                onClick={() => setNavToggle(!navToggle)}
                            />
                        )}
                        <a href="/">
                            <img
                                src={logos.logoSvg}
                                alt="logo"
                                className=" h-12 w-auto"
                            />
                        </a>
                    </section>

                    {/* Desktop nav */}
                    <ul
                        className={`gap-x-4 hidden md:flex items-center h-16 cursor-pointer`}
                    >
                        <li
                            className={`${styles.flexCenter} gap-x-2 h-16`}
                            onMouseEnter={() =>
                                setCategoriesToggle(!categoriesToggle)
                            }
                            onMouseLeave={() =>
                                setCategoriesToggle(!categoriesToggle)
                            }
                        >
                            <span>Categories</span>
                            {categoriesToggle ? <SlArrowUp /> : <SlArrowDown />}

                            {categoriesToggle && (
                                <div className="absolute top-20 left-auto bg-black z-10">
                                    <ul className="grid grid-cols-4 gap-2 p-2 bg-pattens-blue-500">
                                        <li
                                            className={`bg-slate-300 p-2 flex items-center justify-start gap-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.neckband_n
                                                }
                                                alt="neckbands"
                                                className="w-16 h-16"
                                            />
                                            <span>Neckbands</span>
                                        </li>
                                        <li
                                            className={`bg-slate-300 p-2 flex items-center justify-start gap-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.wless_headphone_n
                                                }
                                                alt="wireless_headphones"
                                                className="w-16 h-16"
                                            />
                                            <span>Wireless Headphones</span>
                                        </li>
                                        <li
                                            className={`bg-slate-300 p-2 flex items-center justify-start gap-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.w_headphone_n
                                                }
                                                alt="wired_headphones"
                                                className="w-16 h-16"
                                            />
                                            <span>Wired Hedphones</span>
                                        </li>
                                        <li
                                            className={`bg-slate-300 p-2 flex items-center justify-start gap-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.w_earphone_n
                                                }
                                                alt="wired_earphones"
                                                className="w-16 h-16"
                                            />
                                            <span>Wired Earphones</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>Bestsellers</li>

                        {/* <li>Searchbar</li> */}
                    </ul>

                    <section className={`${styles.flexCenter} gap-4 text-2xl`}>
                        <SlBasket className="cursor-pointer" />
                        <SlUser className="cursor-pointer" />
                    </section>

                    {/* Mobile nav */}
                    <div
                        className={`customSlide bg-pattens-blue-500 absolute border top-16 z-10 left-0 h-svh ${
                            navToggle ? "" : "slide-close"
                        }`}
                        style={{
                            visibility: navToggle ? "visible" : "hidden",
                        }}
                    >
                        <ul
                            className={`flex flex-col p-4 cursor-pointer gap-4`}
                        >
                            <li
                                className={
                                    "flex flex-col items-center justify-between border p-2"
                                }
                            >
                                <section className="flex items-center justify-between w-full">
                                    Categories
                                    {categoriesToggle ? (
                                        <BsDashLg
                                            className="text-xl"
                                            onClick={() =>
                                                setCategoriesToggle(
                                                    !categoriesToggle
                                                )
                                            }
                                        />
                                    ) : (
                                        <BsPlusLg
                                            className="text-xl"
                                            onClick={() =>
                                                setCategoriesToggle(
                                                    !categoriesToggle
                                                )
                                            }
                                        />
                                    )}
                                </section>
                                <section
                                    className={`${
                                        categoriesToggle ? "block" : "hidden"
                                    } w-full bg-slate-700 text-white border`}
                                >
                                    <ul className="grid grid-cols-2 gap-2">
                                        <li
                                            className={`${styles.flexCenter} flex-col text-center gap-2 pb-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.neckband_n
                                                }
                                                alt="neckbands"
                                                className="w-24 h-24"
                                            />
                                            <span>Neckbands</span>
                                        </li>
                                        <li
                                            className={`${styles.flexCenter} flex-col text-center gap-2 pb-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.wless_headphone_n
                                                }
                                                alt="wireless_headphones"
                                                className="w-24 h-24"
                                            />
                                            <span>Wireless Headphones</span>
                                        </li>
                                        <li
                                            className={`${styles.flexCenter} flex-col text-center gap-2 pb-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.w_headphone_n
                                                }
                                                alt="wired_headphones"
                                                className="w-24 h-24"
                                            />
                                            <span>Wired Hedphones</span>
                                        </li>
                                        <li
                                            className={`${styles.flexCenter} flex-col text-center gap-2 pb-2`}
                                        >
                                            <img
                                                src={
                                                    nav_category_imgs.w_earphone_n
                                                }
                                                alt="wired_earphones"
                                                className="w-24 h-24"
                                            />
                                            <span>Wired Earphones</span>
                                        </li>
                                    </ul>
                                </section>
                            </li>
                            <li className="flex items-center justify-between p-2">
                                Bestsellers
                                <SlArrowRight className="text-md" />
                            </li>
                            <li className="flex items-center justify-between p-2">
                                Account
                                <SlArrowRight className="text-md" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
