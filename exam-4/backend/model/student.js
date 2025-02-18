const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["student", "teacher"], required: true },
    },
    { timestamps: true }
);
const Student = mongoose.model("User", userSchema);
module.exports = Student;

