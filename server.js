const port = 3335

const express = require("express")

const app = express()

app.use(express.json()) // transforma a requisição em formato json para objeto javascript

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})