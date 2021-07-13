const express = require('express');
const server = express();
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended : false }));
server.use(express.json());
const routes = require('./config/routes');
server.use(routes);

server.listen(3000, () =>{
    console.log('Servidor de pé');
});
