import 'module-alias/register'
import 'source-map-support/register'
import 'reflect-metadata'
import express, { Express } from 'express'
let app: Express;


// define a global variable to have the project base dir
// global.__basedir = path.join(__dirname, "../");

const port = 5000;

app = express()

const server = app.listen(port, () => {
  console.log(`Express-Typescript app listening at http://localhost:${port}`)
})

export default { app };