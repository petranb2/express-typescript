import { repoMap } from './Repositories/repositories'
import RepositoryFactory from './Repositories/repositoryFactory'

const repositoryFactory = new RepositoryFactory(repoMap)

export {
  repositoryFactory
}
