const express = require('express')
const ControlerFilmesLoc = require('../controllers/filmesloc')
const auth = require('../middleware/auth');

const routerFilmesLoc = express.Router();

routerFilmesLoc.get('/', ControlerFilmesLoc.GetFilmesLoc)
routerFilmesLoc.post('/locar', ControlerFilmesLoc.LocarFilme)
routerFilmesLoc.delete('/devolver/:id', ControlerFilmesLoc.DevolverFilme)


module.exports = routerFilmesLoc