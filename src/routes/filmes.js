const express = require('express')
const ControlerFilmes = require('../controllers/filmes')
const auth = require('../middleware/auth')

const routerFilmes = express.Router();

routerFilmes.post('/', ControlerFilmes.CreateFilme)
routerFilmes.get('/', ControlerFilmes.GetFilmes)
routerFilmes.put('/:id', ControlerFilmes.UpdateFilme)
routerFilmes.delete('/:id', ControlerFilmes.DeleteFilme)


module.exports = routerFilmes