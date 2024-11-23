const ServiceClientes = require('../services/clientes')

class ControlerClientes{
    
    
    async GetClientes(req, res) {
        try {
            const clientes = await ServiceClientes.GetClientes()
            res.send({ msg: clientes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async CreateCliente(req,res){
        try {
            const { nome, email, senha } = req.body

            const clientes = await ServiceClientes.CreateCliente(nome, email, senha)

            res.send({ msg: clientes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async UpdateCliente(req,res){
        try {
            const {id} = req.params
            const { nome, email, senha } = req.body

            const clientes = await ServiceClientes
                .UpdateCliente(id, nome, email, senha)

            res.send({ msg: clientes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async DeleteCliente(req,res){
        try {
            const {id} = req.params
            await ServiceClientes.DeleteCliente(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceClientes.Login(email, senha)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ControlerClientes()