const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: String,
	password: String,
	name: String,
	profilePictureUrl: String
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;