module.exports = {
  app: {
    port: 3000,
    key: [],
    session: {
      prefix: 'yeonit_sess:',
      redis: {
        host: 'localhost',
        port: 6397
      }
    }
  }
}
