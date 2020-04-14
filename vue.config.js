

module.exports = {
    chainWebpack: config => {
       config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Flag Defense'
          return args
        })

      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
            options.hotReload = true
            return options
          })
      
        },
    devServer: {
      hot: false,
      https: true,
      liveReload: true,
      watchContentBase: true
  //devServer.hot option must be disabled or devServer.watchContentBase option must be enabled in order for liveReload to take effect
      // https: true,
    },

}