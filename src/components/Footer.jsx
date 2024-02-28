import React from "react";
import styles from "../styles";
import {
    BsLinkedin,
    BsMeta,
    BsTwitterX,
    BsInstagram,
    BsYoutube,
} from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div
                className={`${styles.flexCenter} mt-20 bg-pattens-blue-900 p-4 text-pattens-blue-50`}
            >
                <div className="flex flex-col justify-center items-center w-full 2xl:max-w-7xl gap-6 text-base p-4">
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
