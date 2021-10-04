import usersController from '../HTTPControllers/users'
import joinWaitingUserController from '../HTTPControllers/joinWaitingUsers';

function setupRouting(app: any) {
  console.log('setup routing start')

  app.use('/users', usersController)
  app.use('/join-waiting-users', joinWaitingUserController)

  console.log('setup routing end')
}

export default setupRouting
