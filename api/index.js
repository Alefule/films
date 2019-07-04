const express = require('express');
const app = express();
const morgan = require('morgan');

const routerFilms = require('./routes/films/films');

//Settings
app.set('port' , process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use(routerFilms);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

