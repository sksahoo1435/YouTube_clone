const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

commentSchema.virtual('commentId').get(function(){
    return this._id.toString();
})

module.exports = mongoose.model('Comment', commentSchema);
