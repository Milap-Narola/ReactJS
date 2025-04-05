import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controller/user.Controller.js';
const UserRouter = Router();

UserRouter.post('/create', createUser);
UserRouter.get("/", getUsers);
UserRouter.patch("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);
export default UserRouter;