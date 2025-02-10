import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const loginValidation = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(6, "Min 6 characters")
        .regex(/[a-z]/, "Lowercase letter required")
        .regex(/[A-Z]/, "Uppercase letter required")
        .regex(/[@%&_?$]/, "Special character required"),
});

const Login = ({ setUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginValidation) });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
            setUser(storedUser); 
            navigate("/home"); 
        } else {
            alert("User Not Found, please try again.");
            navigate("/signup"); 
        }
    };

    return (
        <div className="flex justify-center min-h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input type="email" {...register("email")} className="w-full mt-1 p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Password</label>
                    <input type="password" {...register("password")} className="w-full mt-1 p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400" />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Login</button>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-600">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
