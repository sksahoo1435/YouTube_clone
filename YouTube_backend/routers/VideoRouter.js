const express = require('express');
const VideoRouter = express.Router();
const { getVideos, uploadVedio, updateVideoData, deleteVideoData, downloadVideo } = require('../controller/VideoController')
const { uploadFields } = require('../middlewire/uploader')

VideoRouter.get('/', getVideos)
VideoRouter.get('/download', downloadVideo)
VideoRouter.post('/', uploadFields, uploadVedio);
VideoRouter.put('/', updateVideoData)
VideoRouter.delete('/', deleteVideoData)


module.exports = VideoRouter;