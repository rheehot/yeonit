module.exports = function(req, res, next) {
  req.session.destory(function() {
    res.redirect('/')
  })
}
