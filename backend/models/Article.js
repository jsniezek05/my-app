'use strict';

const Sequelize = require('sequelize');
const db = require('../config/database');

const Article = db.define('articles', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
});


  Article.associate = function(models) {
    // associations can be defined here
  };


module.exports = Article;