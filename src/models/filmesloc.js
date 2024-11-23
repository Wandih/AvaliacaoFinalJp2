const database = require('../config/database')

class ModelFilmesLoc{
    
    constructor(){
        this.model = database.db.define('filmesloc', {
            id: {

                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true

            },
            idFilme: {

                type: database.db.Sequelize.INTEGER,
                unique: true

            },
            idCliente: {

                type: database.db.Sequelize.INTEGER,
                unique: true

            }, 
            DataLoc: {

                type: database.db.Sequelize.STRING

            },
            DataDev: {

                type: database.db.Sequelize.STRING

            }


            
        })
    }

   

}

module.exports = new ModelFilmesLoc().model