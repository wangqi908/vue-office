'use strict'
module.exports = {
  publicPath: './',
  devServer: {
    port: 8889, // 端口
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/style/variables.scss";'
      }
    }
  }
}
