import { showFilms, showOneFilm, addFilm, deleteFilm, updateFilm } from "../../controllers/filmsController";
import express from "express";

const router = express.Router();

router.get('/films', showFilms);
router.get('/films/:id', showOneFilm);
router.post('/films/add', addFilm);
router.delete('/films/delete/:id', deleteFilm);
router.put('/films/update/:id', updateFilm);

module.exports = router;

