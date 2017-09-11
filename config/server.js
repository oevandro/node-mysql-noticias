//Arquivo de Configurção do Servidor

//Adiciona o Express ao Projeto
var express = require('express');

//Importando o Consign
var consign = require('consign');

//Importando o BodyParser
var bodyParser = require('body-parser');

//Atribui o Express a Variavel APP
var app = express();

//Define a View Engine como EJS
app.set('view engine', 'ejs');

//Configura a Pasta das Views
app.set('views', './app/views/');

//Deifindo as Configurações do BodyParse
app.use(bodyParser.urlencoded({extended: true}));

//Deifindo as Configurações do Consign
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

//Esporta o Express via Variavel APP
module.exports = app;