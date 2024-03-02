import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const ProtectedRoute = ({ element }) => {
    const { user } = useUserAuth();
    return user ? (
        <Route>{element}</Route>
    ) : (
        <Navigate to={window.location.pathname} replace />
    );
};

export default ProtectedRoute;
