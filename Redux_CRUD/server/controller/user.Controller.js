import userModel from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        let { email, name, age, } = req.body;
        const isExist = await userModel.findOne({ email: email })
        if (isExist) {
            return res.status(403).json({ message: "User Already Exist" })
        } else {
            let user = await userModel.create(req.body);
            return res.status(200).json({ message: 'User Created Successful', user })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Problem" })
    }
}
export const getUserById = async (req, res) => {
    let { id } = req.params;

    try {
        const user = await userModel.findById(id);
        if (user) {
            console.log(user);
            
            return res.status(200).json({ message: "User Found", user })
        }
        else {
            return res.status(404).json({ message: "User Not Found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem" })
    }
}
export const getUsers = async (req, res) => {
    try {
        let users = await userModel.find({});
        if (!users) {
            return res.status(404).json({ message: "No User Found" })
        }
        else {
            return res.status(200).json({ message: "All Users", users })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem" })
    }
}
export const updateUser = async (req, res) => {
    try {
        let { id } = req.params;

        let user = await userModel.findById(id);
        if (user) {
            const userUpdate = await userModel.findByIdAndUpdate(id, req.body, { new: true });
            return res.status(200).json({ message: "User Updated Successful", user: userUpdate })
        } else {
            return res.status(404).json({ message: "User Not Found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem", error })
    }
}
export const deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: "User Not Found" })
        }
        await userModel.findByIdAndDelete(id)
        return res.status(200).json({ message: "User Delete Successful", id })
    } catch (error) {
        res.status(404).json({ message: "error deleting user", error });

    }
}