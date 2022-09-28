const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "simplecrud",
});

app.post("/create", (req, res) => {
  const product = req.body.product;
  const price = req.body.price;

  db.query(
    "INSERT INTO cruddatas (produto, valor) VALUES (?,?)",
    [product, price],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("Valores Inseridos");
      }
    }
  );
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM cruddatas", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/products", (req, res) => {
  const id = req.body.id;
  const product = req.body.product;
  //const price = req.body.price;

  db.query(
    "UPDATE cruddatas SET produto = ? WHERE id = ?",
    [product, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Funcionando");
});
