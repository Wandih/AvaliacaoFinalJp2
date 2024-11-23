const ModelFilmesLoc = require ('../models/filmesloc')
const bcrypt = require('bcrypt')
const SALT = 12
const jwt = require('jsonwebtoken')

class ServiceFilmesLoc{

    async GetFilmesLoc(){

        return ModelFilmesLoc.findAll()
    }

    async LocarFilme(idFilme, idCliente, DataLoc, DataDev){
        
        if(!idFilme || !idCliente || !DataLoc || !DataDev){

            throw new Error("Favor preencher todos os parametros")

        }

        
        return ModelFilmesLoc.create(
            {
             idFilme: idFilme, 
             idCliente: idCliente,
             DataLoc: DataLoc,
             DataDev: DataDev

            })

    }

    async DevolverFilme(id){

        if(!id){
            throw new Error("Favor informar o ID")
        }

        const filmesloc = await ModelFilmesLoc.findByPk(id)
        if(!filmesloc){
            throw new Error ("Filme não encontrado")
        }
        filmesloc.destroy()

        return "Filme devolvido com sucesso"

    }


}

module.exports = new ServiceFilmesLoc()

