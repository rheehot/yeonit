module.exports = function(req, res, next) {
  if (req.session.yeonit && req.session.yeonit.uid) {
    next()
  } else {
    res.redirect('/session')
  }
}
