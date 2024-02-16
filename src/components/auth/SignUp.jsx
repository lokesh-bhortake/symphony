import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import useForm from "../utils/useForm";
import { validateSignUpForm } from "../utils/validations";


const SignUp = () => {
    const { handleChange, values, handleSubmit, errors } =
        useForm(validateSignUpForm);

    return (
        <div className={`${styles.flexCenter} w-svw h-svh bg-pattens-blue-300`}>
            <div
                className={`${styles.flexCenter} flex-col gap-2 p-4 text-center text-2xl`}
            >
                <span className="mb-4 font-bold">Sign up to your acount</span>
                <form
                    className="flex flex-col text-start text-base font-medium w-full gap-2 p-2 border"
                    onSubmit={handleSubmit}
                >
                    <label>Name</label>
                    <input
                        type="text"
                        name="username"
                        className="p-1 "
                        value={values.username}
                        onChange={handleChange}
                    />

                    {errors.username && <p>{errors.username}</p>}
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

                    <label>Retype your password</label>
                    <input
                        type="password"
                        name="password2"
                        className="p-1"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}

                    <input
                        type="submit"
                        value="Sign up"
                        className="bg-pattens-blue-600 mt-4 cursor-pointer"
                    />
                </form>
                <span className="text-sm font-normal mt-2">
                    Already have an account?{" "}
                    <Link
                        to=".."
                        relative="login/"
                        className="text-pattens-blue-950 font-semibold"
                    >
                        Login
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignUp;
