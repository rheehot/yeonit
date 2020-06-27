const cluster = require('cluster')
const Koa = require('koa')
const os = require('os')
const { v1 } = require('uuid')

const routers = require('./routers')
const log = require('./log')

const app = new Koa()

app.key = v1()

const initFn = async () => {
  if (!process.env.pm_id) {
    // NOTE: Fork many as processor count if the app is not running on PM2 cluster mode.
    if (typeof process.env.pm_id === 'undefined' && cluster.isMaster) {
      const instanceSize = process.env.instances || os.cpus().length

      log('heuristic: forking instances manually because this process did not run in the cluster mode of PM2')

      for (let i = 0, l = instanceSize; i < l; i++) {
        log(`creating new worker (id: ${i})`)

        cluster.fork()
      }

      cluster.on('exit', (worker, code, signal) => {
        log(`worker (pid: ${worker.process.pid}) died, trying to start this worker in 1min`)

        setTimeout(() => cluster.fork(), 1000 * 60)
      })
    }

    // TODO: Master-only tasks.
  }
  if (process.env.pm_id || !cluster.isMaster) {
    // NOTE: Worker-only tasks.
    log(`new worker instance (pid: ${process.pid}) created`)

    app
      .use(routers.routes())
      .use(routers.allowedMethods())
      .listen(process.env.port || 3000, () => log('new `yeonit` API server instance started running'))
  }
}

initFn()
