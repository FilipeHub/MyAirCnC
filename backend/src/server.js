const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//mongoose.connect('mongodb://localhost/aircnc',
mongoose.connect('mongodb+srv://omnistack:omnistack@filipeserver-8wfhq.mongodb.net/aircnc?retryWrites=true&w=majority', 
    {useNewUrlParser:true,
    useUnifiedTopology: true});

app.use(express.json()); // Deve vir antes do use(routes). Só o que vem depois dessa inha entende instruções JSON
app.use(routes);

app.listen('3333');