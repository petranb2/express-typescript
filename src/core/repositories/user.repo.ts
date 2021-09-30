import UserViewModel from '../models/view/user.ViewModel'
import TestRepository from './test.repo'

class UserRepository {
    private testRepo: TestRepository;

    constructor (testRepo: TestRepository) {
      this.testRepo = testRepo
      this.testRepo.getSomething()
    }

    getUserList (): UserViewModel[] {
      return [new UserViewModel('petran', 'petranb2@gmail.com'), new UserViewModel('petranb4', 'petranb4@gmail.com'), new UserViewModel('petranb3', 'petranb3@gmail.com')]
    }
}

export default UserRepository
