//Require4d files
const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('heroku_c91452d0fad5501', 'bfe9af506aa143', 'd633a746', {
      host: 'localhost',
      dialect: 'mysql',
      port: 5000
    });

module.exports = sequelize;