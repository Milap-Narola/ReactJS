const Router  = require("express");
const {
    registerUser,
    getAllUsers,
    getUserById,
    deleteUser,
} = require("../controller/user.Controller");

const UserRouter = Router();

UserRouter.post("/signup", registerUser);
UserRouter.get("/users", getAllUsers);
UserRouter.get("/user/:id", getUserById);
UserRouter.delete("/user/:id", deleteUser);

module.exports = UserRouter;
