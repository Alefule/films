const Film = require('../models/Film');
const films = require('../../data/json/films.json');

exports.showFilms = (req,res) => res.json(films);

exports.showOneFilm = (req,res) => {
    let id = req.params.id;
    let film = films.find(film => film.id == id);
    res.send(film);
}

exports.addFilm = (req, res) => {
    let film = {...req.body}
    let filmToAdd = new Film(film.id,film.name);
    films.push(filmToAdd);
    res.json(films);
}

exports.deleteFilm = (req, res) => {
    let idToDelete = req.params.id;
    for (let i = 0; i < films.length; i++) {
        if (films[i].id == idToDelete) {
            films.splice(i,1);
        }
    }
    res.json(films);
}

exports.updateFilm = (req, res) =>{
    let idToUpadte = req.params.id;
    let filmToUpdate = {...req.body};
    for (let i = 0; i < films.length; i++) {
        if(films[i].id == idToUpadte){
            films[i].id = films[i].id;
            films[i].name = filmToUpdate.name || films[i].name;
            films[i].likes = filmToUpdate.likes || films[i].likes;
        }
    }
}



