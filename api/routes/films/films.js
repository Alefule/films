const express = require('express');
const router = express.Router();
const filmController = require('../../controllers/filmsController')

router.get('/films' , filmController.showFilms);
router.get('/films/:id', filmController.showOneFilm);
router.post('/films/add' , filmController.addFilm);
router.delete('/films/delete/:id' , filmController.deleteFilm);
router.put('/films/update/:id' , filmController.updateFilm);

module.exports = router;

