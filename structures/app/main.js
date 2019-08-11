module.exports = function (req, res, next) {
  res.render('app', { games: new Array() })
}
