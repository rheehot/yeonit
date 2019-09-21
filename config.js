module.exports = {
  service: {
    port: 3006,
    mode: 'development',
    name: '연잇'
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
  },
  user: {
    classes: [
      {
        name: 'guest',
        level: 0
      }
    ],
    admins: [],
    ranks: []
  }
}
