const uuidv1 = require('uuid/v1')
const uuidv5 = require('uuid/v5')

module.exports = function(req, res, next) {
  if (!req.session.yeonit) {
    req.session.yeonit = {
      uid: 'guest-' + uuidv5('guest', uuidv1())
    }
  }

  res.redirect('/app')
}
