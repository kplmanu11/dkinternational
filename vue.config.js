module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dkinternational/'
    : '/',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
}
