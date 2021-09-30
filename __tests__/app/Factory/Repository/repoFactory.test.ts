import { repositoryFactory } from 'src/app/Factory'
import UserRepository from 'src/core/repositories/user.repo'

test('test get repo with valid alias', () => {
  const userRepository = repositoryFactory.get('UserRepository')
  expect(userRepository).toBeInstanceOf(UserRepository)
})

test('test get repo with wrong alias', () => {
  expect(() => repositoryFactory.get('test')).toThrow(Error)
})