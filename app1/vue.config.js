const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4322,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
