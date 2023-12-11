const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require("cors");

const users = require(__dirname + '/routes/users');
const personajes = require(__dirname + '/routes/personajes');
const partidas = require(__dirname + '/routes/partidas');
const facciones = require(__dirname + '/routes/facciones');

mongoose.connect('mongodb://mymongodb/wikiRol', 
    {useNewUrlParser: true});

let app = express();

app.use(cors()); //para el problema de los headers

app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method;
      delete req.body._method;
      return method;
    } 
}));

app.use('/personajes', personajes);
app.use('/partidas', partidas);
app.use('/users', users);
app.use('/facciones', facciones);

app.listen(8080);