import cookieParser from 'cookie-parser'
const logger = require('morgan')

function setupMiddlewares(express: any, app: any): void {
  console.log('setup middlewares start')
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(function (req: any, res: { setHeader: (arg0: string, arg1: string | boolean | undefined) => void }, next: () => void) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://trainingbeast.co');
    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'POST'
    )

    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,Content-Type'
    )
        // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
  })
  app.use(cookieParser())
  // app.use(express.static(path.join(__basedir, 'public')));
  console.log('setup middlewares end')
}

export default setupMiddlewares
