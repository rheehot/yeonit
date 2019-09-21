module.exports = function (req, res, next) {
  res.render('session', {
    config: req.app.get('config'),
    title: '로그인'
  })
}
