const port = 3335

const express = require("express") // importa o framework express
const db = require("./database/db") // importa o banco de dados

const app = express()

const ItemController = require('./controllers/item') // tudo relacionado ao item é controlado por essa classe para fim de abstração

app.use(express.json()) // transforma a requisição em formato json para objeto javascript

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`))

app.listen(port, () => { // escuta as requisições na porta declarada
    console.log(`Servidor iniciado na porta ${port}`)
})

app.get('/items', (request, response, next)=> {
    itemController.listItems().then((items) => res.send())
    .catch((err) => {
        console.log('Erro na consulta', JSON.stringify(err))
        return res.send(err)
    })
    response.send(db.listitems())
})

app.get('/items/:id', (request, response, next) => {
    response.send(db.getItem(request.params.id))
})

app.post('/items', (request, response, next)=> {
    const item = db.createItem({
        nome: request.body.nome,
        valor: request.body.valor
    })
    .then((item) => res.send(item))
    .catch((err) => {
        console.log('Erro no cadastro do item', JSON.stringify(err))
        return res.status(400).send(err)
    })
    response.send(item)
})

app.delete('/items/:id', (request, response, next)=> {
    try {
        response.send(db.deleteItem(request.params.id))
    } catch (err) {
        next(err)
    }
})