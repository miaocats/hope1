module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/mock',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
