interface FactoryInterface {
    readonly map: Map<String, { getInstance: () => Object }>;
    get: (alias: String) => Object
}

export default FactoryInterface;