const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Article = require('../models/Article');

router.get('/', ( req, res ) => 
	Article.findAll({ order: [['updatedAt', 'DESC']] })
		.then(articles => {
			console.log(articles);
			res.json(articles);
		})
		.catch(err => console.log(err))
	);

router.get('/:id', ( req, res ) => 
	Article.findByPk(req.params.id)
		.then(article => res.json(article))
		.catch(err => res.status(400).json('Error: ' + err)));

router.post("/", (req, res) => 
    Article.create({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content
    }).then( result => res.json(result) )
  );

router.put( "/:id", (req, res) =>
    Article.update({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( result => res.json(result) )
  );

  router.delete( "/:id", (req, res) =>
    Article.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );


module.exports = router;