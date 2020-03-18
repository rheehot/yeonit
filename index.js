const Koa = require('koa')
const useJSON = require('koa-json')
const useSession = require('koa-generic-session')
const redisStore = require('koa-redis')
const debug = require('debug')
const { v1 } = require('uuid')

const routers = require('./routers')
const config = require('./config')
const pkg = require('./package')

const app = new Koa()
const log = debug(pkg.name)
const session = useSession({
  prefix: config.app.session.prefix,
  store: config.app.session.redis
    ? log('using redis store as session store') && redisStore(config.app.session.redis)
    : log('using internal memory store as session store because the redis config was not provided')
})

if (!config.app.key || !config.app.key.length) {
  log('the cookie keys will set as randomized value with uuid format because it was not provided in config')

  app.keys = [
    v1()
  ]
}

app.context.log = log

const initFn = async () => {
  app
    .use(useJSON({ pretty: false }))
    .use(routers.routes())
    .use(routers.allowedMethods())
    .listen(config.app.port, () => log('`yeonit` API server is starting'))
}

initFn()
