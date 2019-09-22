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
    options: {
      registerAs: 'default'
    },
    classes: [
      {
        name: 'guest',
        level: 0
      },
      {
        name: 'default',
        level: 1
      },
      {
        name: 'admin',
        level: 2
      }
    ],
    ranks: [
      {
        name: 'unranked',
        level: 0
      }
    ]
  }
}
