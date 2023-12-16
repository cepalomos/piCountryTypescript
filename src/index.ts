import app from './app'
// import AppDataSource from './data-source'

app.listen(app.get('port'), () => {
  console.log('Server is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
  console.log('Press CTRL-C to stop\n')
  // AppDataSource
  //   .initialize()
  //   .then(() => {
  //     console.log('Data Source has been initialized!')
  //   })
  //   .catch((err) => {
  //     console.error('Error during Data Source initialization:', err)
  //   })
})
