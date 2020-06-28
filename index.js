const cluster = require('cluster')
const Koa = require('koa')
const os = require('os')
const { v1 } = require('uuid')

const routers = require('./routers')
const log = require('./log')

const app = new Koa()

app.key = v1()

const initFn = async () => {
  const isMaster =
    (cluster.isMaster) ||
    (Number(process.env.pm_id) === 0)
  const isPM2Instance = !isNaN(Number(process.env.pm_id))

  if (isMaster) {
    if (cluster.isMaster) {
      // NOTE: Master-only tasks. (cluster)
      let instanceSize = process.env.instances || os.cpus().length

      if (instanceSize < 0) {
        instanceSize = 1
      }

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

    // NOTE: Master-only tasks. (all)
  } else if (isPM2Instance || !isMaster) {
    log(`new worker instance (pid: ${process.pid}) created`)

    app
      .use(routers.routes())
      .use(routers.allowedMethods())
      .listen(process.env.port || 4000, () => log('new `yeonit` API server instance started running'))
  }
}

initFn()
