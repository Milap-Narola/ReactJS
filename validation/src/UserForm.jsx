
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const validation = z.object({
    name: z.string().min(2, "min 2 characters").max(25, "max 25 characters"),
    email: z.string().email(),
    password: z
        .string()
        .min(6, "min 6 characters")
        .regex(/[a-z]/, "small character required")
        .regex(/[A-Z]/, "large character required")
        .regex(/[@%&_?$]/, "single special character required"),
});

const UserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validation),
    });

    const onSubmit = (data) => {
        console.log("onSubmit", data, errors);
    };

    return (
        <div className="flex justify-center  min-h-screen ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded-lg p-6 w-96"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
                    UserForm
                </h2>

                <div className="mb-4">
                    <label className="block text-black font-semibold">Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="w-full mt-1 p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full mt-1 p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        className="w-full mt-1 p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;
