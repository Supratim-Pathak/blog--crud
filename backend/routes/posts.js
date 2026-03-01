const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  addComment,
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const { validate } = require('../middleware/validateMiddleware');

const postValidation = [
  check('title', 'Title is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
  validate
];

const commentValidation = [
  check('name', 'Name is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
  validate
];

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', protect, postValidation, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

// Comments
router.post('/:id/comments', commentValidation, addComment);

module.exports = router;
