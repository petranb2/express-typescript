import indexRouter from '@routes/index'
import usersRouter from '@routes/users'

function setupRouting(app: any) {

    console.log('setup routing start')

    app.use('/', indexRouter);
    app.use('/users', usersRouter);


    console.log('setup routing end')
}

export default setupRouting;