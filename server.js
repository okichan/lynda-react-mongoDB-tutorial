// to run, go to bash and paste this => ./node_modules/.bin/babel-node server.js
import config from './config'
import apiRouter from './api'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')

server.get('/', function(req, res) {
   res.render('index', { text:  "object loaded" });
});


server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, () => {
    console.info('express listening on port', config.port)
})