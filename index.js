const express = require('express')
const routeClientes = require('./src/routes/clientes')
const routeFilmes = require('./src/routes/filmes')
const routeFilmesLoc = require('./src/routes/filmesloc')
const database = require('./src/config/database')

const app = express()

app.use(express.json())

app.use("/cliente", routeClientes)
app.use("/filmes", routeFilmes)
app.use("/filmesloc", routeFilmesLoc)

const PORT = 3000

database.db
    .sync({ force: false})
    .then(() => {
        console.info(`Banco conectado com sucesso`)
        app.listen(PORT, () => {
            console.info(`Servidor aberto na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })