const express = require('express')
const ControlerClientes = require('../controllers/clientes')
const auth = require('../middleware/auth')

const routerClientes = express.Router();

routerClientes.post('/', auth, ControlerClientes.CreateCliente)
routerClientes.post('/login', ControlerClientes.Login)

routerClientes.get('/', auth, ControlerClientes.GetClientes)
routerClientes.put('/:id', auth, ControlerClientes.UpdateCliente)
routerClientes.delete('/:id', auth, ControlerClientes.DeleteCliente)


module.exports = routerClientes