const pool = require('./pool')

async function query(sql, bind) {
  const result = new Object()

  try {
    result.type = 0
    result.data = await pool.execute(sql, bind)[0 /* Zero stands for rows */]

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
