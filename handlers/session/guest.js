const uuidv1 = require('uuid/v1')
const uuidv5 = require('uuid/v5')

module.exports = function (req, res, next) {
  if (!req.session.yeonit) {
    req.session.yeonit = {
      uid: 'guest_' + uuidv5('yeonit.guest', uuidv1())
    }
  }

  res.redirect('/app')
}
