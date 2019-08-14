const database = require('../database')

class User {
  constructor(uuid) {
    if (uuid.startsWith('guest_')) {
      this.uuid = uuid

      this.guest = true
      this.valid = true
    } else {
      const userdata = database.query(uuid)

      if (userdata) {
        this.uuid = uuid
        this._userdata = userdata

        this.identify = userdata.identify
        this.email = userdata.email
        this.description = userdata.description
        this.rate = userdata.rate

        this.valid = true
      }
    }
  }

  integrateMatch(match) {
    this.match = match

    // NOTE: Add match event handling below here;
  }
}

module.exports = User
