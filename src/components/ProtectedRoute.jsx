import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const ProtectedRoute = () => {
    const { user } = useUserAuth();
    return user ? (
        <Navigate to="/" />
    ) : (
        <>
            <Navigate to="/auth" /> <Outlet />
        </>
    );
};

export default ProtectedRoute;
