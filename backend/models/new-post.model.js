const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newPostSchema = new Schema({
		title : { type: String, required: false},
		//date: { type: Date, required: false},
		description: { type: String, required: false},
		content: { type: String, required: false},
});

const Post = mongoose.model('Post', newPostSchema);

module.exports = Post;