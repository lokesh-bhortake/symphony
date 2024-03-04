import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "../styles";

const ErrorBoundary = () => {
    let error = useRouteError();
    return (
        <div
            className={`${styles.flexCenter} w-svw h-svh text-pattens-blue-50`}
        >
            <div
                className={`${styles.flexCenter} flex-col gap-2 text-center text-2xl p-6 rounded-lg bg-pattens-blue-400`}
            >
                <p className="text-4xl font-semibold">{error.status}</p>
                <p className="text-lg font-normal">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorBoundary;
