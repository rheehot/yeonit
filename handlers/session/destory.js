module.exports = function (req, res, next) {
  delete req.session.yeonit

  res.redirect('/session')
}
