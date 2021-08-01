import 'module-alias/register';
import 'source-map-support/register';
import express from 'express';
import path from 'path';
import setupMiddlewares from './setupMiddlewares';
import setupRouting from './setupRouting';
const port = 3000
// define a global variable to have the project base dir
// global.__basedir = path.join(__dirname, "../");

const app = express();

// setup middlewares
setupMiddlewares(express, app);

// setup routing
setupRouting(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})