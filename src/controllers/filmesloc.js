const ServiceFilmesLoc = require('../services/filmesloc')

class ControlerFilmesLoc{
    
    
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
            const { idFilme, idCliente} = req.params

            const { DataLoc, DataDev } = req.body

            const filmesloc = await ServiceFilmesLoc.LocarFilme(idFilme, idCliente, DataLoc, DataDev)

            res.send({ msg: filmesloc })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async DevolverFilme(req,res){
        try {
            const {id} = req.params

            const {DataDev} = req.body

            const filmesLoc = await ServiceFilmesLoc.DevolverFilme(id, DataDev)

            return res.status(201).send({filmesLocados: filmesLoc})
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    


}

module.exports = new ControlerFilmesLoc()