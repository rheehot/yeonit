const knex = require('knex')

const config = require('../../config')

module.exports = knex({
  client: 'mysql2',
  connection: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
  },
  pool: {
    min: 2,
    max: config.database.connectionLimit
  }
})
