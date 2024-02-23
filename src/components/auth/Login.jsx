import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import useForm from '../../utils/useForm'
import { validateLogInForm } from "../../utils/validations";

const Login = () => {
    const { handleChange, values, handleSubmit, errors } =
        useForm(validateLogInForm);

    return (
        <div className={`${styles.flexCenter} w-svw h-svh bg-pattens-blue-300`}>
            <div
                className={`${styles.flexCenter} flex-col gap-2 text-center text-2xl`}
            >
                <span className="mb-4 font-bold">Login to your acount</span>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col text-start text-base font-medium w-full gap-2 p-2 border"
                >
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="p-1"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="p-1"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}

                    <input
                        type="submit"
                        value="Login"
                        className="bg-pattens-blue-600 mt-4 cursor-pointer"
                    />
                </form>
                {errors.authError && <span>{errors.authError}</span>}
                <span className="text-sm font-normal mt-2">
                    Don't have an account?{" "}
                    <Link
                        to="signup/"
                        className=" text-pattens-blue-950 font-semibold"
                    >
                        Sign Up
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;
