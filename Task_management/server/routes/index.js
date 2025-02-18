const { Router } = require("express");
const userRoutes = require("./user");
const taskRoutes = require("./task");
const routes = Router();
routes.use("/users", userRoutes);
routes.use("/task", taskRoutes);
module.exports = routes;
