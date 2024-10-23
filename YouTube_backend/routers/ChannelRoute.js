const express = require('express')
const channelRouter = express.Router();
const {AddChannel,getChannel,getChannelById} = require('../controller/ChannelController');
const { uploadFields } = require('../middlewire/uploader');

channelRouter.post('/channel',uploadFields,AddChannel)
channelRouter.get('/channel',getChannel)
channelRouter.get('/channel/:id',getChannelById)

module.exports = channelRouter;
