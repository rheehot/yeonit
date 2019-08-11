module.exports = function(req, res, next) {
  req.session.destory(function() {
    req.logout()
    req.session = null

    res.redirect('/session')
  })
}
