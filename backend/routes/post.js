const router = require('express').Router();
let Post = require('../models/new-post.model.js');

router.route('/').get((req, res) => {
	Post.find()
	.then(newPost => res.json(newPost))
	.catch(err => res.status(400).json('Error: '+ err));
});

router.route("/add").post((req, res) => {


		const title = req.body.title;
		const date = Date.parse(req.body.date);
		const description = req.body.description;
		const content = req.body.content;



	const newPost = new Post({
		title,
		date,
		description,
		content,
	});



	newPost.save()
	.then(() => res.json("Uploaded"))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Post.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Post.findByIdAndDelete(req.params.id)
		.then(() => res.json('Post Deleted'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	Post.findById(req.params.id)
		.then(post => {
			post.title = req.body.title;
			post.date = Date.parse(req.body.date);
			post.description = req.body.description;
			post.content = req.body.content;

			post.save()
			.then(() => res.json('Post Updated'))
			.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;