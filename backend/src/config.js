const fs = require('fs');

const readFileSync = filename => fs.readFileSync(filename).toString('utf8');

// Constants
module.exports = {
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
      ? readFileSync(process.env.DATABASE_PASSWORD)
      : null
  },
  port: process.env.PORT || 8080
};
