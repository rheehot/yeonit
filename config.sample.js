module.exports = {
  service: {
    port: 3006,
    mode: 'development',
    name: '연잇'
  },
  authentication: {
    google: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
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
        name: 'default',
        level: 0
      },
      {
        name: 'admin',
        level: 1
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
