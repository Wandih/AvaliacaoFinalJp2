const ModelFilmesLoc = require ('../models/filmesloc')
const ModelFilmes = require('./../models/filmes')
const ModelClientes = require('./../models/clientes')

class ServiceFilmesLoc{

    async GetFilmesLoc(){

        return ModelFilmesLoc.findAll()
    }

    async LocarFilme(idFilme, idCliente, DataLoc, DataDev){
        
        if(!idFilme || !idCliente || !DataLoc || !DataDev){

            throw new Error("Favor preencher todos os parametros")

        }

        const filme = await ModelFilmes.findByPk(idFilme)
        if(!filme){
            throw new Error('Filme não encontrado')
        }

        const cliente = await ModelClientes.findByPk(idCliente)
        if(!cliente){
            throw new Error('Cliente não encontrado')
        }
        

        
        return ModelFilmesLoc.create(
            {
             idFilme: idFilme, 
             idCliente: idCliente,
             DataLoc: DataLoc,
             DataDev: null
            })

    }

    async DevolverFilme(id, DataDev){

        if(!id){
            throw new Error("Favor informar o ID")
        }

        const filmesloc = await ModelFilmesLoc.findByPk(id)
        if(!filmesloc){
            throw new Error ("Filme não encontrado")
        }

        filmesloc.DataDev = DataDev
        filmesloc.save()

        return filmesloc

    }


}

module.exports = new ServiceFilmesLoc()

