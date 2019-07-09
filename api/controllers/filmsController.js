const Film = require('../models/Film');
//const films = require('../../data/json/films.json');

exports.showFilms = async (req,res) => {
    const films = await Film.find();
    res.json(films);
};

exports.showOneFilm = async (req,res) => {
    let idToFind = req.params.id;
    let film = await Film.findOne({_id: idToFind});
    res.json(film);
}

exports.addFilm = async (req, res) => {
    let newFilm = new Film(req.body);
    await newFilm.save();
    let films = await Film.find();
    console.log('Pelicula Guardada');
    res.json(films);
}

exports.deleteFilm = async(req, res) => {
    let idToDelete = req.params.id;
    await Film.findOneAndDelete({_id: idToDelete});
    let films = await Film.find();
    console.log('Pelicula Borrada ');
    res.json(films);
}

exports.updateFilm = async (req, res) =>{
    let idToUpadte = req.params.id;
    let infoToUpdate = {...req.body};
    await Film.findOneAndUpdate({_id: idToUpadte}, infoToUpdate)
    let films = await Film.find();
    console.log('Pelicula Modificada ');
    res.json(films);
}



