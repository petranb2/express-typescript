import { Connection, createConnection } from 'typeorm'
import userService from '@services/user.service'
import { User } from '@core/models/persist/user.PersistModel'
import { WaitingUser } from '@core/models/persist/waitingUser.persist.model';

const setupDB = async (): Promise<any> => {
  let connection: Connection;
  try {
    connection = await createConnection({
      type: 'postgres',
      url: 'postgresql://postgres:123456789@localhost:5432/waitingUsers-TBC',
      entities: [WaitingUser, User],
      synchronize: true
    })
    console.log('Succefull connection with DB')
    await userService.createNewUser()
    return connection;
  } catch (error: any) {
    const err = error as Error
    console.log('Cant connect with DB ::' + err.message)
  }

}

export default setupDB
