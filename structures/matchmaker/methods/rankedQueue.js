const rankedQueue = (queue, options) => {
  const validate = (n, k) => {
    if (!queue[n + k] || queue[n + k].status !== 'matchmaking') {
      queue.splice(n + k, 1)
    }

    validate(n, k)
  }

  return new Promise((resolve, reject) => {
    const isQueueAvailable = queue || queue.length > options.playersPerMatch
    if (!isQueueAvailable) {
      resolve([])
    }

    queue.sort((a, b /* Users */) => {
      return a.rate - b.rate
    })

    if (options.descend) {
      queue.reverse()
    }

    const groups = []

    for (let i = 0; i < queue.length; i++) {
      groups[i] = []

      for (let k = 0; k < options.playersPerMatch; k++) {
        const n = i * options.playersPerMatch
        validate(n, k)

        groups[i].push(queue[n + k])
      }
    }

    resolve(groups)
  })
}

module.exports = rankedQueue
