const express = require('express');
const VideoRouter = express.Router();
const { getVideos, uploadVedio, updateVideoData, deleteVideoData, downloadVideo } = require('../controller/VideoController')
const { uploadFields } = require('../middlewire/uploader');
const authToken = require('../middlewire/authMiddlewire');

VideoRouter.get('/', getVideos)
VideoRouter.get('/download', downloadVideo)
VideoRouter.post('/',authToken, uploadFields, uploadVedio);
VideoRouter.put('/', updateVideoData)
VideoRouter.delete('/',authToken, deleteVideoData)


module.exports = VideoRouter;