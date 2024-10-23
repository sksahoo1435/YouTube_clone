const express = require('express');
const userRouter = express.Router();
const {AddUser,SignIn} = require('../controller/UserController');
const { uploadFields } = require('../middlewire/uploader');


userRouter.post('/signup',uploadFields, AddUser);
userRouter.post('/login',SignIn)

module.exports = userRouter;
