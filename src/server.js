const express = require("express")
const server = express()
const routes = require("./routes")

// EJS engine
server.set('view engine', 'ejs')

// habilitar arquivos statics
server.use(express.static("public"))

server.use(routes)

// routes
server.listen(3000, () => console.log('running'))