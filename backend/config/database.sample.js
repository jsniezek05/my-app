const Sequelize = require('sequelize');


module.exports = new Sequelize('articles', 'postgres', 'password' {
  host: 'localhost',
  port: 5000,
  dialect: 'postgres',
  operatorsAlieases: false,

  pool: {
  	max: 5,
  	min:0,
  	acquire: 30000,
  	idle: 10000
  },
});
