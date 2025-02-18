const { Router } = require("express");
const userController = require("../controller/user");
const routes = Router();
routes.post("/signup", userController.createUser);
routes.post("/login", userController.login);
routes.get("/", userController.getAllUsers);
routes.post("/forgot-password", userController.forgotPassword);
routes.post("/reset-password", userController.resetPassword);
module.exports = routes;