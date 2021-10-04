import express, { Express } from 'express'
import setupMiddlewares from './middlewares/setupMiddlewares'
import setupRouting from './routers/setupRouting'
import setupDB from './databases/setupDB';

const setupApp = async (app: Express): Promise<Express> => {
    // setup middlewares
    setupMiddlewares(express, app)

    // setup routing
    setupRouting(app)

    // setup DB
    await setupDB()

    return app;
}

export default setupApp;