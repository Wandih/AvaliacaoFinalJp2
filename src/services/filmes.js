const ModelFilmes = require ('../models/filmes')
const bcrypt = require('bcrypt')
const SALT = 12
const jwt = require('jsonwebtoken')

class ServiceFilmes{

    async GetFilmes(){

        return ModelFilmes.findAll()
    }

    async CreateFilme(titulo, faixaeta, diretor){
        
        if(!titulo || !faixaeta || !diretor){

            throw new Error("Favor preencher todos os parametros")

        }

        
        return ModelFilmes.create(
            {
             titulo: titulo,
             faixaeta: faixaeta,
             diretor: diretor
            })

    }

    async UpdateFilme(id, titulo, faixaeta, diretor){
        if(!id){
            throw new Error('Favor informar um ID')
        }

        const filmes = await ModelFilmes.findByPk(id)

        if(!filmes){
            throw new Error('Pessoa não encontrada')
        }
        

        filmes.titulo = titulo || filmes.titulo
        filmes.faixaeta = faixaeta || filmes.faixaeta
        filmes.diretor = diretor || filmes.diretor

        filmes.save()

        return filmes

    }

    async DeleteFilme(id){

        if(!id){
            throw new Error("Favor informar o ID")
        }

        const filmes = await ModelFilmes.findByPk(id)
        if(!filmes){
            throw new Error ("Pet não encontrado")
        }
        filmes.destroy()

        return filmes.destroy()

    }

}

module.exports = new ServiceFilmes()