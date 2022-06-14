//Require4d files
const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'http://us-cdbr-east-05.cleardb.net/',
  dialect: 'mysql'
});

module.exports = sequelize;