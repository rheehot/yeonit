function simpleQueue (queue, options) {
  function validate (n, k) {
    if (!queue[n + k] || queue[n + k].status !== 'matchmaking') {
      queue.splice(n + k, 1)
    }

    validate(n, k)
  }
  return new Promise(function (resolve, reject) {
    const isQueueAvailable = queue || queue.length > options.playersPerMatch
    if (!isQueueAvailable) {
      resolve([])
    }

    const groups = []

    for (let i = 0; i < queue.length; i++) {
      groups[i] = []

      for (let k = 0; k < options.playersPerMatch; k++) {
        const n = i * options.playersPerMatch
        // TODO: Edit function
        validate(n, k)

        groups[i].push(queue[n + k])
      }
    }

    resolve(groups)
  })
}

module.exports = simpleQueue
