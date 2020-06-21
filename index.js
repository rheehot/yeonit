const Koa = require('koa')
const { v1 } = require('uuid')

const routers = require('./routers')
const config = require('./config')
const log = require('./log')

const app = new Koa()

if (!config.app.key || !config.app.key.length) {
  log('the token keys will set as randomized value with uuid format because it was not provided in config')

  app.key = v1()
}

const initFn = async () => {
  app
    .use(routers.routes())
    .use(routers.allowedMethods())
    .listen(config.app.port, () => log('`yeonit` API server is starting'))
}

initFn()
