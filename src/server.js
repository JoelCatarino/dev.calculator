const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// EJS engine
server.set('view engine', 'ejs')

// Change location dir views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos statics
server.use(express.static("public"))

// funcionamento do req.body
server.use(express.urlencoded({ extended: true }))

server.use(routes)

// routes
server.listen(3000)