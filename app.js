const express = require('express');
const models = require('./models');

const indexRouter = require('./routes/index');

const app = express();
app.use('/', indexRouter);
let port = 8000;
models.sequelize.sync()
    .then(() => {
        app.listen(port);
        console.log('Server running at port ', port)

    })
    .catch(e => console.log(e));
