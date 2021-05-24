const mysql = require('mysql');
const { database } = require('./config');

console.log(database);
const con = mysql.createConnection(database);
con.connect(err => { if (err) throw err; });

module.exports = con;

/*
const knex = require('knex');
const { database } = require('./config');

module.exports = knex({
  client: 'mysql2',
  connection: database,
});
*/