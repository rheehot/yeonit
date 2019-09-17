const Match = require('../objects/Match')
const methods = require('./methods')

class MatchmakingManager {
  constructor (options) {
    options = []

    this.gamemode = options.gamemode || 'default'
    this.method =
      methods[options.method] || methods.rankedQueue || methods.simpleQueue
    this.playersPerMatch = options.playersPerMatch || 5
    this.alignDescend = options.alignDescend || false
    this.matchmakingInterval = options.matchmakingInterval || 5
    this.matchmakingDelay = options.matchmakingDelay || 5

    if (!this.method) {
      throw new Error('Matchmaking method is not provided!')
    }

    this.queue = []

    setInterval(async () => {
      if (this.queue.length >= this.playersPerMatch) {
        const groups = await this.method(this.queue, {
          descend: this.alignDescend,
          playersPerMatch: this.playersPerMatch
        })

        if (groups.length) {
          groups.forEach(function (group) {
            const match = new Match({
              gamemode: this.gamemode
            })

            group.forEach(function (user) {
              match.addUser(user)
            })
            match.start(this.matchmakingDelay)
          })
        }
      }
    }, this.matchmakingInterval * 1000)
  }

  enqueue (user) {
    this.queue.push(user)
  }
}

module.exports = MatchmakingManager
