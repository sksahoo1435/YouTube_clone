const express = require('express');
const userRouter = express.Router();
const {AddUser} = require('../controller/UserController')


userRouter.post('/signup', AddUser);

module.exports = userRouter;
