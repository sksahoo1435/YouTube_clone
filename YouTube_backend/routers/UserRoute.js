const express = require('express');
const userRouter = express.Router();
const {AddUser,SignIn} = require('../controller/UserController')


userRouter.post('/signup', AddUser);
userRouter.post('/login',SignIn)

module.exports = userRouter;
