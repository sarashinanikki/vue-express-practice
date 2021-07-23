module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://back:3000',
        changeOrigin: true,
        logLevel: 'debug',
        ws: true,
        secure: false,
        pathRewrite: { "^/api/": "/api/" },
      }
    }
  },
}
