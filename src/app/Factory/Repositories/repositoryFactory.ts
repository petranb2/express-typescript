import FactoryInterface from '../Interfaces/FactoryInterface';


class RepositoryFactory implements FactoryInterface {

    readonly map: Map<String, { getInstance: () => Object }>;

    constructor(repositories: Map<String, { getInstance: () => Object }>) {
        this.map = repositories
    }

    /**
     * Fetch new repository instances from the factory
     * @param alias the alias of the repository
     */
    get = (alias: String): Object => {
        const repo = this.map.get(alias)
        if (!repo) {
            throw new Error(`Repo with alias::${alias} not found`)
        }
        return repo.getInstance()
    }
}

export default RepositoryFactory
