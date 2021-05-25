const { database } = require('./config');
const knex = require('knex')({
  client: 'mysql',
  connection: database
});

module.exports = knex;