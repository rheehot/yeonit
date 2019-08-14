const events = require('events')
const uuidv1 = require('uuid/v1')
const uuidv5 = require('uuid/v5')

const gamemodes = require('../gamemodes')

class Match {
  constructor(options) {
    options = options || new Object()

    this.created = Date.now()
    this.uuid = uuidv5('yeonit.match', uuidv1())
    this.events = new events.EventEmitter()

    this.gamemode = options.gamemode || Object.keys(gamemodes || new Object())[0] // NOTE: Select first gamemode from availables if no gamemode provided.
    this.players = new Array() // NOTE: Fill players after match created.
  }

  addUser(player) {
    if (!player.valid) {
      return
    }

    player.integrateMatch({
      uuid: this.uuid,
      events: this.events,
      index: this.players.length
    })

    this.players.push(player)
    this.events.emit('player.add', {
      uuid: player.uuid,
      identify: player.identify,
      rate: player.rate
    })
  }
  removeUser(player) {
    if (this.players[player.match.index]) {
      this.players.splice(player.match.index, 1)
      this.evetns.emit('player.remove', {
        uuid: player.uuid,
        index: player.match.index
      })

      player.match = null
    }
  }

  start(delay) {
    setTimeout(function () {
      this.events.emit('match.start', this.gamemode.config)
    }, (delay || 0) * 1000)
  }
  end(delay) {
    setTimeout(function () {
      this.events.emit('match.end')
    }, (delay || 0) * 1000)
  }
}

module.exports = Match
