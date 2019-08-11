module.exports = function(req, res, next) {
  if (req.session.uid) {
    next()
  } else {
    res.redirect('/session')
  }
}