const schemas = require('../schemas')
const knex = require('../knex')

module.exports = async () => {
  const schemaKeys = Object.keys(schemas)

  for (let i = 0; i < schemaKeys.length; i++) {
    const tableExists = await knex.schema.hasTable(schemaKeys[i])

    if (!tableExists) {
      await schemas[schemaKeys[i]](knex)
    }
  }
}
