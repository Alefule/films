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

//Conexion con mongo utilizando mongoose

const mongoose = require('mongoose');
const URL = 'mongodb://localhost/films';

//connecting to db
mongoose.connect('mongodb://localhost/tareas', { useNewUrlParser: true })
    .then(db => console.log('Conected to mongodb'))
    .catch(err => console.log(err));

