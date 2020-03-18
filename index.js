const Koa = require('koa')
const debug = require('debug')

const config = require('./config')
const pkg = require('./package')

const app = new Koa()
const log = debug(pkg.name)

app.context.log = log

const initFn = async () => {
  app
    .listen(config.app.port, () => log('`yeonit` API server is starting'))
}

initFn()
