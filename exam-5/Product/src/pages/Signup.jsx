import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const signupValidation = z.object({
    name: z.string().min(2, "Min 2 characters").max(25, "Max 25 characters"),
    email: z.string().email(),
    password: z
        .string()
        .min(6, "Min 6 characters")
        .regex(/[a-z]/, "Lowercase letter required")
        .regex(/[A-Z]/, "Uppercase letter required")
        .regex(/[@%&_?$]/, "Special character required"),
});

const Signup = ({ setUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user") || Cookies.get("auth");
        if (user) {
            navigate("/login"); 
        }
    }, [navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(signupValidation) });

    const onSubmit = (data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        Cookies.set("auth", data.token, { expires: 7 }); 
        navigate("/login"); 
    };

    return (
        <div className="flex justify-center min-h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Name</label>
                    <input type="text" {...register("name")} className="w-full mt-1 p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
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
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
