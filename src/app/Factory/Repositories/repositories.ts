import UserRepository from '@repositories/user.repo'
import TestRepository from '@repositories/test.repo'
import { repositoryFactory } from '../index'

const repoMap = new Map<String, { getInstance: () => Object }>()

repoMap.set('UserRepository',
    {
        getInstance: () => { return new UserRepository(repositoryFactory.get('TestRepository') as TestRepository) }
    })

repoMap.set('TestRepository',
    {
        getInstance: () => { return new TestRepository() }
    })

export { repoMap }
