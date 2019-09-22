module.exports = function (req, res, next) {
  res.render('app', {
    config: req.app.get('config'),
    session: req.session,
    games: []
  })
}
