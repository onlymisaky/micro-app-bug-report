const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  devServer: {
    port: 4322,
    historyApiFallback: true,
    headers() {
      return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      };
    },
  },
  chainWebpack(config) {
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [
        {
          name: 'app1',
          filename: 'app1_remote_entry.js',
          remotes: {
            'base': `base@${process.env.BASE_URL}base_remote_entry.js`
          },
        },
      ]);
  },
})
