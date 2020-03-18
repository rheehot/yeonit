module.exports = {
  apps: [
    {
      name: 'yeonit',
      script: './index.js',
      instances: 4,
      env: {
        ENV: 'DEVELOPMENT',
        DEBUG: '*'
      },
      env_production: {
        ENV: 'PRODUCTION',
        DEBUG: 'yeonit*'
      }
    }
  ]
}
