module.exports = {
  service: {
    port: 3006,
    mode: 'development'
  },
  session: {
    secret: 'yeonit'
  },
  database: {
    connectionLimit: 16,
    waitForConnections: true,
    host: 'localhost',
    user: '',
    password: '',
    database: '' // NOTE: Name of database.
  }
}
