//const knex = require('knex');
const { database } = require('./config');

module.exports = require('knex')({
  client: 'mysql',
  connection: database
});

/*
knex({
  client: 'mysql',
  connection: database,
});
*/