const Koa = require('koa')
const useJSON = require('koa-json')
const debug = require('debug')

const routers = require('./routers')
const config = require('./config')
const pkg = require('./package')

const app = new Koa()
const log = debug(pkg.name)

app.context.log = log

const initFn = async () => {
  app
    .use(useJSON({ pretty: false }))
    .use(routers.routes())
    .use(routers.allowedMethods())
    .listen(config.app.port, () => log('`yeonit` API server is starting'))
}

initFn()
