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
  configureWebpack: {
    /*
      xlsx-style报错./cptable in ./node_modules/_xlsx-style@0.8.13@xlsx-style/dist/cpexcel.js
      解决方案
    */
    externals: {
      './cptable': 'var cptable'
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
