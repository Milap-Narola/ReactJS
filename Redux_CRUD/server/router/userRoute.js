import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controller/user.Controller.js';
const UserRouter = Router();

UserRouter.post('/create', createUser);
UserRouter.get("/", getUsers);
UserRouter.get("/getbyid/:id", getUserById);
UserRouter.patch("/update/:id", updateUser);
UserRouter.delete("/delete/:id", deleteUser);
UserRouter.patch("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

export default UserRouter;