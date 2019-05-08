module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Pics',
      externals: {
        react: 'React'
      }
    }
  }
}
