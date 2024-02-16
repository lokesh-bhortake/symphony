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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="log" element={<Home />} />
            <Route path="auth/">
                <Route path="" element={<Login />} />
                <Route path="signup/" element={<SignUp />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserAuthContextProvider>
            <RouterProvider router={router} />
        </UserAuthContextProvider>
    </React.StrictMode>
);
