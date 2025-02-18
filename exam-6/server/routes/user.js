const Router = require('express')
const user = require('../controller/user.controller')
const UserRouter = Router();
UserRouter.post('/register', user.register);
UserRouter.post('/login', user.login);

module.exports = UserRouter;