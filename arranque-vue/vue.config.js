/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: process.env.CODESPACE_NAME + '-8080.githubpreview.dev',
        port: 443,
        pathname: '/ws',
      }
    }
  }
})
