const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newPostSchema = new Schema({
		title : { type: String, required: true},
		date: { type: Date, required: true},
		description: { type: String, required: true},
		content: { type: String, required: true},
});

const Post = mongoose.model('Post', newPostSchema);

module.exports = Post;