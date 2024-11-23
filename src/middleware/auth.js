const jwt = require('jsonwebtoken')

function auth(req, res, next){
    console.log('estou no middleware');
    const token = req.headers['authorization']
    console.log(token)

    if(!token){
        
        res.status(400).send({msg:'Token não informado ou sem permissão'})

    }

    jwt.verify(token, "segredo", (error, decoded) => {

        if(error){

            console.error('Erro ao decodificar', error)
            res.status(400).send({msg:'Token não informado ou sem permissão'})

        }

        console.log(decoded)

        next()

    })
}

module.exports = auth;