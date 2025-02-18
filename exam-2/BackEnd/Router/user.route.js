const Router = require('express')
const user = require('../Controller/user.Controller')
const authMiddleware = require('../MiddleWare/auth');
const UserRouter = Router();
UserRouter.post('/register', user.register);
UserRouter.post('/login', user.login);
UserRouter.get('/profile',  user.getProfile);
UserRouter.put('/update', authMiddleware, user.updateProfile);
UserRouter.get('/getall', authMiddleware, user.getAllUsers);
UserRouter.delete('/:id/delete', authMiddleware, user.deleteUser);

module.exports = UserRouter;
