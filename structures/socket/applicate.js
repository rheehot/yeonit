const handlers = require('./handlers')

module.exports = io => {
  io.on('connection', socket => {
    socket.on('yeonit.matchmaking', handlers.matchmaking)
  })
}
