import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Cart />
            <Outlet />
        </>
    );
};

export default Layout;
