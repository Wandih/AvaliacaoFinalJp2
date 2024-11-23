const ModelClientes = require ('../models/clientes')
const bcrypt = require('bcrypt')
const SALT = 12
const jwt = require('jsonwebtoken')

class ServiceClientes{

    async GetClientes(){

        return ModelClientes.findAll()
    }

    async CreateCliente(nome, email, senha){
        
        if(!nome || !email || !senha){

            throw new Error("Favor preencher todos os parametros")

        }

        const hashSenha = await bcrypt.hash(senha, SALT)

        
        return ModelClientes.create(
            {
             nome: nome,
             email: email,
             senha: hashSenha
            })

    }

    async UpdateCliente(id, nome, email, senha){
        if(!id){
            throw new Error('Favor informar um ID')
        }

        const clientes = await ModelClientes.findByPk(id)

        if(!clientes){
            throw new Error('Pessoa não encontrada')
        }
        

        clientes.nome = nome || clientes.nome
        clientes.email = email || clientes.email
        clientes.senha = senha
            ? await bcrypt.hash(senha, SALT)
            : clientes.senha

        clientes.save()

        return clientes

    }

    async DeleteCliente(id){

        if(!id){
            throw new Error("Favor informar o ID")
        }

        const clientes = await ModelClientes.findByPk(id)
        if(!clientes){
            throw new Error ("Cliente não encontrado")
        }
        
        return clientes.destroy()

        

    }

    async Login(email, senha){

        if(!email || !senha){

            throw new Error('Nome ou idade inválidos! 1')
        }

        const clientes = await ModelClientes.findOne({where: {email}})

        if(!clientes) {

            throw new Error('Nome ou idade inválidos! 2')
        }

        const senhaValida = bcrypt.compare(senha, clientes.senha)

        if(!senhaValida){
            throw new Error('Nome ou idade inválidos! 3')
        }

        return jwt.sign({id: clientes.id}, 'segredo', {expiresIn: 60 * 60})

    }
}

module.exports = new ServiceClientes()