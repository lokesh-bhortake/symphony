import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import { UserAuthContextProvider } from "./contexts/UserAuthContext.jsx";
import { ProductsDataContextProvider } from "./contexts/ProductsDataContext.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="auth/">
                <Route path="" element={<Login />} />
                <Route path="signup/" element={<SignUp />} />
            </Route>
            <Route path="products/:slug" element={<ProductDetail />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserAuthContextProvider>
            <ProductsDataContextProvider>
                <RouterProvider router={router} />
            </ProductsDataContextProvider>
        </UserAuthContextProvider>
    </React.StrictMode>
);
