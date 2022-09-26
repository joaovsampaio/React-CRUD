const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "simplecrud"
});

app.post('/create', (req, res) => {
    const product = req.body.product
    const price = req.body.price

    db.query('INSERT INTO cruddatas (produto, valor) VALUES (?,?)',
    [product, price], 
    (error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.send("Valores Inseridos")
        }
    })
});

app.listen(3001, () => {
    console.log("Funcionando")
});