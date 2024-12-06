const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dontblameitonme', 
  database: 'dreamcake_db', 
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

// Rota para buscar cupcakes
app.get('/cupcakes', (req, res) => {
  db.query('SELECT * FROM cupcakes', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar um pedido
app.post('/orders', (req, res) => {
  const { cupcakeId, quantity, totalPrice } = req.body;
  db.query(
    'INSERT INTO orders (cupcake_id, quantity, total_price) VALUES (?, ?, ?)',
    [cupcakeId, quantity, totalPrice],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ message: 'Pedido adicionado com sucesso!' });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000!');
});
