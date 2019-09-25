const pool = require('./pool')

const query = async (sql, bind) => {
  const result = {}

  result.type = 0

  try {
    result.data = await pool.execute(sql, bind)[0]
  } catch (error) {
    result.type = 1
    result.data = error
  }

  return result
}

module.exports = query
