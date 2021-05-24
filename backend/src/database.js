const knex = require('knex');
const { database } = require('./config');

module.exports = knex({
  client: 'mysql',
  connection: database,
});