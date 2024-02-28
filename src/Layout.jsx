import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Cart />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
