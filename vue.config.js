module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '317 林邊故事鄉'
        return args
      })
  }
}
