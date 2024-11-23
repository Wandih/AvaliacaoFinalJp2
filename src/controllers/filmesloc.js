const ServiceFilmesLoc = require('../services/filmesloc')

class ControlerFilmes{
    
    
    async GetFilmesLoc(req, res) {
        try {
            const filmesloc = await ServiceFilmesLoc.GetFilmesLoc()
            res.send({ msg: filmesloc })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async LocarFilme(req,res){
        try {
            const { idFilme, idCliente, DataLoc, DataDev } = req.body

            const filmes = await ServiceFilmesLoc.LocarFilme(idFilme, idCliente, DataLoc, DataDev)

            res.send({ msg: filmes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async DevolverFilme(req,res){
        try {
            const {id} = req.params
            await ServiceFilmesLoc.DevolverFilme(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    


}

module.exports = new ControlerFilmes()