const handlers = require('./handlers')

module.exports = function (io) {
  module.exports.io = io

  io.on('connection', function (socket) {
    socket.on('yeonit.matchmaking', handlers.matchmaking)
  })
}
