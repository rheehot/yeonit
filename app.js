const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const uuidv4 = require('uuid/v4')
const uuidv5 = require('uuid/v5')

const indexRouter = require('./routes/index')
const appRouter = require('./routes/app')
const sessionRouter = require('./routes/session')

const app = express()

app.uuid = uuidv4()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('trust proxy', 1)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: uuidv5('yeonit', app.uuid),
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 1000 * 60 * 60 * 3
  }
}))

app.use('/', indexRouter)
app.use('/app', appRouter)
app.use('/session', sessionRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).end()
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
})

module.exports = app
