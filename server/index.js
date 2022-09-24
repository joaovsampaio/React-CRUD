const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "simplecrud"
});

app.post('/create', (req, res) => {
    const product = req.body.product
    const value = req.body.value

    db.query('INSERT INTO cruddatas (produto, valor) VALUES (?,?)',
    [product, value], 
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