const ServiceFilmes = require('../services/filmes')

class ControlerFilmes{
    
    
    async GetFilmes(req, res) {
        try {
            const filmes = await ServiceFilmes.GetFilmes()
            res.send({ msg: filmes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async CreateFilme(req,res){
        try {
            const { titulo, faixaeta, diretor } = req.body

            const filmes = await ServiceFilmes.CreateFilme(titulo, faixaeta, diretor)

            res.send({ msg: filmes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async UpdateFilme(req,res){
        try {
            const {id} = req.params
            const { titulo, faixaeta, diretor  } = req.body

            const filmes = await ServiceFilmes
                .UpdateFilme(id, titulo, faixaeta, diretor )

            res.send({ msg: filmes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async DeleteFilme(req,res){
        try {
            const {id} = req.params
            await ServiceFilmes.DeleteFilme(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ControlerFilmes()