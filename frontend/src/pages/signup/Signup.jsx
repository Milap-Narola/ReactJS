import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../service/Api";
import { useNavigate } from "react-router-dom";

const userSchema = z.object({
  name: z.string().min(2, "Min 2 characters").max(25, "Max 25 characters"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Min 6 characters")
    .regex(/[a-z]/, "Small letter required")
    .regex(/[A-Z]/, "Capital letter required")
    .regex(/[@%&_?$]/, "Special character required"),
  role: z.string().nonempty("Role is required"),
});

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const onSubmit = async (data) => {
    try {
      await registerUser(data.name, data.email, data.password, role);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            {...register("name")}
            className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <select
            className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md focus:ring focus:ring-blue-200"
            {...register("role")}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
