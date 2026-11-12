const express = require('express');
const env = require('dotenv');
const tarefasRoute = require('./routes/tarefasRoute');

env.config();
const app = express();
const porta = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/tarefas', tarefasRoute);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});