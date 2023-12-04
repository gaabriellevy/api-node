const port = 3335

const express = require("express") // importa o framework express
const db = require("./database/db") // importa o banco de dados

const app = express() // instancia o express

const itemController = require('./controllers/item') // tudo relacionado ao item é controlado por essa classe para fim de abstração

app.use(express.json()) // transforma a requisição em formato json para objeto javascript

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)) // sincroniza com o banco de dados

app.listen(port, () => { // escuta as requisições na porta declarada
    console.log(`Servidor iniciado na porta ${port}`)
})

app.get('/items', (req, res, next)=> {
    itemController.listItems().then((items) => res.send(items))
    .catch((err) => {
        console.log('Erro na consulta', JSON.stringify(err))
        return res.send(err)
    })
})

app.get('/items/:id', (req, res, next) => {
    itemController.getItem(req.params.id).then((item) => res.send(item))
    .catch((err) => {
        console.log('Erro na consulta', JSON.stringify(err))
        return res.send(err)
    })
})

app.post('/items', (req, res, next)=> {
    itemController.createItem({
        nome: req.body.nome,
        valor: req.body.valor
    })
    .then((item) => res.send(item))
    .catch((err) => {
        console.log('Erro no cadastro do item', JSON.stringify(err))
        return res.status(400).send(err)
    })
})

app.delete('/items/:id', (req, res, next)=> {
    itemController.deleteItem(req.params.id).then((msg) => res.send(msg))
    .catch((err) => {
        console.log("Erro na consulta", JSON.stringify(err))
        return res.send(err)
    })
})

app.patch('/items/:id', (req, res, next) => {
    itemController.updateItem(req.params.id, {
        nome: req.body.nome,
        valor: req.body.valor
    })
    .then((item) => res.send(item))
    .catch((err) => {
        console.log('Erro na atualização do item', JSON.stringify(err))
        return res.status(400).send(err)
    })
})