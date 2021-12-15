const express = require('express'); // CHAMAR O EXPRESS PRA CA
const routes = express.Router(); // CHAMAR O ROUTER COM A AJUDA DO EXPRESS

// criar o diretorio views para o ejs entender
const views = __dirname + '/views/'

// add perfil configurado
const profile = {
    name: 'Joel',
    avatar: "https://avatars.githubusercontent.com/u/62433408?v=4",
    "monthly-budget": 4000,
    "days-per-week": 6,
    "hour-per-day": 6,
    "vacation-per-year": 2
}

// request, response
routes.get('/', (req, res) => res.render(views + '/index'))
routes.get('/job', (req, res) => res.render(views + '/job'))
routes.get('/job-edit', (req, res) => res.render(views + '/job-edit'))
routes.get('/profile', (req, res) => res.render(views + '/profile', { profile }))

module.exports = routes;