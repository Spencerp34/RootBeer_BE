require('dotenv').config();

const pg = require('pg')

const sharedConfig = {
  client: 'pg',
  migrations: { directory: './api/data/migrations' },
  seeds: { directory: './api/data/seeds' },
}


module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      database: process.env.DATABASE_URL,
      user:     process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
  },

};
