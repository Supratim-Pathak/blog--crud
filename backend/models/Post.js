const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  authorName: {
    type: String,
    required: true
  },
  comments: [CommentSchema],
}, { timestamps: true });

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', PostSchema);
