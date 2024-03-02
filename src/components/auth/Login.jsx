import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import useForm from "../../utils/useForm";
import { validateLogInForm } from "../../utils/validations";

const Login = () => {
    const { handleChange, values, handleSubmit, errors } =
        useForm(validateLogInForm);

    return (
        <div
            className={`${styles.flexCenter} w-svw h-svh text-pattens-blue-50`}
        >
            <div
                className={`${styles.flexCenter} flex-col gap-2 text-center text-2xl p-6 rounded-lg bg-pattens-blue-400`}
            >
                <span className="mb-6 font-bold">Login</span>
                <hr className="w-full text-pattens-blue-50" />
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col text-start text-base font-medium w-full gap-2 p-2 my-4"
                >
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="px-2 p-1 rounded-lg text-pattens-blue-950"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="px-2 p-1 rounded-lg text-pattens-blue-950"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}

                    <input
                        type="submit"
                        value="Login"
                        className="bg-pattens-blue-800 text-pattens-blue-50 rounded-lg p-2 mt-4 cursor-pointer"
                    />
                </form>
                {errors.authError && <span>{errors.authError}</span>}
                <hr className="w-full text-pattens-blue-50" />
                <span className="text-sm font-normal mt-2">
                    Don't have an account?{" "}
                    <Link
                        to="/auth/signup/"
                        className="text-pattens-blue-800 font-semibold"
                    >
                        Sign Up
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;
