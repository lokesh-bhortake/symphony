import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import useForm from "../../utils/useForm";
import { validateSignUpForm } from "../../utils/validations";

const SignUp = () => {
    const { handleChange, values, handleSubmit, errors } =
        useForm(validateSignUpForm);

    return (
        <div
            className={`${styles.flexCenter} w-svw h-svh text-pattens-blue-50 mt-8`}
        >
            <div
                className={`${styles.flexCenter} flex-col gap-2 p-6 rounded-lg text-center text-2xl bg-pattens-blue-400`}
            >
                <span className="mb-6 font-bold">Sign up</span>
                <hr className="w-full text-pattens-blue-50" />
                <form
                    className="flex flex-col text-start text-base font-medium w-full gap-2 p-2 my-4"
                    onSubmit={handleSubmit}
                >
                    <label>Name</label>
                    <input
                        type="text"
                        name="username"
                        className="px-2 p-1 rounded-lg text-pattens-blue-950"
                        value={values.username}
                        onChange={handleChange}
                    />

                    {errors.username && <p>{errors.username}</p>}
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

                    <label>Retype your password</label>
                    <input
                        type="password"
                        name="password2"
                        className="px-2 p-1 rounded-lg text-pattens-blue-950"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}

                    <input
                        type="submit"
                        value="Sign up"
                        className="bg-pattens-blue-800 text-pattens-blue-50 rounded-lg p-2 mt-4 cursor-pointer"
                    />
                </form>
                <hr className="w-full text-pattens-blue-50" />
                <span className="text-sm font-normal mt-2">
                    Already have an account?{" "}
                    <Link
                        to=".."
                        relative="login/"
                        className="text-pattens-blue-800 font-semibold"
                    >
                        Login
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignUp;
