const crypto = require('crypto')

const config = require('../../../config')

module.exports = (salts, user) => {
  const keys = {
    id: 0,
    tag: crypto.createHash('md5').update(user.displayName + salts.currentTime).digest('hex'),
    name: user.displayName,
    avatar: user.photos[0].value,
    experience: 0,
    matchmakingRate: 0,
    playedMatches: 0,
    createdAt: salts.currentTime,
    lastSeenAt: salts.currentTime,
    wonMatches: 0,
    defeatMatches: 0,
    blocked: 0,
    blockedReason: 0,
    blockedUntil: 0,
    permission: config.user.classes.find(level => level.name === config.user.options.registerAs).level,
    email: user.emails.find(email => email.verified).value,
    status: 1,
    locale: user._json.locale,
    provider: user.provider,
    providerIdentify: user.id
  }

  return keys
}
