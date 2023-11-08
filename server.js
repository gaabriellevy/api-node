const port = 3335

const express = require("express") // importa o framework express
const bd = require("./bancoDeDados") // importa o banco de dados

const app = express()

app.use(express.json()) // transforma a requisição em formato json para objeto javascript

app.listen(port, () => { // escuta as requisições na porta declarada
    console.log(`Servidor iniciado na porta ${port}`)
})

app.get('/items', (request, response, next)=> {
    response.send(bd.listitems())
})

app.get('/items/:id', (request, response, next) => {
    response.send(bd.getItem(request.params.id))
})

app.post('/items', (request, response, next)=> {
    const item = bd.createItem({
        nome: request.body.nome,
        valor: request.body.valor
    })
    response.send(item)
})