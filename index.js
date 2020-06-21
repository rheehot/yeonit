const Koa = require('koa')
const debug = require('debug')
const { v1 } = require('uuid')

const routers = require('./routers')
const config = require('./config')
const pkg = require('./package')

const app = new Koa()
const log = debug(pkg.name)

if (!config.app.key || !config.app.key.length) {
  log('the token keys will set as randomized value with uuid format because it was not provided in config')

  app.key = v1()
}

app.context.log = log

const initFn = async () => {
  app
    .use(routers.routes())
    .use(routers.allowedMethods())
    .listen(config.app.port, () => log('`yeonit` API server is starting'))
}

initFn()
