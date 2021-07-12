const express = require('express');
const server = express();

const mysql = require('mysql');

server.get('/', (req, res) =>{
    res.sendFile(__dirname +'/src/home.html');
});
server.get('/cadastro', (req, res) =>{
    res.sendFile(__dirname +'/src/formulario.html');
});

server.listen(3001, () =>{
    console.log('Servidor de pé');
});