const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/dist/webpack.js');
const Components = require('unplugin-vue-components/dist/webpack.js');
const { ElementPlusResolver } = require('unplugin-vue-components/dist/resolvers.js');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
