

module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
            options.hotReload = true
            return options
          }
        )},
    devServer: {
      hot: false,
      https: true,
      liveReload: true,
      watchContentBase: true
  //devServer.hot option must be disabled or devServer.watchContentBase option must be enabled in order for liveReload to take effect
      // https: true,
    }
    // resolve: {
    //   alias: {
    //     // If using the runtime only build
    //     vue$: 'vue/dist/vue.runtime.esm.js' // 'vue/dist/vue.runtime.common.js' for webpack 1
    //     // Or if using full build of Vue (runtime + compiler)
    //     // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
    //   }
    // }
}