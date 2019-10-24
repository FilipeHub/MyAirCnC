const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

//mongoose.connect('mongodb://localhost/aircnc',
mongoose.connect('mongodb+srv://omnistack:omnistack@filipeserver-8wfhq.mongodb.net/aircnc?retryWrites=true&w=majority', 
    {useNewUrlParser:true,
    useUnifiedTopology: true});

app.use(cors()); //Deixando vazio qualquer aplicação pode acessar a API. { origin : 'http://localhost:3333' }
app.use(express.json()); // Deve vir antes do use(routes). Só o que vem depois dessa inha entende instruções JSON
app.use(routes);

app.listen('3333');