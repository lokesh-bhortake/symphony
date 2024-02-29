import React from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
            <Toaster />
            <Navbar />
            <Cart />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
