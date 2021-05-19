const mysql = require("mysql");
const { database } = require('./config');

module.exports = mysql.createConnection(database);

/*
const knex = require('knex');
const { database } = require('./config');

module.exports = knex({
  client: 'mysql2',
  connection: database,
});
*/