const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
	imageUrl: String,
	caption: String,
	user: Object,
	comments: [{}],
	reactions: [{}]
});

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;