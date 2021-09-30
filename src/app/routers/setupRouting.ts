import usersController from '../HTTPControllers/users'

function setupRouting (app: any) {
  console.log('setup routing start')

  app.use('/users', usersController)

  console.log('setup routing end')
}

export default setupRouting
