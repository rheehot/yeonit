const pool = require('./pool')

const query = async (sql, bind) => {
  const result = {}

  try {
    result.type = 0
    result.data = await pool.execute(sql, bind)[0]

    if (!result.data) {
      result.type = -1
      result.data = null
    }
  } catch (error) {
    result.type = 1
    result.data = error
  }
  return result
}

module.exports = query
