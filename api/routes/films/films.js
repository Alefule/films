const express = require('express');
const router = express.Router();
const films = require('../../../database/films.json');

router.get('/films' , (req, res) => {
    res.json(films)
});

router.get('/films/:id', (req,res) => {
    let id = req.params.id;
    let film = films.find(film => film.id == id);
    return res.send(film);
});

router.post('/films/add' , (req, res) => {
    let film = {...req.body};
    films.push(film);
    res.json(films)
});

router.put('/films/update/:id' , (req, res) => {
    let idToUpdate = req.params.id;
    let filmToUpdate = {...req.body};
    for (let i = 0; i < films.length; i++) {
        if (films[i].id == idToUpdate) {
            films[i].id = films[i].id
            films[i].name = filmToUpdate.name || films[i].name;
            films[i].likes = filmToUpdate.likes || films[i].likes;   
        }
    }
    res.json(films);

});

router.delete('/films/delete/:id' , (req, res) => {
    let idToDelete = req.params.id;
    for (let i = 0; i < films.length; i++) {
        if (films[i].id == idToDelete) {
            films.splice(i,1);
        }
    }
    res.json(films);

});

module.exports = router;

