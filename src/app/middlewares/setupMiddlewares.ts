import cookieParser from 'cookie-parser'
const logger = require('morgan')

function setupMiddlewares (express: any, app: any): void {
  console.log('setup middlewares start')
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  // app.use(express.static(path.join(__basedir, 'public')));
  console.log('setup middlewares end')
}

export default setupMiddlewares
