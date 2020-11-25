const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://user_next_api:Y9xoFu4RI4Za3HDl@cluster0-shard-00-00.dh5fz.mongodb.net:27017,cluster0-shard-00-01.dh5fz.mongodb.net:27017,cluster0-shard-00-02.dh5fz.mongodb.net:27017/next_api?ssl=true&replicaSet=atlas-g066oy-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso ao banco de dados")
}).catch(err => console.log("NÃO CONECTOU -> " + err));

//app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);