import React, { useState } from "react";
import styles from "../styles";
import {
    BsLinkedin,
    BsMeta,
    BsTwitterX,
    BsInstagram,
    BsYoutube,
} from "react-icons/bs";
import { categoriesData } from "../utils/constants";
import { logos } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
    const [value, setValue] = useState("");
    const [err, setErr] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            setErr("Email required");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setErr("Email address is invalid");
        } else {
            setErr("Success! You have subscribed.");
            setValue("");
        }

        setTimeout(() => {
            setErr(null);
        }, 1500);
    };

    return (
        <>
            <div
                className={`${styles.flexCenter} mt-10 bg-pattens-blue-200 p-4 text-pattens-blue-950`}
            >
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl gap-6 text-base p-4">
                    <section className="grid sm:grid-cols-2 gap-2 justify-around items-start w-full">
                        <section className="flex flex-col gap-2">
                            <img
                                src={logos.logoSvgB}
                                alt="logo"
                                className="h-28 w-60"
                            />
                            <p className="text-lg font-semibold">
                                Subscribe to our email alerts
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col items-start
                                justify-center w-full gap-4"
                            >
                                <input
                                    type="email"
                                    name="footer_email"
                                    className="px-2 py-1 text-pattens-blue-950 rounded-lg"
                                    placeholder="Enter your email"
                                    value={value}
                                    onChange={handleChange}
                                />
                                <button
                                    type="submit"
                                    className="btn p-2 rounded-lg text-pattens-blue-50"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p>{err}</p>
                        </section>
                        <section className="flex flex-col text-lg gap-2 my-4">
                            <h6 className="font-bold">Shop</h6>
                            <ul className="grid gap-2 py-2 text-md">
                                {categoriesData.map((cat) => (
                                    <Link
                                        key={cat.slug}
                                        className={`flex items-center justify-start gap-2 cursor-pointer`}
                                        to={`/products/${cat.slug}`}
                                    >
                                        <span>{cat.name}</span>
                                    </Link>
                                ))}
                            </ul>
                        </section>
                    </section>
                    <section className="flex gap-x-6 items-center">
                        <p>Lets get social</p>
                        <BsLinkedin />
                        <BsMeta />
                        <BsTwitterX />
                        <BsInstagram />
                        <BsYoutube />
                    </section>
                    <p className="text-xs">
                        © 2024 Symphony. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
