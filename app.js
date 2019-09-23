const debug = require('debug')
const express = require('express')
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const uuidv4 = require('uuid/v4')
const http = require('http')
const socket = require('socket.io')
const redis = require('redis')
const redisSession = require('connect-redis')
const redisSocket = require('socket.io-redis')
const passport = require('passport')

const structures = require('./structures')
const config = require('./config')

const indexRouter = require('./routes/index')
const appRouter = require('./routes/app')
const sessionRouter = require('./routes/session')

const app = express()
const server = http.createServer(app)
const redisClient = redis.createClient()
const RedisStore = redisSession(session)
const io = socket(server, {
  transports: ['websocket', 'polling']
})

// NOTE: Configure Express.JS application:
app.set('uuid', uuidv4())
app.set('config', config)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('trust proxy', 1)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    client: redisClient,
    ttl: 260,
    prefix: 'yeonit_sess:'
  }),
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 1000 * 60 * 60 * 3
  }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter)
app.use('/app', appRouter)
app.use('/session', sessionRouter)

app.use((req, res, next) => {
  res.status(404).end()
})
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.json(res.locals).end()
})

// NOTE: Configure Socket.IO application:
io.adapter(redisSocket({
  key/* same as prefix */: 'yeonit_wsoc:',
  host: 'localhost',
  port: 6379
}))

structures.socket.applicate(io)

// NOTE: Configure passport authentication:
structures.authentication.applicate(app)

// NOTE: Configure debugger:
debug('yeonit:server')

// NOTE: Configure HTTP server application:
server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port

  debug('Listening on ' + bind)
})
server.listen(config.service.port)

module.exports = app
module.exports.io = io
