const express = require("express")
const router = express.Router()
const postController = require('../controllers/post.controller')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', postController.getPost)

router.patch('/:postId', postController.addComment)

router.post('/', upload.single('imageUrl'), postController.postPost )

router.post('/:postId', postController.addReaction)


module.exports = router