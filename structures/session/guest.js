const uuidv1 = require('uuid/v1')

module.exports = function(req, res, next) {
  if (!req.session.yeonit) {
    req.session.yeonit = {
      uid: 'guest-' + uuidv1()
    }
  }

  res.redirect('/app')
}
