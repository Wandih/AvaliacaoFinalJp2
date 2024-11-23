const database = require('../config/database')
const filmes = require('./filmes')
const clientes = require('./clientes')

class ModelFilmesLoc{
    
    constructor(){
        this.model = database.db.define('filmesloc', {
            id: {

                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true

            },
            
            DataLoc: {

                type: database.db.Sequelize.DATE

            },
            DataDev: {

                type: database.db.Sequelize.DATE

            },
            
            idFilme: {

                type: database.db.Sequelize.INTEGER,
                references: {
                    model: filmes,
                    key: 'id'
                }

            },
            idCliente: {

                type: database.db.Sequelize.INTEGER,
                references: {
                    model: clientes,
                    key: 'id'
                }

            }

            
        })

        this.model.belongsTo(filmes, {
            foreignKey: 'idFilme'
        })

        this.model.belongsTo(clientes, {
            foreignKey: 'idCliente'
        })

    }

   

}

module.exports = new ModelFilmesLoc().model