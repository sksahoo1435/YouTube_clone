const express = require('express')
const channelRouter = express.Router();
const {AddChannel,getChannel,getChannelById} = require('../controller/ChannelController');

channelRouter.post('/channel',AddChannel)
channelRouter.get('/channel',getChannel)
channelRouter.get('/channel/:id',getChannelById)

module.exports = channelRouter;
