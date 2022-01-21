const morgan = require('morgan')
const express = require('express')
const { addPage, editPage, main, userList, userPages, wikiPage } = require("./views")
const layout = require('./views/layout')
const { db, Page, User } = require('./models')

db.authenticate()
    .then(() => {
        console.log('connected to the database')
    })//.catch()

const app = express()
app.use(morgan('dev'))

app.use(express.static("/public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => res.send(layout('<h1>Hello World</h1>')))

const PORT = 1337;
const init = async () => {
    await db.sync({force: true})
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
      });
}

init();