import UserViewModel from '../models/view/user.ViewModel'
import { User } from '../models/persist/user.PersistModel'
import { getManager } from 'typeorm'

function getUserInfo () {
  const userView = new UserViewModel('petran', 'petranb2@gmail.com')
  return userView
}

async function createNewUser () {
  const entityManager = getManager()
  const user = new User()
  user.firstName = 'petros'
  user.isActive = true
  user.lastName = 'koulianos'

  try {
    await entityManager.save(user)
  } catch (err: any) {
    console.log(err.message)
  }
}

export default { getUserInfo, createNewUser }
