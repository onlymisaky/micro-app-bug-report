const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  devServer: {
    port: 4321,
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
          name: 'base',
          filename: 'base_remote_entry.js',
          library: { type: 'window', name: 'base' },
          exposes: {
            './NavMenu': './src/components/NavMenu.vue',
          },
        }
      ]);

    if (process.env.NODE_ENV === 'development') {
      config.optimization.delete('splitChunks');
    }
  },
});
