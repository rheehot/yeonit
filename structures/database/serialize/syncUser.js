const serializer = require('../../authentication/serializer')
const knex = require('../knex')

const emptyFunction = (e) => console.log(e)

module.exports = async user => {
  const salts = await {
    currentTime: Date.now()
  }
  const keys = await serializer[user.provider](salts, user)

  const _result = await knex('yeonit_users')
    .where({
      provider: user.provider,
      providerIdentify: user.id
    })
    .update({
      name: keys.name,
      avatar: keys.avatar,
      lastSeenTime: keys.lastSeenTime,
      email: keys.email
    })
    .catch(emptyFunction) ||
  await knex('yeonit_users')
    .insert(keys)
    .catch(emptyFunction)

  const result = await knex
    .select('*')
    .where({
      provider: user.provider,
      providerIdentify: user.id
    })
    .from('yeonit_users')

  return result[0]
}
