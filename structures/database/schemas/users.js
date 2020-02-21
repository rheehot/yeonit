module.exports = async lib => {
  await lib.schema.createTable('users', table => {
    table.increments().primary()

    table.string('tag', 32)
    table.string('name', 32)
    table.string('avatar', 512)
    table.integer('experience', 11)
    table.integer('matchmakingRate', 11)
    table.string('createdAt', 32)
    table.string('lastSeenAt', 32)
    table.integer('playedMatches', 11)
    table.integer('wonMatches', 11)
    table.integer('defeatMatches', 11)
    table.boolean('blocked')
    table.string('blockedReason', 2048)
    table.string('blockedUntil', 32)
    table.integer('permission', 11)
    table.string('email', 320)
    table.integer('status', 11)
    table.string('locale', 16)
    table.string('provider', 32)
    table.string('providerIdentify', 32)

    return table
  })
}
