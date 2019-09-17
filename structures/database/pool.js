const mysql = require('mysql2/promise')

const preferences = require('../../preferences')

module.exports = mysql.createPool(preferences.database)
